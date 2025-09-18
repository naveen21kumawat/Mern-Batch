# MERN Stack Application

## Setup Instructions

### Backend Setup
1. Navigate to Backend directory:
   ```bash
   cd Backend
   ```

2. Start the backend server:
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```
   Backend will run on: http://localhost:3000

### Frontend Setup
1. Navigate to Frontend directory (in a new terminal):
   ```bash
   cd Frontend
   ```

2. Start the frontend server:
   ```bash
   npm run dev
   ```
   Frontend will run on: http://localhost:5173

## API Endpoints

### POST /api/register
Register a new user
- **URL**: `http://localhost:3000/api/register`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

## Features
- ✅ React Router navigation
- ✅ Tailwind CSS styling
- ✅ Responsive navbar
- ✅ User registration form
- ✅ Frontend-Backend communication
- ✅ Loading states and error handling

## Project Structure
```
SenddataTObackend/
├── Backend/
│   ├── app.js          # Express server
│   └── package.json    # Backend dependencies
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js  # Proxy configuration
│   └── package.json    # Frontend dependencies
└── README.md
```
