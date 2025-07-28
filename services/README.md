# Services

This folder contains **shared services and infrastructure code**.

Services provide interfaces to external systems or cross-cutting concerns, such as:

### Examples

- API clients (e.g., Axios instance)
- Analytics
- Push notifications
- Storage helpers (mmkv)

### Guidelines

- Shared services only — if a service is feature-specific, place it inside that feature folder.
- Keep services stateless and reusable.
