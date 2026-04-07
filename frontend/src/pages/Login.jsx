import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"

function Login() {

    const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
    // Get all users from backend
    const res = await api.get("/users")
    const users = res.data

    // Find matching user
    const user = users.find(
      (u) =>
        u.username === form.username &&
        u.password === form.password
    )

    if (user) {
      console.log("Login successful:", user)
      navigate("/dashboard")
    } else {
      alert(
        "Error: Username or password is incorrect or does not exist. Please try again or sign up."
      )
    }

  } catch (error) {
    console.error("Login error:", error)
    alert("Something went wrong. Please try again.")
  }

  }

    //Sign up Section
    const [showSignup, setShowSignup] = useState(false)
    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
    }

    const handleSignupSubmit = async (e) => {
    e.preventDefault()

    if (signupForm.password !== signupForm.confirmPassword) {
        alert("Passwords do not match!")
        return
    }

    //console.log("Signing up:", signupForm)

    //send to Flask API
    await api.post("/users", {
        username: signupForm.username,
        password: signupForm.password,
        confirmPassword: signupForm.confirmPassword
    })

    setShowSignup(false)
    }

  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col gap-6">

      {/* Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Title */}
        <h2 className="text-2xl text-gray-700 font-bold text-center mb-6">
          Login to <span className="text-blue-600">Businexus</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Username */}
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
          >
            Login
          </button>
        </form>

        {/* Optional: Cancel / Back */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>

      </div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex items-center justify-center">
        <h2 className="text-lg text-gray-700 font-bold text-center">
          Don't have an account? <span onClick={() => setShowSignup(true)} className="text-blue-600 hover:text-purple-500 hover:cursor-pointer">Sign Up</span>
        </h2>
      </div>

        {/* Sign Up Modal */}
        {showSignup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

    <div className="bg-white flex flex-col items-center justify-center rounded-2xl shadow-xl h-2/3 w-full max-w-md p-8">

      <h2 className="text-2xl text-gray-700 font-bold text-center mb-6">
        Create Account for <span className="text-blue-600">Businexus</span>
      </h2>

      <form onSubmit={handleSignupSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleSignupChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleSignupChange}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={signupForm.confirmPassword}
            onChange={handleSignupChange}
            className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg"
        >
          Sign Up
        </button>
      </form>

      {/* Close button */}
      <button
        onClick={() => setShowSignup(false)}
        className="mt-4 w-full text-gray-500 hover:text-gray-700"
      >
        Cancel
      </button>

    </div>
  </div>
)}

    </div>
  )
}

export default Login
