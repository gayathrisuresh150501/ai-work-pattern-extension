# Extensibility Strategy

## Guiding Principle
Freeze interfaces early, evolve implementations later.

## API Extensibility
- Versioned endpoint (`/v1/analyze`)
- Additive JSON fields
- Expandable decision types

## Extension Extensibility
- Modular signal providers
- Abstracted notification layer
- No AI-specific logic embedded

## AI Service Extensibility
- Pluggable decision strategies:
  - Rule-based
  - LLM-based
  - Hybrid
- Prompt versioning support
- Containerized deployment

## Future Enhancements (Not Implemented)
- Additional behavior signals
- Weekly summaries
- On-device AI
- Multi-browser support

Extensibility is achieved through stable contracts, not feature bloat.
