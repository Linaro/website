---
title: Container Orchestration
description: A container orchestrator manages workloads and services. It
  automates the management, deployment, and scaling of containers across
  multiple servers by abstracting the underlying infrastructure.
---

## Container orchestration

A container orchestrator manages workloads and services. It automates the management, deployment, and scaling of containers across multiple servers by abstracting the underlying infrastructure.

Orchestrators perform a variety of tasks:

### Service discovery and load balancing

A service can be discovered based on IP address or DNS record. Traffic can be load-balanced and distributed.

### Self-healing

Life cycle management is triggered by periodic health checks. Containers can be re-started, killed or made unavailable.

### Storage orchestration

Storage options for a container are managed and the chosen service delivered.

### Automated rollouts and rollbacks

Specified container characteristics can be changed, and the roll-out of new containers and roll-back of existing, but now out-dated containers, is managed.

### Secret and configuration management

Sensitive information such as passwords, keys and certificates are stored and managed. Updates and changes are automatically configured and available, avoiding the requirement to re-build a container image.
