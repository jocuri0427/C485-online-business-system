//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Inventory from './pages/Inventory.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Branches from './pages/Branches.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center justify-center">
      <div className="h-1/2 w-full flex flex-col items-center justify-evenly">
        <h1 class="text-[200px] font-extrabold text-blue-600 mb-10">
          Businexus
        </h1>
        <h3 class="text-3xl font-bold text-white mb-10">
          Your One-Stop Business Management Solution
        </h3>
      </div>
      <div className="h-1/2 w-full flex flex-col items-center justify-evenly">
        <button onClick={() => navigate('/login')} className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-5 px-20 rounded mb-10">
        Login
      </button>
      </div>
      
      
      
      
    </div>
  )
}

export default App
