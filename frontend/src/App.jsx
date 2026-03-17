//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Router, Routes, Route, Link } from 'react-router-dom'
import Inventory from './pages/Inventory.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center justify-center">

      <h1 class="text-9xl font-extrabold text-blue-600 mb-10">
        Businexus
      </h1>
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        Admin
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        Employee
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
        Inventory
      </button>
    </div>
  )
}

export default App
