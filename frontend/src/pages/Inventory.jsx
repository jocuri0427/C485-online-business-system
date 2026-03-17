import { useEffect, useState } from "react"
import { api } from "../services/api"

function Inventory() {

  const [items, setItems] = useState([])

  useEffect(() => {
    api.get("/inventory").then(res => {
      setItems(res.data)
    })
  }, [])

  return (
    <div className="p-6">

      <div className="text-2xl font-bold mb-4 flex items-center gap-2 justify-evenly">
        <p>Inventory</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Item
        </button>
      </div>

      {items.map(item => (
        <div key={item.id} className="border p-3 mb-2 rounded-lg flex justify-evenly">

        <h6 className="text-lg font-semibold mb-1">SKU: {item.id}</h6>
        <h6 className="text-lg font-semibold mb-1">Product Name: {item.product_name}</h6>
        <h6 className="text-lg font-semibold mb-1">Price: ${item.price}</h6>
        <h6 className="text-lg font-semibold mb-1">In Stock: {item.quantity}</h6>
        </div>
      ))}

    </div>
  )
}

export default Inventory