# Reference Digital Media Platforms for ARM

#### Summary:

This project has been defined to address the problem of defragmenting the media framework and associated security solutions that are currently found in the market.

The project is focused on both the RDK and Android platforms, in the following areas:

- Explore commonality between media playback frameworks on both platforms.
- Security solutions that can be implemented across both platforms
   - Common security solution components for RDK and Android
      - OP-TEE running on ARM TrustZone
      - Support standardized interface to the TEE via GlobalPlatform
      - Secure video path implemented in OP-TEE
   - W3C Encrypted Media Extensions and OpenCDM
      - Support MPEG Common Encryption and adaptive streaming (DASH)
      - Focus on DRM vendors who comply with TEE interface and OpenCDM
   - 4K video security is the market opportunity
   - Effort to standardize on secondary bootloader
   - Promote standardized CAS APIs for interoperability

#### Key Deliverables:

The Goal is to provide Reference implementations for both RDK and Android, containing media framework and security components with standardized interfaces. Key deliverables are:-

- W3C EME solutions running on Linux/RDK and Android
   - Clear Key open source reference build: Chromium, W3C EME, OpenCDM, OPTEE
   - Commercial DRM (e.g., PlayReady, Widevine, Primetime)
- Linaro Secure Media Solution
   - Implement hardware accelerated video path with W3C EME solution
   - Implement secure video path on OPTEE for Level 1 security
- Optimized media framework builds for Linaro RDK and Android
- Migration to LSK 4.1 and latest Yocto version for RDK
- Boot Architecture
   - Standardization of secondary bootloader build for Linux/RDK
- Key Ladder Standardized implementation on ARM TrustZone
