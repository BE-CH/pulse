# Features

This folder contains the **domain-driven, feature-specific modules** of the app.

Each subfolder represents a **self-contained feature**, which includes everything related to that feature:

- Screens and/or feature-specific UI components
- Hooks
- State (e.g., Redux slice or Zustand store)
- API calls/services specific to this feature
- Tests

---

## Structure Example

/features/
├── auth/
│ ├── AuthForm.tsx
│ ├── api.ts
│ ├── hooks.ts
│ ├── slice.ts
│ └── tests/
│
├── profile/
│ ├── ProfileScreen.tsx
│ ├── ProfileCard.tsx
│ ├── api.ts
│ └── …
│
└── …

---

## Guidelines

✅ Each feature owns its own business logic and implementation.  
✅ Components here should **not** be reused outside the feature — if they’re generic, move them to `/components`.  
✅ Any state or API calls used only by this feature should stay inside the feature folder.  
✅ Keep the folder self-contained, so it can be moved, deleted, or refactored independently.  
✅ Use clear, descriptive names for features based on the business domain (e.g., `auth`, `profile`, `orders`).

---

## When to create a new feature?

When a business capability or use-case is distinct enough that it has its own:

- API endpoints
- Screens
- State
- Hooks
- or specific business rules

---

## Notes

- If a feature is very simple, it may only contain a single screen or component.
- If a feature grows too large, break it into subfolders (`components/`, `hooks/`, etc.) within the feature folder.
