import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import branchphoto from "../assets/hub.png"
import employee from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Branches() {
  const navigate = useNavigate();
  const [branch, setBranch] = useState([])

  useEffect(() => {
    api.get("/branches").then(res => {
      setBranch(res.data)
    })
  }, [])

    const goToEmployees = () => {
      navigate("/employees")
    }
    const goToInventory = () => {
      navigate("/inventory")
    }
    const goToBranches = () => {
      navigate("/branches")
    }
    const handleLogout = () => {
      navigate("/")
    }
    const goToDashboard = () => {
      navigate("/dashboard")
    }
    const goMain = () => {
      navigate("/")
    }

  {/* Add Item Button */}
  const [showModal, setShowModal] = useState(false)

  const [newItem, setNewItem] = useState({
    id: "",
    branch_street: "",
    branch_city: "",
    branch_zipcode: "",
    branch_state: "",
    revenue: "",
    number_of_employees: ""
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post("/branches", {
        id: newItem.id,
        branch_street: newItem.branch_street,
        branch_city: newItem.branch_city,
        branch_zipcode: newItem.branch_zipcode,
        branch_state: newItem.branch_state,
        revenue: newItem.revenue,
        number_of_employees: newItem.number_of_employees
      })

      setShowModal(false)

      // reload page to show new branch
      window.location.reload()

    } catch (error) {
      console.error("Error adding branch:", error)
      alert("Failed to add branch")
    }
  }

  {/* Delete Item Button */}
  const handleDelete = async (id) => {
    try {
      await api.delete(`/branches/${id}`)
      // reload page to show updated branches
      window.location.reload()
    } catch (error) {
      console.error("Error deleting branch:", error)
      alert("Failed to delete branch")
    }
  }        

  return (
    <div className="">
      <div className=" text-blue-500 font-bold flex items-center justify-between bg-gray-800 p-6">
        <button onClick={goToDashboard} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Dashboard</button>
        <h3 onClick={goMain} className="text-6xl text-blue-500 font-bold hover:cursor-pointer">Businexus</h3>
        <button onClick={handleLogout} className="bg-gray-300 flex hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer">Logout <img src={logout} alt="Logout" className="ml-2 w-6 h-6" /></button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div onClick={goToBranches} className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center"><img src={branchphoto} alt="Branches" className="w-6 h-6 mr-2" />Branches</div>
        <div onClick={goToInventory} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={inventory} alt="Inventory" className="w-6 h-6 mr-2" />Inventory</div>
        <div onClick={goToEmployees} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={employee} alt="Employees" className="w-6 h-6 mr-2" />Employees</div>
      </div>

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Branches</p>
        <button onClick={() => setShowModal(true)} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded">
          Add Branch
        </button>
      </div>

      <div className="max-h-[700px] overflow-y-auto">
      {branch.map(br => (
        <div key={br.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">ID: {br.id}</h6>
        <h6 className="text-lg font-semibold mb-1">Street: {br.branch_street}</h6>
        <h6 className="text-lg font-semibold mb-1">City: {br.branch_city}</h6>
        <h6 className="text-lg font-semibold mb-1">Zipcode: {br.branch_zipcode}</h6>
        <h6 className="text-lg font-semibold mb-1">State: {br.branch_state}</h6>
        <h6 className="text-lg font-semibold mb-1">Revenue: ${br.revenue}</h6>
        <h6 className="text-lg font-semibold mb-1">Number of Employees: {br.number_of_employees}</h6>
        <button title="Delete" onClick={() => handleDelete(br.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
          name="branch_street"
          placeholder="Branch Street"
          value={newItem.branch_street}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="branch_city"
          placeholder="Branch City"
          value={newItem.branch_city}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="branch_zipcode"
          placeholder="Branch Zipcode"
          value={newItem.branch_zipcode}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="text"
          name="branch_state"
          placeholder="Branch State"
          value={newItem.branch_state}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="revenue"
          placeholder="Revenue"
          value={newItem.revenue}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="number_of_employees"
          placeholder="Number of Employees"
          value={newItem.number_of_employees}
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

export default Branches