# System Design

## Design Goals
- Minimal scope with clear separation of concerns
- Privacy-first signal handling
- Replaceable AI decision logic
- Extensible interfaces

## High-Level Design (HLD)
```mermaid
flowchart LR
    subgraph EXT["Browser Extension (Manifest v3)"]
        SC["Signal Collection"]
        AG["Signal Aggregation"]
        API["AI Request Client"]
        DH["Decision Handling"]
        NT["Notification Display"]
    end

    subgraph AI["AI Decision Service (Docker)"]
        VH["Request Validation"]
        DE["Decision Engine"]
        RL["Rule / AI Logic"]
        RS["Structured Response"]
    end

    SC --> AG
    AG --> API
    API -->|HTTP JSON| VH
    VH --> DE
    DE --> RL
    RL --> RS
    RS -->|Decision JSON| DH
    DH --> NT
```
### Architecture Overview
Browser Extension
    → Signal collection
    → Aggregation
    → AI request
    → Notification

AI Decision Service
    → Decision inference
    → Decision response

## Key Design Decisions

### Separation of Concerns
- Extension handles signal collection only
- AI service handles decision-making

### AI Usage
AI is used for inference, not prediction or profiling.

### Fallback Strategy
If AI service is unavailable, rule-based logic ensures functionality.

### Constraints
- Browser extensions require JavaScript
- Limited development time (~5 hours)
- Privacy restrictions

## Trade-offs
- Simplicity over completeness
- Inference over learning
- No persistent storage

