import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // State to store form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });
      // Assuming the response contains the role information
      const { role } = response.data;

      // Show success message
      toast.success('Login successful!', {
        position: "top-center",
        autoClose: 2000, 
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });

      setTimeout(() => {
        // Redirect based on user role
        if (role === 'farmer') {
          navigate('/Farmer-Dashboard'); 
        } else if (role === 'buyer') {
          navigate('/Buyer-Dashboard'); 
        } else {
          setError('Unknown user role');
        }
      }, 2000); 
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Invalid login credentials');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ToastContainer />
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h1>
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <span className="text-sm text-indigo-600 hover:underline cursor-pointer">Forgot password?</span>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              New Here? <Link to="/register" className="text-indigo-600 hover:underline pl-2">Create Account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
