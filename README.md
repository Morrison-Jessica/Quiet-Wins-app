# Quiet Wins  
### A Minimal MERN Reflection System

Quiet Wins is a full-stack MERN application designed to capture small daily accomplishments that are often overlooked. The project emphasizes **intentional scope, low-friction interaction, and clean system design** rather than feature density.

This application was built following a real-world workflow: planning, documentation, layout decisions, API-first development, and deployment.

---

## Purpose

Many productivity tools focus on optimization, metrics, and scale. Quiet Wins takes a different approach by prioritizing reflection over performance.

The goal is to provide a simple, calm interface for recording progress without introducing cognitive overload.

---

## Core Features

- Create, view, update, and delete reflection entries
- Display entries in a simple chronological list
- Minimal two-page front-end structure
- RESTful API with persistent data storage
- Clean, custom CSS styling (no UI frameworks)

---

## Pages

- **Home (`/`)**  
  Displays a list of recorded wins.

- **Form (`/new` / `/edit`)**  
  Used to create or update a win through a controlled React form.

---

## Data Model

Each entry includes:
- **Title** – short description of the win  
- **Category** – lightweight personal grouping  
- **Reflection** – optional context or note  
- **Created At** – automatically generated timestamp  

---

## Tech Stack

### Frontend
- React (Vite)
- Custom CSS

### Backend
- Node.js
- Express

### Database
- MongoDB
- Mongoose

### Tooling & Services
- GitHub (version control)
- Postman (API testing)
- MongoDB Atlas (database hosting)
- Render (backend deployment)
- Netlify (frontend deployment)

---

## API Overview

The backend exposes standard RESTful CRUD endpoints:
- `GET` – retrieve all entries
- `POST` – create a new entry
- `PUT / PATCH` – update an existing entry
- `DELETE` – remove an entry

The backend was implemented before the frontend to establish a stable data contract.

---

## Design Approach

- Minimal layout and visual hierarchy
- Limited color palette
- Emphasis on spacing and readability
- No UI libraries or component frameworks

These choices were intentional to demonstrate layout fundamentals and design control.

---

## AI Assistance Disclosure

AI tools were used selectively during development for:
- Ideation and planning support
- Documentation drafting
- Code review and clarification

All architectural decisions, implementation, testing, and final code were authored, reviewed, and validated by me. AI was treated as a **support tool**, not a replacement for engineering judgment.

---

## Outcome

This project demonstrates:
- Intentional product scoping
- RESTful API design
- Full-stack MERN development
- Custom layout and styling
- Deployment of a production-ready application
- Systems-oriented thinking over feature accumulation

---

## Status

The backend API is deployed using Render and connected to a MongoDB Atlas database.

<!-- This project is complete and deployed. Future enhancements were intentionally deferred to maintain clarity and scope. -->


