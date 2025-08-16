# CareHub Technical Documentation

## 1. Introduction

Welcome to the technical documentation for CareHub, a modern healthcare platform built with Next.js, Firebase, and Google's Generative AI. This document provides an overview of the project's architecture, key components, and setup instructions.

## 2. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
- **Generative AI**: [Google AI (Gemini) via Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: Vercel

## 3. Project Structure

```
/src
├── ai/                # Genkit flows and AI logic
├── app/               # Next.js App Router pages and layouts
├── components/        # Reusable React components (UI and features)
├── contexts/          # React context providers (e.g., AuthContext)
├── hooks/             # Custom React hooks (e.g., useToast)
├── lib/               # Core utilities, types, and mock data
└── public/            # Static assets
```

## 4. Third-Party APIs

CareHub integrates with external services to provide its core functionality. All API keys and sensitive credentials are managed through environment variables (`.env` file).

### 4.1 Firebase

- **Provider**: Google
- **Usage**:
    - **Authentication**: Manages user sign-up, login, and sessions for both patients and doctors. It provides a secure and scalable authentication system.
- **Configuration**:
    - Firebase project credentials are stored in the `.env` file with the `NEXT_PUBLIC_FIREBASE_` prefix.
    - The initialization logic is located in `src/lib/firebase.ts`.

### 4.2 Google AI (Gemini)

- **Provider**: Google
- **Usage**:
    - **AI Symptom Checker**: The `symptom-checker-flow.ts` in `src/ai/flows` uses the Gemini model via Genkit. It takes a user's symptom description and suggests an appropriate medical specialty to consult.
- **Configuration**:
    - Requires a `GEMINI_API_KEY` to be set in the `.env` file.
    - The Genkit configuration and AI model selection are managed in `src/ai/genkit.ts`.
