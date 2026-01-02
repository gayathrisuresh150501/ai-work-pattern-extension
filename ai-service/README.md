# AI Decision Service

## Purpose
Infer whether a reminder should be shown based on summarized user activity signals.

## Responsibilities
- Accept behavior summaries via REST API
- Apply AI or rule-based inference
- Return structured decisions
- Run as a Docker container

## Endpoint
POST `/v1/analyze`

## Technologies
- Go / Node.js
- Docker
- LLM API or heuristic logic

## Design Notes
- Stateless service
- No persistent storage
- Easily replaceable AI logic
