import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inventory from './pages/Inventory.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Branches from './pages/Branches.jsx'
import Login from './pages/Login.jsx'
import Employees from './pages/Employees.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
    </BrowserRouter>
  </StrictMode>
)
