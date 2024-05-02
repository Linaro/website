---
layout: post
title: Subkeys in OP-TEE part 2
description: Up to now, Trusted Applications (TAs) for OP-TEE could be signed
  and later verified by a single certificate. When multiple vendors are involved
  though having a single signer doesn’t scale well. A while back we took a quick
  look at the subkeys implemented in OP-TEE. In this blog, we will do a deep
  dive on the implementation.
date: 2024-04-26 02:48:55 +01:00
image: /assets/images/content/Code_Image_Core_tech.jpg
tags:
  - Security
category: blog
author: jens.wiklander
---
# Introduction

[In part 1 of this blog series](https://www.linaro.org/blog/subkeys-in-op-tee-part-1/) we gave a quick overview of subkeys, here we are starting where we left off by going into more details. If you are attending Linaro Connect in three weeks time, make sure to check out the session [10 years with OP-TEE](https://www.kitefor.events/events/linaro-connect-24/submissions/94) where a panel will discuss the history of OP-TEE and what they think the future has in store for the project.

# Subkeys

Subkeys define a hierarchy of keys, where the root key is the root of trust. The root key is used to verify the first-level subkeys and the first-level subkeys are used to verify their second-level subkeys, the second-level subkeys the third-level, and so on.

{% include image.html path="/assets/images/content/hierarchy-of-keys.png" alt="Hierarchy of Keys" %}

**Figure 1: Hierarchy of keys**

The public key of the root key is usually hard-coded into OP-TEE or otherwise made available in a secure way. The tree of subkeys doesn’t have to be balanced, it can have any shape needed to delegate keys as needed.

# Namespaces

Each subkey defines a UUIDv5 namespace \[1] to which the next signed subkey or Trusted Application (TA) must belong.

When expanding one branch of the example above with a Universally Unique IDentifier (UUID) it becomes:

{% include image.html path="/assets/images/content/namespace-with-uuidv5-figure.png" alt="namespace with UUIDv5" %}

**Figure 2: Namespace with UUIDv5**

The UUID in the second-level subkey is in the UUIDv5 namespace defined by the UUID of the first-level subkey. The UUID for the second-level subkey becomes the result of

`UUIDv5(UUID of First-level subkey, “Second-level subkey”)`

where the second parameter is the UTF-8 name chosen for the second-level subkey. This operation guarantees that only the UUID used for the second-level subkey can be produced with the UUID from the first-level subkey as input. Any other UUID as input would produce a different output, regardless of the name parameter, barring unlikely hash collisions.

The UUID of the first-level subkey can be any UUID and does not need to be determined by the UUIDv5() function.

# Signing and verifying a TA

When adding a TA to the example above it becomes:

{% include image.html path="/assets/images/content/multiple-subkey-levels.png" alt="multiple subkey levels" %}

**Figure 3: Multiple subkey levels**

The signature field in each box above is produced with the private key associated with the box to the left. 

* TA1 is signed with the private key of the second-level subkey
* The second-level subkey is signed with the private key of the first-level subkey
* The first-level subkey is signed with the private root key

The same principle is used for verification, the signature field in each box is verified using the public key of the box to the left. The UUID field in each of the boxes is verified using the UUID of the box to the left and the name of the box as input.

* The signature of the first-level subkey is verified using the public root key
* The signature of the second-level subkey is verified using the public key of the first-level subkey and the UUID is verified to match
  UUIDv5(UUID of the first-level subkey, “Second-level subkey”)
* The signature of TA1 is verified using the public key of the Second-level subkey and the UUID is verified to match
  UUIDv5(UUIDv5 of the second-level subkey, “TA1”)

Verifying the First-level subkey in the example above is a special case since the root key doesn’t use the UUIDv5 namespace. The UUIDv5 field of TA1 is what is normally called the TA UUID, that is, how the TA is identified by a TEE Client \[2].

# Outside a UUIDv5 namespace

{% include image.html path="/assets/images/content/using-root-key-only.png" alt="using root key only" %}

**Figure 4: Using root key only**

A well-known UUID or a UUID generated outside a UUIDv5 scheme can’t be part of a UUIDv5 namespace. This is typically the case with TAs used before the subkey scheme was introduced. How can these TAs be brought into the subkey scheme so we can avoid signing these with the root key?

A concept called identity subkey is introduced to handle that. It’s similar to a normal subkey, except that it can only be used to verify a TA with the same UUID as the subkey itself.

{% include image.html path="/assets/images/content/adding-an-identity-subkey.png" alt="adding an identity subkey" %}

**Figure 5: Adding an identity subkey**

The example above illustrates how an identity subkey can be used instead of relying directly on the root key. An identity subkey can also be signed with a normal subkey, but then it’s restricted to the UUIDv5 namespace of that subkey.

# Subkey security features

A subkey consists of two files, a private key pair in a .pem file and the signed public key in a .bin file. Subkeys reuse the signed header (SHDR) format used for signed TAs, followed by a payload holding the public key and UUID among other fields. The details of the format are described in the OP-TEE documentation at \[3].

## Signing and verification

OP-TEE currently supports subkeys using TEE_ALG_RSASSA_PKCS1_PSS_MGF1_SHA256 and TEE_ALG_RSASSA_PKCS1_V1_5_SHA256 for signing and verification, but the format can easily support any algorithm supported by GlobalPlatform TEE Core Internal API \[4].

## Namespaces

The UUID field is key to using UUIDv5 namespaces needed to separate which TAs can be signed by which subkey. Without this guard, any subkey could be used to sign any TAs.

The name size field controls the length of the string parameter used for UUIDv5 derivation. Setting this field to 0 disables UUIDv5 derivation and instead makes the subkey an identity subkey.

## Revocation

Subkeys have a version field that can be used to revoke previous subkeys with the same UUID but a lower version number. Each time a subkey is verified the version of the subkey is also checked against a database kept in secure storage. If the version is larger than the entry in the database, the database is updated with the new value. If the version is smaller than the entry in the database, the verification of the subkey fails.

As explained further down, all subkeys needed to verify a TA are included in the TA binary. If a subkey is revoked with an increased version number, all TAs signed with the older subkey will also be revoked since they are using the old subkey. Signing the TA again with the updated subkey will permit the TA to be loaded again. Loading a TA signed with a newer version of a subkey is enough to revoke earlier subkeys.

## Maximum depth

The maximum depth field limits how many subkeys can follow this subkey. Each subkey should have the depth field reduced by at least 1 compared to the subkey directly above in the hierarchy or it will fail during verification.

Identity subkeys should typically use the value 0 here as it might not make much sense to allow subkeys to follow an identity subkey.

# Subkeys part of signed TA

A TA verified by subkeys has the needed subkeys before the signature. The subkeys are provided in the order needed when verifying the TA. The root key is used to verify the first subkey and each subkey is used to verify the next until the TA itself has been verified.

{% include image.html path="/assets/images/content/ta-verified-with-two-subkeys.png" alt="ta verified with two subkeys" %}

**Figure 8: TA verified with two subkeys**

A TA verified by an Identity subkey is handled similarly to other subkeys.

{% include image.html path="/assets/images/content/ta-verified-with-an-identity-subkey.png" alt="ta verified with an identity subkey" %}

**Figure 9: TA verified with an identity subkey**

# Stay tuned

* [Subscribe](https://lists.trustedfirmware.org/mailman3/lists/op-tee.lists.trustedfirmware.org/) to the OP-TEE mailing list op-tee@lists.trustedfirmware.org
* Join the [Linaro OP-TEE Contributions (LOC) monthly meeting](https://www.trustedfirmware.org/meetings/) or check out the project page [Linaro's OP-TEE Contributions - Confluence](https://linaro.atlassian.net/wiki/spaces/LOC/overview)
* Visit the [OP-TEE page](https://www.trustedfirmware.org/projects/op-tee/) at trusted firmware.

Thank you for reading this far. This concludes the two-part series on subkeys in OP-TEE. If you have any questions or thoughts feel free to create an issue at <https://github.com/OP-TEE/optee_os/issues> or to reach out on the mailing list. You’re also welcome to join the LOC meetings.

## References

1. UUIDv5 and namespaces are described in [RFC4122](https://datatracker.ietf.org/doc/html/rfc4122). Note that OP-TEE uses a truncated SHA-512 instead of the weak SHA-1 hash when deriving a new UUID from a namespace and name
2. [GlobalPlatform TEE Client API Specification v1.0](https://www.google.com/url?q=https://globalplatform.org/specs-library/tee-client-api-specification/&sa=D&source=docs&ust=1714145793395645&usg=AOvVaw1SOHFCG6aCnPod2GUBLuGO)
3. OP-TEE documentation, subkey section <https://optee.readthedocs.io/en/latest/architecture/subkeys.html>
4. [GlobalPlatform Internal Core API Specification v1.3.1](https://globalplatform.org/specs-library/tee-internal-core-api-specification/)[](https://globalplatform.org/specs-library/tee-internal-core-api-specification/)