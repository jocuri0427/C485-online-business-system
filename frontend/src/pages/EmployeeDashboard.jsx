import { useNavigate } from "react-router-dom"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function EmployeeDashboard() {
  const navigate = useNavigate()
  const goToInventory = () => {
    navigate("/inventory")
  }
  const handleLogout = () => {
    localStorage.removeItem("role")
    localStorage.removeItem("username")
    navigate("/")
  }

  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center justify-center">

      <h1 className="text-7xl font-extrabold text-blue-500 mb-6 text-center">
        Employee Dashboard
      </h1>
      <h2 className="text-3xl font-bold text-gray-200 mb-16 text-center">
        Welcome back, {localStorage.getItem("username") || "User"}!
      </h2>

      <div className="p-4 grid grid-cols-2 gap-20 h-1/2 w-full max-w-4xl justify-center items-center">
        <div onClick={goToInventory} className="flex-col bg-gray-300 hover:bg-blue-600 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-10 w-full text-center text-4xl h-full">
            <img src={inventory} alt="Inventory" className="w-24 h-24 mx-auto mb-4" />
            Manage Inventory
        </div>
        <div onClick={handleLogout} className="flex-col bg-gray-300 hover:bg-red-600 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-10 w-full text-center text-4xl h-full">
            <img src={logout} alt="Logout" className="w-24 h-24 mx-auto mb-4" />
            Logout
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
