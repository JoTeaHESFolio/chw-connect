# CHW Connect

**CHW Connect** is a Single Page Application (SPA) built with React and Vite that supports Community Health Workers (CHWs) and nonprofit teams by offering tools to track participant interactions, log service encounters, and access local resource directories.

Authored by Jody Trumbull for DGMDE-28 Final Project Spring Term 2025

## Folder Structure

chw-connect/
├── public/
│ ├── data/
│ │ ├── participants.json # Simulated data
│ │ ├── resources.json # Community resource directory
│ └── favicon.ico
│
├── src/
│ ├── assets/
│ │ ├── logo.svg
│ │ └── icons/
│ ├── components/
│ │ ├── DashboardSummary.jsx
│ │ ├── ParticipantCard.jsx
│ │ ├── EntryForm.jsx
│ │ ├── ResourceDirectory.jsx
│ │ └── NavBar.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── AddEntry.jsx
│ │ ├── Participants.jsx
│ │ ├── Resources.jsx
│ ├── utils/
│ │ ├── api.js # fetch from Google Sheets or local fallback
│ │ ├── helpers.js # sorting, formatting, validation
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

---

## Tech Stack

- **React + Vite** – Core SPA framework
- **React Router** – Client-side navigation between `/dashboard`, `/add`, `/participants`, `/resources`
- **React Hooks** – `useState`, `useEffect` for form and data management
- **JSX Forms** – Intake form, editable participant profiles, progress notes
- **localStorage (for this project a Google Sheets API)** – For simulating persistent data
- **OpenSheet** – For resource directory and demo participant API

---

## Project Goals

- Log and track participant encounters
- Maintain a list of community resources
- Support low-tech CHW users with a clean, mobile-friendly UI
- Provide multilingual content
- Create a sustainable tool for small nonprofits or public health teams

---

## Development To-Do

- [X ] Set up routing
- [X ] Build EntryForm and state handling
- [ X] Simulate data with local JSON
- [X ] Connect resource list to API (OpenSheet or custom Apps Script)
- [ X] Create dashboard summary and follow-up views

---

## Deployment Notes

This is a simulation prototype. For real-world use, we would want ensure:

- HIPAA compliance via BAA-backed services
- Proper user authentication
- Secure data storage and encryption
