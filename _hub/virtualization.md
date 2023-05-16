---
title: Virtualization
description: >
  Virtualization creates an abstraction layer over resources such as processors,
  memory, and storage. The dependency between an application and its operating
  system on computing resources is broken.
---

## Virtualization

Virtualization creates an abstraction layer over resources such as processors, memory, and storage. The dependency between an application and its operating system on computing resources is broken. The resource pool, or infrastructure, is typically referred to as the host system.

A simulated computing environment is created. The pool of physical resources serves a single simulated computing environment but many guests. Each guest can run its own operating system and a distinct application. Multiple types of operating system, for example, Windows, macOS and Linux, can now be run on the same physical resources.

A hypervisor or virtual machine manager (VMM) creates and manages virtual machines. The hypervisor presents the guest operating systems with a virtual operating platform and manages the execution of the guest operating systems. The hypervisor interacts with the infrastructure to commission and schedule resources on behalf of the VMs.

{% include image.html path="/assets/images/content/virtualization_image1.png" alt="Virtualization image 1" %}

### Microservices

Microservices are component parts of an application that are designed to run independently. A microservices-based application is a collection of loosely coupled services that are lightweight and independently deployable and scalable. Each individual microservice is modular and runs its own processes without dependence on other microservices. A service can be modified without adverse consequences for the application.

A microservice can be deployed, upgraded, and managed discreetly. Development teams are not obliged to have common programming languages, toolchains or modes of operation. Open source resources are utilised widely, both for application functionality and development ecosystems. Continuous integration and continuous delivery (CI/CD) based on automated and repeatable processes ensures rapid development and deployment. New images are deployed frequently, sometimes many times a day. Development teams typically adopt a DevOps philosophy and self-organise.

### Containers

A container is a software unit that encompasses code and all its dependencies. It is a form of operating system virtualization that liberates applications from reliance on the underlying infrastructure. Unlike ordinary virtual machines that require an embedded OS, containers can run on any system or hardware. A container can be scaled quickly and independently of other microservices because it has all the resources it requires to run. A container is lightweight and portable.

{% include image.html path="/assets/images/content/virtualization_image2.png" alt="Virtualization image 2" %}

(remove Docker and replace with hypervisor layer, change infrastructure to VM)

Each VM includes a full copy of an operating system, the application, necessary binaries and libraries. VMs can also be slow to boot and are complex to manage. The container hypervisor layer abstracts the application from the underlying resources and enables many containers to run on a single VM. Multiple containers share the OS kernel with other containers, each running as isolated processes in user space.

There are two flavours of microservice:

### Stateful

A stateful microservice records the state of data after an action for use in a subsequent session. They require complex management and orchestration because stateful load-balancing is required for resilience.

### Stateless

A stateless microservice depends on events rather than any saved data. Stateless services can be created rapidly without complex management and orchestration requirements. Resources are utilised more efficiently because resources do not need to be reserved for resilience.

---

## Linaro and virtualisation

Linaro ensures [Quick Emulation (QEMU) is optimised for Arm](https://linaro.atlassian.net/wiki/spaces/QEMU/overview), maintaining Arm-specific code, core translation engine developer features and significant parts of the testing automation Continuous Integration (CI) loop. QEMU is a multi-platform Virtual Machine Monitor (VMM) and emulator that provides foundational functionality for open source projects that develop for the Arm ecosystem and want first sight of new features.

Linaro ensures:

- An active and well maintained upstream project.
- Useful architectural developments are upstreamed.
- Software reference platforms are maintained.
- Developer experience is optimised.

[Project Stratos](https://linaro.atlassian.net/wiki/spaces/STR/overview) is decoupling the dependencies inherent in proprietary implementations of hypervisors and System on a Chip (SoC). Creating open source front and back ends preserves the ability of manufactures to respond to innovation and maintain a cost and security-optimised development cycle.

