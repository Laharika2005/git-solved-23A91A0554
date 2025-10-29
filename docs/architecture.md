# System Architecture

## Overview
DevOps Simulator follows a **microservices architecture** designed for high availability, scalability, and flexibility across both production and development environments.

---

## Components

### 1. Application Server
| Environment | Details |
|--------------|----------|
| **Production** | Node.js + Express running on **port 8080**, supports **horizontal auto-scaling** with SSL enabled. |
| **Development** | Node.js + Express with **hot reload** on **port 3000**. Includes **Chrome DevTools debugger (port 9229)** and single-instance manual scaling for easier debugging. |

---

### 2. Database Layer
| Environment | Details |
|--------------|----------|
| **Production** | PostgreSQL 14 with **master-slave replication**, **daily automated backups**, and **secure SSL connections**. |
| **Development** | Local PostgreSQL instance (no replication), **manual backups**, and **auto-seeding with test data** on startup for easier testing. |

---

### 3. Monitoring System
| Environment | Details |
|--------------|----------|
| **Production** | Uses **Prometheus + Grafana** for real-time monitoring. Metrics include CPU, memory, disk, and network. **Email alerts** trigger on critical issues. |
| **Development** | Uses **basic console logging** with optional Prometheus integration. Includes additional metrics like **build time** and **debug stats**. Console-based alerts instead of email. |

---

### 4. Container Orchestration *(Development Only)*
- **Tool**: Docker Compose  
- **Services**: App, Database, Redis cache  
- **Features**: Local orchestration, volume mounts for **hot reload**, rapid rebuilds during development.  
- **Production**: Uses Kubernetes with **rolling updates** and **zero-downtime deployment**.

---

### 5. Authentication System *(Beta Feature)*
- **Method**: OAuth2 + JWT
- **Providers**: Google and GitHub (testing phase)
- **Session Storage**: Redis-based
- **Status**: Experimental, available in development mode only.

---

## Deployment Strategy
| Environment | Details |
|--------------|----------|
| **Production** | **Rolling updates** with automated rollback and zero downtime. Continuous deployment pipelines handle image pull and update operations. |
| **Development** | **Docker Compose hot reload** for quick testing. Rollback by reverting commits or restarting containers manually. |

---

## Development Workflow
1. Make code changes in `dev` branch.  
2. Hot reload automatically restarts the server.  
3. Run unit tests and verify console logs.  
4. Once stable, merge into `main` (production-ready).  

---

## Security
| Environment | Measures |
|--------------|-----------|
| **Production** | SSL/TLS encryption, encrypted DB connections, regular security audits, and secrets management. |
| **Development** | SSL disabled for local use, plain text credentials (development only), CORS enabled for all origins, and debug endpoints exposed for testing. |

---

## Experimental Features ⚙️
> These are under active testing and not yet available in production:

- Multi-cloud deployment support  
- AI-powered log analysis  
- Automatic rollback on anomaly detection  
- Interactive web monitoring dashboard  

---

✅ **Summary:**  
Production emphasizes **stability, security, and scalability**, while Development focuses on **flexibility, experimentation, and speed**.  
Both environments complement each other in the DevOps Simulator lifecycle.
