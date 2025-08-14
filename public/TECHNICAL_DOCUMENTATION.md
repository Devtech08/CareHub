# Technical Documentation: CareHub Application

This document provides a technical overview of the CareHub web application, outlining its architecture, technology stack, and key features. The application is designed to be a modern, responsive, and scalable platform for connecting patients with healthcare providers.

## 1. Technology Stack

The project is built on a modern, robust, and type-safe technology stack.

### 1.1. Core Framework & Language
- **Next.js (v15+):** A React framework for building server-rendered and statically generated web applications. The project uses the **App Router** paradigm for routing and layouts.
- **React (v18+):** A JavaScript library for building user interfaces with a component-based architecture.
- **TypeScript:** A statically typed superset of JavaScript that adds type safety to the codebase, reducing errors and improving developer experience. All code is written in `.ts` or `.tsx` files.

### 1.2. Styling & UI
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development. It is used for all styling within the application.
- **ShadCN UI:** A collection of reusable UI components built on top of Radix UI and Tailwind CSS. The components are accessible, customizable, and follow best practices. The core theme and CSS variables are defined in `src/app/globals.css`.
- **Lucide React:** A library of simply designed, pixel-perfect icons used throughout the UI.

### 1.3. AI & Machine Learning
- **Genkit:** An open-source framework from Google for building AI-powered features. It is used to connect to and manage calls to Google's Generative AI models.
- **Google AI (Gemini):** The underlying Large Language Model (LLM) used for the **AI Symptom Checker** feature. The connection is configured in `src/ai/genkit.ts`, and the specific AI flow is implemented in `src/ai/flows/symptom-checker-flow.ts`.

## 2. Third-Party APIs

The application integrates with several external APIs to provide its features:

- **Google AI API:** Accessed via the Genkit library to provide intelligent suggestions based on user-inputted symptoms. This is a core part of the AI Symptom Checker.
- **Unsplash API (`images.unsplash.com`):** Used to source high-quality, dynamic images for doctor profiles and health articles. This makes the application more visually appealing and engaging. The allowed domain is configured in `next.config.ts`.
- **Google Fonts API (`fonts.googleapis.com`):** Provides the `Inter` font family used for all typography in the application, ensuring a clean and modern look. This is configured in `src/app/layout.tsx`.
- **Placehold.co:** Used as a fallback for placeholder images during development.

## 3. Project Structure

The project follows a standard Next.js App Router structure.

```
/
├── public/               # Static assets (images, fonts, documentation)
├── src/
│   ├── app/                # Main application routes (pages)
│   ├── components/         # Reusable React components (UI and features)
│   │   ├── ui/             # ShadCN UI components
│   ├── ai/                 # AI-related logic using Genkit
│   │   ├── flows/          # Genkit flows for specific AI tasks
│   ├── lib/                # Utility functions, type definitions, and mock data
│   └── hooks/              # Custom React hooks (e.g., useToast)
├── package.json          # Project dependencies and scripts
└── next.config.ts        # Next.js configuration
```

### Key Directories
- **`src/app/`**: Contains all the application's routes. Each folder represents a URL segment. The `page.tsx` file in each folder defines the UI for that route, and `layout.tsx` defines the layout.
- **`src/components/`**: Houses all reusable React components. This includes custom components like `DoctorCard`, `Sidebar`, and `Header`, as well as the base UI components from ShadCN in `src/components/ui/`.
- **`src/ai/`**: This directory is dedicated to the application's generative AI functionality. It uses **Genkit** to define flows that interact with Google's AI models.
- **`src/lib/`**: A library of shared resources, including TypeScript type definitions (`types.ts`), utility functions (`utils.ts`), and mock data (`mock-data.ts`) used for development.

## 4. Languages and Code Style

- **HTML (as JSX):** HTML structure is written within React components using JSX (`.tsx` files), which allows for embedding JavaScript logic directly within the markup.
- **CSS (via Tailwind CSS):** CSS is not written directly. Instead, styling is applied using Tailwind's utility classes directly in the JSX. Global styles and CSS variables for theming are defined in `src/app/globals.css`.
- **TypeScript/JavaScript:** All application logic is written in TypeScript, which compiles to JavaScript. This includes frontend interactivity, component logic, and server-side logic for AI flows.

## 5. Key Features & Implementation

### 5.1. AI Symptom Checker
- **File:** `src/app/ai-symptom-checker/page.tsx` (UI)
- **AI Flow:** `src/ai/flows/symptom-checker-flow.ts`
- **Description:** Users can describe their symptoms in a text area. The input is sent to a Genkit flow, which calls the Gemini LLM to suggest a relevant medical specialty. The response is then displayed to the user. This feature does not provide medical advice.

### 5.2. Doctor Search & Booking
- **Files:** `src/app/find-a-doctor/page.tsx`, `src/components/doctor-card.tsx`, `src/components/booking-modal.tsx`
- **Description:** Users can search for doctors, filter by specialty and availability, and book appointments. The data is currently mocked in `src/lib/mock-data.ts`. The UI is designed to be responsive and user-friendly.

### 5.3. Patient & Doctor Dashboards
- **Files:** `src/app/patient/dashboard/page.tsx`, `src/app/doctor/dashboard/page.tsx`
- **Description:** Separate, role-based dashboards are provided for patients and doctors after they log in. These dashboards provide a summary of appointments, access to key features, and role-specific information.

### 5.4. Responsive Design
- **Implementation:** Achieved through Tailwind CSS's responsive prefixes (e.g., `md:`, `lg:`).
- **Description:** The layout adapts to various screen sizes, from mobile phones to desktops. Grids, navigation bars, and other UI elements reflow to ensure a good user experience on any device.
