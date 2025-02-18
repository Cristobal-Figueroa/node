# CRUD Application with React PWA and Node.js Backend

This is a full-stack CRUD (Create, Read, Update, Delete) application with a React PWA frontend and Node.js/Express backend, connected to a MySQL database.

## Project Structure

```
crud3/
├── backend/           # Node.js backend
│   ├── server.js     # Express server
│   ├── .env          # Environment variables
│   └── database.sql  # Database schema
└── frontend/         # React PWA frontend
    ├── src/
    │   ├── App.jsx   # Main application component
    │   └── sw.js     # Service Worker for PWA
    └── public/
        └── manifest.json  # PWA manifest
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the database table using the SQL in `database.sql`

4. Start the server:
   ```bash
   npm start
   ```

The backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on http://localhost:5173

## Features

- Create, Read, Update, and Delete items
- Progressive Web App (PWA) support
- Responsive Material-UI design
- Offline capability
- MySQL database integration
- RESTful API backend

## API Endpoints

- GET /api/items - Get all items
- GET /api/items/:id - Get a specific item
- POST /api/items - Create a new item
- PUT /api/items/:id - Update an existing item
- DELETE /api/items/:id - Delete an item
