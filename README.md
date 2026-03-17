# Online Business System

A full-stack application for managing a business, its branches, employees, and inventory. 

The frontend is built with React, Vite, and TailwindCSS, while the backend is an API powered by Python, Flask, and an SQLite database using SQLAlchemy.

---

## 🚀 Setup & Installation (New Machine)

To run this project on a brand new machine, you will need to start both the Python Backend and the Node.js Frontend.

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18+ recommended)
- **Python** (v3.10+ recommended)
- **Git** (optional, for cloning the repo)

---

### 1. Setting up the Backend (Python / Flask)

The backend handles the API routing and database operations.

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. *(Highly Recommended)* Create and activate a Virtual Environment to keep your Python packages isolated:
   - **Windows:**
     ```powershell
     python -m venv venv
     .\venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install the required Python packages:
   ```bash
   pip install flask flask-cors flask-sqlalchemy
   ```

4. Start the backend server:
   ```bash
   python app.py
   ```
   *The Flask API is now running on `http://127.0.0.1:5000`*

---

### 2. Setting up the Frontend (React / Vite)

The frontend is the user interface built with Vite and React.

1. Open a **second, new terminal window** (leave the backend running in the first one).
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

3. Install all the necessary Node packages (React, Tailwind, Vite, Axios, etc.) via `package.json`:
   ```bash
   npm install
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   *The React interface is now running on `http://localhost:5173`*

---

## 🛠️ Tech Stack Overview
- **Frontend:** React, Vite, TailwindCSS, React-Router, Lucide-React
- **Backend:** Python, Flask, Flask-CORS, Flask-SQLAlchemy
- **Database:** SQLite (`business_data.db`)
