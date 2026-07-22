# College Project Management Dashboard

## Submitted By

**Joylyn Princita Fernandes**

**Intern ID: CITS4025**

---

# Technologies Used

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router

## Backend

- Python
- Django
- Django REST Framework

## Database

- SQLite

## Authentication

- JWT Authentication
- Role-Based Access Control

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Secure Role-Based Access

---

# Faculty Features

- Create Projects
- Manage Projects
- Create Tasks
- Assign Tasks to Students
- Monitor Student Progress
- Track Task Completion
- View Dashboard Analytics

---

# Student Features

- View Assigned Projects
- View Assigned Tasks
- Update Task Status
- Track Project Progress
- Monitor Personal Work Status

---

# Dashboard Features

- Project Statistics
- Task Statistics
- Completed Task Count
- Pending Task Count
- Role-Based Dashboard View

---

# Project Description

College Project Management Dashboard is a full-stack web application developed to simplify project and task management within a college environment.

The platform provides separate access for faculty and students. Faculty members can create projects, assign tasks, and monitor student progress, while students can view their assigned projects, manage task progress, and update completion status.

The system is built using React for the frontend and Django REST Framework for the backend with JWT-based authentication and role-based authorization.

---

# Project Structure

```
college-project-dashboard/

backend/

college-dashboard-backend/

├── users/
├── projects/
├── tasks/
├── dashboard/
├── config/
└── manage.py


frontend/

college-dashboard-frontend/

├── src/
│
├── components/
├── pages/
├── api.js
└── App.jsx
```

---

# Application Modules

## User Management

- Student registration
- Faculty registration
- Authentication
- Role management


## Project Management

- Create projects
- View projects
- Manage project details
- Monitor project progress


## Task Management

- Create tasks
- Assign tasks
- Track task status
- Update completion progress


## Analytics

- Total projects
- Total tasks
- Completed tasks
- Pending tasks

---

# Installation & Setup

## Backend Setup

Navigate to backend:

```bash
cd college-dashboard-backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start backend server:

```bash
python manage.py runserver
```

Backend:

```
http://127.0.0.1:8000/
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd college-dashboard-frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend:

```
http://localhost:5173/
```

---

# Screenshots

(Add screenshots here)

- Login Page
- Registration Page
- Faculty Dashboard
- Student Dashboard
- Projects Page
- Tasks Page

---

# Future Enhancements

- Real-time chat system
- Notifications
- File sharing
- Advanced project analytics
- Email notifications
- Deployment with cloud services

---

# About

A full-stack college project management platform that helps faculty manage student projects and tasks while enabling students to track their progress through a modern dashboard interface.

---

# Submitted By

**Joylyn Princita Fernandes**

**Intern ID: CITS4025**