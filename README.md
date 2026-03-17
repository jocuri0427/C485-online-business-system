# COMP 485 Online Business System

frontend: react, vite, tailwindCSS
backend: python, flask, flask-cors, flask-sqlalchemy
database: sqlite via sqlalchemy

---

## Setup and Installation

### Prerequisites

make sure these are installed

- **Node.js** (v18+ recommended)
- **Python** (v3.10+ recommended)

---

### 1. backend setup (python/flask)

1. open a new terminal, run `cd backend`

2. (recommended) create and activate a venv:
   - **Windows:**
     python -m venv venv
     .\venv\Scripts\activate

   - **Mac/Linux:**
     python3 -m venv venv
     source venv/bin/activate

3. install packages:
   pip install flask flask-cors flask-sqlalchemy

4. start the backend server:
   python app.py

---

### 2. frontend setup (React / Vite)

1. open a new terminal, run `cd frontend`

2. install packages:
   npm install

3. start the frontend development server:
   npm run dev
