Zackary Di Dio — Next.js Resume Page
A single-page resume built with Next.js (App Router) and styled entirely with Tailwind CSS utility classes. Created for Coding Project 03.

Getting Started
Prerequisites

Node.js LTS (≥ 18.x)
npm, pnpm, or yarn

Install & Run Locally
bashnpm install
npm run dev
Then open http://localhost:3000 in your browser.

Features Implemented

 Next.js App Router project scaffolded with create-next-app
 Resume content written as JSX inside src/app/page.js
 Real personal information — no placeholder text
 Semantic HTML elements (<header>, <main>, <section>, <footer>, <h1>–<h3>, <ul>, <p>)
 Logical heading hierarchy (<h1> for name, <h2> for sections, <h3> for roles/schools)
 All styling via Tailwind CSS utility classes using className
 No custom CSS rules in globals.css — only Tailwind directives
 Clean, readable layout at desktop viewport
 No browser console errors

Resume Sections

 Name, contact info, and objective
 Education
 Work Experience
 Projects
 Skills (Technical & Professional)
 Activities & Interests


Known Issues / Limitations

Layout is optimized for desktop viewports (max-w-3xl); mobile layout is functional but not fully optimized.
No dark mode support.


Tech Stack

Next.js — App Router
Tailwind CSS — utility-first styling
React / JSX