# 🚀 Isum Enuka's Portfolio

<div align="center">

A modern, interactive portfolio website showcasing creative projects, technical skills, and the creative universes of a tech creator and developer.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

*This is a submission for the [New Year, New You Portfolio Challenge Presented by Google AI](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31).*

## About Me

Hi there! I'm Isum Enuka, a developer and student from Sri Lanka. I'm really passionate about that sweet spot where AI, Machine Learning, and web dev collide. I love figuring out how code can solve actual problems, and I enjoy creating content to share the messy, fun process of learning with others.

For 2026, my goal is pretty simple: build polished, user-focused apps that combine my tech skills with my personal brand. I really believe a portfolio shouldn't just be a list of repo links-it should be a "digital handshake" that gives people a real sense of who you are.

## How I Built It

I wanted a stack that felt modern and fast, but also fun to build with.

### The Tech Stack
*   **Frontend:** React (Vite) + TypeScript. (Gotta love that type safety!)
*   **Styling:** Tailwind CSS for layout, plus `framer-motion` and `gsap` for the animations.
*   **UI Magic:** I leaned heavily on **React Bits** for the visual effects, especially the `GlobalSpotlight` and `ParticleCard` components. They give the site that premium, polished feel.
*   **CMS:** **Sanity**. I set up a custom schema for my "Achievements" so I can easily update my wins without having to re-deploy the whole site every time.

### Pairing with Google AI (Gemini & Antigravity)
This project honestly felt like a collaboration. I used **Gemini** (via **Google AI Studio** and **Antigravity**) not just to generate code, but to actually solve design problems with me.

*   **Custom UI:** I wanted unique, interactive elements for my achievement cards but didn't want to get bogged down in the math. I described the vibe I wanted to Gemini-"fast-moving, energetic, glowing"-and it generated the complex HTML Canvas logic using Perlin noise. We tweaked the parameters together until it felt right.
*   **Sanity + TypeScript:** Connecting a flexible CMS to a strict frontend can be a headache. Gemini looked at my GROQ queries and wrote the TypeScript interfaces for me, which saved me from so many runtime errors.
*   **Cloud Run:** I'd never deployed a Vite app to Cloud Run before. Gemini basically acted as my DevOps engineer, writing the `Dockerfile` and `nginx.conf` to make sure the site was production-ready.

### Deployment
For deployment, I packaged everything into a Docker container and shipped it to **Google Cloud Run**. The process was super smooth: I just pushed my code to GitHub, connected it to Cloud Run, and Google handled the rest. It's running on serverless infrastructure now, so it scales to zero when nobody's looking (saving money!) but wakes up instantly when someone visits.

## What I’m Most Proud Of

Since this challenge is all about "New Year, New You," I'm really proud of how this portfolio matches where I'm heading in 2026.

*   **Innovation & Creativity:** I didn't want a cookie-cutter site. Using Google AI to help build custom UI components allowed me to create a visual identity that actually feels like *me*.
*   **Technical Implementation:** Moving from simple static hosting to a real containerized deployment on **Google Cloud Run** was a big milestone for me. It proves I can handle professional-grade infrastructure.
*   **Ready for 2026:** By backing everything with **Sanity**, I've built a platform that can grow. This isn't just a one-off project for a hackathon; it's a foundation I can keep building on throughout the year.