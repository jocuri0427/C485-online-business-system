import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import branch from "../assets/hub.png"
import employeephoto from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Employees() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    api.get("/employees").then(res => {
      setEmployee(res.data)
    })
  }, [])

    const goToBranches = () => {
      navigate("/branches")
    }
    const goToInventory = () => {
      navigate("/inventory")
    }
    const goToDashboard = () => {
      navigate("/dashboard")
    }
    const goToEmployees = () => {
      navigate("/employees")
    }
    const goMain = () => {
      navigate("/")
    }
    const handleLogout = () => {
      navigate("/")
    }
  {/* Add Item Button */}
  const [showModal, setShowModal] = useState(false)

  const [newItem, setNewItem] = useState({
    id: "",
    first_name: "",
    last_name: "",
    age: "",
    salary: "",
    position: ""
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post("/employees", {
        id: newItem.id,
        first_name: newItem.first_name,
        last_name: newItem.last_name,
        age: newItem.age,
        salary: newItem.salary,
        position: newItem.position
      })

      setShowModal(false)

      // reload page to show new employee
      window.location.reload()

    } catch (error) {
      console.error("Error adding employee:", error)
      alert("Failed to add employee")
    }
  }

  {/* Delete Item Button */}
  const handleDelete = async (id) => {
    try {
      await api.delete(`/employees/${id}`)
      // reload page to show updated employees
      window.location.reload()
    } catch (error) {
      console.error("Error deleting item:", error)
      alert("Failed to delete item")
    }
  }


  return (
    <div className="">
    <div className=" text-blue-500 font-bold flex items-center justify-between bg-gray-800 p-6">
        <button onClick={goToDashboard} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Dashboard</button>
        <h3 onClick={goMain} className="text-6xl text-blue-500 font-bold hover:cursor-pointer">Businexus</h3>
        <button onClick={handleLogout} className="bg-gray-300 hover:bg-blue-700 flex hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Logout <img src={logout} alt="Logout" className="w-6 h-6 ml-2" /></button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div onClick={goToBranches} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={branch} alt="Branches" className="w-6 h-6 mr-2" />Branches</div>
        <div onClick={goToInventory} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={inventory} alt="Inventory" className="w-6 h-6 mr-2" />Inventory</div>
        <div onClick={goToEmployees} className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center"><img src={employeephoto} alt="Employees" className="w-6 h-6 mr-2" />Employees</div>
      </div>

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Employees</p>
        <button onClick={() => setShowModal(true)} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded">
          Add Employee
        </button>
      </div>

      <div className="max-h-[700px] overflow-y-auto">
      {employee.map(emp => (
        <div key={emp.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">ID: {emp.id}</h6>
        <h6 className="text-lg font-semibold mb-1">First Name: {emp.first_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Last Name: {emp.last_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Age: {emp.age}</h6>
        <h6 className="text-lg font-semibold mb-1">Salary: ${emp.salary}</h6>
        <h6 className="text-lg font-semibold mb-1">Position: {emp.position}</h6>
        <button title="Delete" onClick={() => handleDelete(emp.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          ✕
        </button>        
        
        </div>
      ))}
      </div>
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

    <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">

      <h2 className="text-xl font-bold mb-4 text-center">
        Add Employee
      </h2>

      <form onSubmit={handleSubmit}>

        {/* SKU */}
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={newItem.id}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={newItem.first_name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={newItem.last_name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newItem.age}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={newItem.salary}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newItem.position}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        {/* Buttons */}
        <div className="flex justify-between">

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Item
          </button>

        </div>

      </form>
    </div>
  </div>
)}

    </div>
  )
}

export default Employees