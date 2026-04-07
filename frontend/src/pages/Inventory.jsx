import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import branch from "../assets/hub.png"
import employee from "../assets/employee.png"
import inventory from "../assets/inventory-management.png"
import logout from "../assets/logout.png"

function Inventory() {
  const navigate = useNavigate();
  const [items, setItems] = useState([])
  
  useEffect(() => {
    api.get("/inventory").then(res => {
      setItems(res.data)
    })
  }, [])
  const goToBranches = () => {
    navigate("/branches")
  }
  const goToEmployees = () => {
    navigate("/employees")
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
    product_name: "",
    price: "",
    quantity: ""
  })

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post("/inventory", {
        id: newItem.id,
        branch_id: newItem.branch_id,
        product_name: newItem.product_name,
        price: newItem.price,
        quantity: newItem.quantity
      })

      setShowModal(false)

      // reload page to show new item
      window.location.reload()

    } catch (error) {
      console.error("Error adding item:", error)
      alert("Failed to add item")
    }
  }

  {/* Delete Item Button */}
  const handleDelete = async (id) => {
    try {
      await api.delete(`/inventory/${id}`)
      // reload page to show updated inventory
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
        <button onClick={handleLogout} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 py-2 px-4 rounded hover:cursor-pointer flex">Logout <img src={logout} alt="Logout" className="ml-2 w-6 h-6" /></button>
      </div>
      <div className="text-2xl font-bold mb-4 flex items-center justify-evenly bg-gray-700 border-b-2 border-black shadow-lg">
        <div onClick={goToBranches} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={branch} alt="Branches" className="w-6 h-6 mr-2" /> Branches</div>
        <div onClick={goToEmployees} className="bg-blue-500 text-white font-bold hover:cursor-pointer w-1/3 h-14 flex items-center justify-center"><img src={inventory} alt="Inventory" className="w-6 h-6 mr-2" /> Inventory</div>
        <div onClick={goToEmployees} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold w-1/3 h-14 flex items-center justify-center hover:cursor-pointer"><img src={employee} alt="Employees" className="w-6 h-6 mr-2" /> Employees</div>
      </div>

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Inventory</p>
        <button onClick={() => setShowModal(true)} className="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded">
          Add Item
        </button>
      </div>
    <div className="max-h-[700px] overflow-y-auto">
      {items.map(item => (
        <div key={item.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">SKU: {item.id}</h6>
        <h6 className="text-lg font-semibold mb-1">Product Name: {item.product_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Price: ${item.price}</h6>
        <h6 className="text-lg font-semibold mb-1">In Stock: {item.quantity}</h6>
        <button title="Delete" onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          ✕
        </button>
        </div>
      ))}
    </div>
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

    <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">

      <h2 className="text-xl font-bold mb-4 text-center">
        Add Inventory Item
      </h2>

      <form onSubmit={handleSubmit}>

        {/* SKU */}
        <input
          type="number"
          name="id"
          placeholder="SKU (ID)"
          value={newItem.id}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        <input
          type="number"
          name="branch_id"
          placeholder="Branch ID"
          value={newItem.branch_id}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Product Name */}
        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={newItem.product_name}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Price */}
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />

        {/* Quantity */}
        <input
          type="number"
          name="quantity"
          placeholder="In Stock"
          value={newItem.quantity}
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

export default Inventory