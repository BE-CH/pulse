# `/app` — Expo Router Entry Point

This folder contains all the **routes and navigation structure** for the app.

It is the root of the file-based routing system powered by [Expo Router](https://expo.github.io/router/).

---

## 🚀 What goes here?

✅ **Screens & pages** — Each `.tsx` file is a route (screen).  
✅ **Route groups** — Parent folders that group related routes (e.g., `(auth)`, `(tabs)`, `(public)`).  
✅ **Layouts** — `_layout.tsx` files define navigation layouts (e.g., stack, tabs, drawer) for a route group.  
✅ **Modals** — Place modal screens in a `modals/` folder or anywhere with the appropriate layout.

---

## 📄 Example Structure

/app
├── \_layout.tsx # Root layout for the app
├── index.tsx # Home page
├── (auth)/ # Auth-related routes
│ ├── \_layout.tsx
│ ├── login.tsx
│ └── register.tsx
├── (tabs)/ # Tab navigation
│ ├── \_layout.tsx
│ ├── home.tsx
│ └── profile.tsx
├── modals/
│ └── settings.tsx
└── …

---

## 🧱 Responsibilities of `/app`

🔷 Defines the app’s routing map: URLs → Screens.  
🔷 Handles navigation layout for different route groups.  
🔷 Extracts and passes route params/query params into feature screens as props.  
🔷 Keeps routing concerns separate from business logic & domain features.

---

## ✨ Best Practices

✅ Keep screens in `/app` **thin & declarative** — delegate business logic/UI to `/features`.  
✅ Use route groups (e.g., `(auth)`, `(tabs)`) to organize screens logically.  
✅ Use `_layout.tsx` to define navigation layouts for each group.  
✅ Use `useLocalSearchParams()` to access query or dynamic params inside the `/app` screen, and pass them to feature screens as props.  
✅ Place modals in a dedicated folder or with appropriate layout.

---

## 🚫 What NOT to put here

❌ Business logic.  
❌ Feature-specific components or state management.  
❌ API calls or domain-specific hooks.

Instead, put those in `/features`, `/components`, `/services`, etc.
