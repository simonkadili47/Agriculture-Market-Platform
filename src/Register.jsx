import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
    <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Register To  Create Account</h1>
      <form action="">

      <div className="mb-4">
          <label htmlFor="full_name" className="block mb-2  text-sm font-medium text-black">
             Full Name
          </label>
          <input
            type="text"
            id="full_name"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your Name "
          />
        </div>

        
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2  text-sm font-medium text-black">
             Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
        <label htmlFor="role" className="blocktext-black font-medium mb-1 text-sm">Role</label>
                  <select
                    id="role"
                    name="role"
               
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select role</option>
                    <option value="Maize">Farmer</option>
                    <option value="Cassava">Buyer</option>
                  
                  </select>
        </div>
        
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
         Register
        </button>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Have an Accout?<Link to="/Login" className="text-indigo-600 hover:underline pl-3">Login</Link>
          </span>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register