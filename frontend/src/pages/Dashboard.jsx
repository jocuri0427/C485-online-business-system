import { useNavigate } from "react-router-dom"
import branch from "../assets/hub.png"
import employee from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Dashboard() {
  const navigate = useNavigate()
  const goToInventory = () => {
    navigate("/inventory")
  }
  const goToBranches = () => {
    navigate("/branches")
  }
  const goToEmployees = () => {
    navigate("/employees")
  }
  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div className="w-screen h-screen p-10 flex flex-col items-center">

      <h1 class="text-9xl font-extrabold text-blue-600 mb-10">
        Businexus Dashboard
      </h1>

      <div class="p-4 grid grid-cols-2 gap-20 h-full w-full max-w-8xl">
      <div onClick={goToBranches} class="flex-col bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-6 w-full text-center text-4xl"><img src={branch} alt="Branches" class="w-16 h-16 mx-auto mb-2" />Branches</div>
      <div onClick={goToEmployees} class="flex-col bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-6 w-full text-center text-4xl"><img src={employee} alt="Employees" class="w-16 h-16 mx-auto mb-2" />Employees</div>
      <div onClick={goToInventory} class="flex-col bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-6 w-full text-center text-4xl"><img src={inventory} alt="Inventory" class="w-16 h-16 mx-auto mb-2" />Inventory</div>
      <div onClick={handleLogout} class="flex-col bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold flex items-center justify-center hover:cursor-pointer rounded-lg shadow-lg p-6 w-full text-center text-4xl"><img src={logout} alt="Logout" class="w-16 h-16 mx-auto mb-2" />Logout</div>

      </div>
    </div>
  )
}

export default Dashboard