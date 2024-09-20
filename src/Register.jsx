import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', { autoClose: 2000 });
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });

      if (response.status === 201) {
        toast.success('Registration successful', { autoClose: 2000 });
        setTimeout(() => navigate('/login'), 1000); // Redirect to login after 1 second

        setFormData({
          full_name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: ''
        });
      } else {
        toast.error(response.data.message || 'Registration failed', { autoClose: 2000 });
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        errorMessages.forEach(msg => toast.error(msg, { autoClose: 2000 }));
      } else {
        toast.error('An error occurred. Please try again later.', { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Register To Create Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-black mb-1">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select role</option>
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
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
              Have an Account? <Link to="/login" className="text-indigo-600 hover:underline pl-3">Login</Link>
            </span>
          </div>
        </form>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
};

export default Register;
