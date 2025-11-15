# AI Application Development Rules

This document outlines the core technologies and best practices for developing the InteriorRide application.

## Tech Stack

*   **React:** The primary JavaScript library for building user interfaces.
*   **TypeScript:** Used for type safety across the entire codebase, enhancing code quality and maintainability.
*   **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling of all components, ensuring responsive designs.
*   **Vite:** The build tool used for a fast development experience and optimized production builds.
*   **React Router:** The standard library for client-side routing, managing navigation between different views and pages.
*   **shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **Lucide React:** An icon library used for scalable and consistent iconography throughout the application.

## Library Usage Rules

*   **React:** All UI components and application logic should be built using React functional components and hooks.
*   **TypeScript:** All new files must be written in TypeScript (`.tsx` or `.ts`). Existing JavaScript files should be migrated to TypeScript when modified.
*   **Tailwind CSS:** All styling must be implemented using Tailwind CSS utility classes. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic values.
*   **React Router:** All application routes should be defined and managed using React Router. The main routing configuration should reside in `src/App.tsx`.
*   **shadcn/ui:** Prioritize using components from the `shadcn/ui` library for common UI elements (e.g., buttons, forms, cards). If a `shadcn/ui` component needs significant modification, create a new custom component that wraps or extends it, rather than directly editing the `shadcn/ui` source files.
*   **Lucide React:** Use icons from the `lucide-react` package for all graphical icons.
*   **File Structure:**
    *   Pages should be placed in `src/pages/`.
    *   Reusable components should be placed in `src/components/`.
    *   Utility functions should be placed in `src/utils/`.
    *   Directory names must be all lower-case.
*   **Responsiveness:** All designs and components must be responsive and adapt well to different screen sizes.
*   **Toasts:** Use a toast notification system (e.g., `react-hot-toast` if installed) to inform users about important events (success, error, loading).
*   **Error Handling:** Do not implement `try/catch` blocks for API calls or asynchronous operations unless specifically requested. Errors should bubble up for centralized handling and debugging.
*   **Simplicity:** Always aim for simple, elegant, and maintainable code. Avoid over-engineering.