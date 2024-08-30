import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Register</h1>
      <form action="">
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2  text-sm font-medium text-gray-600">
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
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
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
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
            placeholder="Enter your password"
          />
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