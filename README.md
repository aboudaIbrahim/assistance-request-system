# 🛠️ Assistance Request Mini Project

A full-stack support request management system built with **Next.js** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 🧾 Features

### 🔐 Authentication

- Login with seeded credentials
- Role-based redirection (Admin / User)

### 👤 User (Simple User)

- Automatically redirected to "My Requests" page after login
- If no requests exist, prompted to create one
- Can submit a new request via a form
- Can view their request list and detailed view

### 🛠️ Admin

- Redirected to full request list after login
- Can:
  - View all user requests
  - Search by keyword
  - Approve or reject requests
  - Add comments on approval/rejection

---

## 🧪 Seeded Users

> The following accounts are automatically seeded on backend startup.

| Role  | Email           | Password |
| ----- | --------------- | -------- |
| Admin | admin@admin.com | admin123 |
| User  | user@user.com   | user1234 |

---

## 📁 Project Structure

repository-root/
├── front/ # Next.js frontend
└── back/ # Express.js backend

---

## ⚙️ Environment Variables

Both frontend and backend include a `.env.example` file. Copy and rename it to `.env` before starting the apps.

### ✅ Frontend `.env`:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_CRYPTO_SECRET=b91a4d3f91c2be2f1d9172f43b61b5f3b7a3d9acbfe6cb5756760ff9b2e3

### ✅ Backend `.env`:

JWT_SECRET=b91a4d3f91c2be2f1d9172f43b61b5f3b7a3d9acbfe6cb5756

## 🚀 How to Run the Project Locally

### 📦 Prerequisites

- Node.js v18+
- Yarn package manager
- MongoDB (local or cloud like MongoDB Atlas)

---

### 1. Clone the Repository

```bash
git clone git@github.com:aboudaIbrahim/assistance-request-system.git
cd your-repo-name
```

### Backend Setup (/back)

```bash
cd back
cp .env.example .env
yarn install
yarn dev
```

### Frontend Setup (/front)

```bash
cd ../front
cp .env.example .env
yarn install
yarn dev
```

## 🧰 Tech Stack

| Layer    | Tech Stack                          |
| -------- | ----------------------------------- |
| Frontend | Next.js, TypeScript, MUI, RTK Query |
| Backend  | Node.js, Express, MongoDB, JWT      |
| Styling  | MUI + Styled Components             |
| Forms    | React Hook Form                     |
| Auth     | Role-based login using JWT          |
