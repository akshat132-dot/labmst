# React Router Navigation App

A foundational Single Page Application (SPA) built with React and React Router Dom. This project demonstrates core routing concepts, from basic page navigation to advanced implementations like lazy loading and protected routes.

## ✨ Features

* **Seamless Navigation:** Utilizes React Router's `<Link>` component for fast, client-side routing without full page reloads.
* **Component-Based Routing:** Renders specific components (Home, About) based on the current URL path.
* **404 Error Handling:** Includes a catch-all route to display a custom "Not Found" page for invalid URLs.
* **Lazy Loading:** Implements route-level code splitting using `React.lazy` and `<Suspense>` to optimize initial load times by fetching components only when needed.
* **Protected Routes:** Features a higher-order component (HOC) to restrict access to certain pages (like a Dashboard) based on user authentication status.

## 🛠️ Tech Stack

* **Frontend Framework:** React.js
* **Routing:** React Router Dom (v6+)
* **Styling:** CSS / Tailwind CSS (Optional)

## 📂 Folder Structure

```text
src/
├── components/
│   ├── Navbar.jsx          # Navigation links available on all pages
│   └── ProtectedRoute.jsx  # Wrapper logic for authenticated routes
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── About.jsx           # Information page
│   ├── Dashboard.jsx       # Protected page (requires auth)
│   └── NotFound.jsx        # 404 Error page
├── App.jsx                 # Main routing logic and Suspense boundaries
└── main.jsx                # Application entry point
