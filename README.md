Nexus Learning Dashboard
Nexus is a premium, modern learning dashboard built with Next.js, showcasing dynamic aesthetic designs and optimized architecture.

Architectural Choices
Framework: Next.js (App Router) + React 19 for a robust, SSR-first foundation.

Styling: Tailwind CSS combined with custom CSS for intricate visual effects (e.g., glassmorphism, glowing borders).

Animations: Framer Motion to power smooth micro-interactions, layout transitions, and hover effects that give the UI a responsive, dynamic feel.

Backend/Database: Supabase to fetch persistent course data seamlessly.

Icons: Lucide React for consistent, lightweight, and customizable iconography.

Server & Client Component Split
To maximize performance, security, and developer experience, this project strictly adheres to the Next.js App Router paradigms:

Server Components (Default): Components like app/dashboard/page.tsx handle data-fetching directly on the server. The CoursesData component queries Supabase asynchronously. This keeps the bundle size small and secures data-fetching logic on the server, while taking advantage of Suspense for streaming UIs and loading skeletons.

Client Components ('use client'): Interactivity is pushed to the leaves of the component tree. For example, Sidebar.tsx manages viewport resizing and navigation state on the client side, while CourseCard.tsx uses Framer Motion for spring-based hover animations and interactive rendering.

Challenges Faced & Solutions
Integrating Animations with SSR
Since Framer Motion requires client-side execution, balancing server-fetched data with interactive wrappers was a challenge. We resolved this by keeping data-fetching at the Server Page level (DashboardPage) and passing the resulting data as props to Client Components (CourseCard), maintaining SEO and performance while enabling rich interactions.

Responsive Layouts
Transitioning from a mobile-friendly bottom navigation bar to a collapsible desktop sidebar required careful orchestration of window resize events in the client, alongside Tailwind's responsive prefixes to prevent layout shifts.

Complex Aesthetics
Crafting the premium dark theme with noise textures and glowing borders could easily harm render performance if done poorly. We leveraged lightweight SVG filters and pseudo-elements driven by Framer Motion to ensure the effects remain hardware-accelerated and performant.




