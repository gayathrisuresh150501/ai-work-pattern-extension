# AI Work Pattern Awareness

A privacy-first browser extension that aggregates high-level activity signals and uses a Dockerized AI decision service to infer unhealthy work patterns and deliver context-aware reminders.

## Why This Project
Most productivity tools rely on static timers, leading to alert fatigue. This project explores whether AI-assisted decision-making can deliver more relevant and minimal nudges under real-world constraints.

## High-Level Architecture
Browser Extension → AI Decision Service → Decision → Extension Notification

## Key Characteristics
- Browser extension (Manifest v3)
- AI-assisted decision logic
- Dockerized backend service
- Privacy-first by design
- Extensible architecture
- Built collaboratively as a mini project

## Repository Structure
- `extension/` – Browser extension source
- `ai-service/` – Dockerized AI decision service
- `BUSINESS_REQUIREMENTS.md` – Problem & scope definition
- `DESIGN.md` – Architecture & trade-offs
- `EXTENSIBILITY.md` – Future-proofing strategy

## How to Run (Quick Start)
1. Start AI service using Docker
2. Load extension in Chrome (Developer Mode)
3. Simulate usage and observe reminders

## Design Philosophy
- Prioritizes engineering judgment over feature completeness
- Current scope: break reminders and post-work hour alerts
- Extensible for future reminder types (hydration, screen-fatigue, etc.)

