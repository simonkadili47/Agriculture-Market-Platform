import React, { useState } from 'react';
import Header from '../Components/Header';
import AdiminSidebar from '../Components/AdminSidebar';

const AddUsers = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    role: '',   
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'YOUR_API_URL'; // Replace with your actual API URL

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Farmer added successfully:', data);
      } else {
        console.error('Failed to add farmer:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding farmer:', error);
    }

    setFormData({
      full_name: '',
      email: '',
      password: '',
      role: '',
     
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex flex-1 pt-16">
        <AdiminSidebar/>

        <main className="flex-1 p-4">
          {/* Container for Heading and Form */}
          <div className="w-full max-w-lg mx-auto">
            {/* Heading */}
            <div className="mb-8 mt-2">
              <h1 className="text-3xl font-semibold text-gray-800">Add New User</h1>
            </div>

            {/* Form */}
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
                {/* Farmer Name */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="full_name" className="block text-gray-700 font-medium mb-1 text-sm">Full Name</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/*Email*/}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                
                {/* Password */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="passowrd" className="block text-gray-700 font-medium mb-1 text-sm">Password</label>
                  <input
                    type="passowrd"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/*Role*/}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="role" className="block text-gray-700 font-medium mb-1 text-sm">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select role</option>
                    <option value="Maize">Farmer</option>
                    <option value="Cassava">Buyer</option>
                  
                  </select>
                </div>


              
                {/* Add farmer Button */}
                <div className="w-full px-2">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddUsers;
