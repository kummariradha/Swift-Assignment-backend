# Backend Assignment - Node.js + TypeScript + MongoDB

## Project Overview

This project is a simple backend REST API built with **Node.js**, **TypeScript**, and **MongoDB**. It manages users, posts, and comments with full CRUD operations and data import from JSONPlaceholder API.

---

## Features

- Load users, posts, and comments from JSONPlaceholder API
- Store data in MongoDB collections (`users`, `posts`, `comments`)
- CRUD operations for users:
  - Add user
  - Get user by ID (with posts and comments)
  - Delete user by ID
  - Delete all users
- Proper error handling with REST best practices
- TypeScript interfaces for type safety
- Modular code structure (controllers, services, routes, models)
- Environment variable configuration

---

## Tech Stack

- Node.js (v18+ recommended)
- TypeScript
- Express.js
- MongoDB (with official `mongodb` driver)
- Axios (for HTTP requests)

---

## Project Structure

backend-assignment/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── types/
│ ├── utils/
│ └── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md



---

## Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/backend-assignment.git
cd backend-assignment
