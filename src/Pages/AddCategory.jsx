import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    category_name: '',
    category_description: '',
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
        console.log('Category added successfully:', data);
      } else {
        console.error('Failed to add category:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding category:', error);
    }

    setFormData({
      category_name: '',
      category_description: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Category</h1>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {/* Category Name */}
                <div className="w-full">
                  <label htmlFor="category_name" className="block text-gray-700 font-medium mb-1 text-sm">Category Name</label>
                  <input
                    type="text"
                    id="category_name"
                    name="category_name"
                    value={formData.category_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Category Description */}
                <div className="w-full">
                  <label htmlFor="category_description" className="block text-gray-700 font-medium mb-1 text-sm">Category Description</label>
                  <input
                    type="text"
                    id="category_description"
                    name="category_description"
                    value={formData.category_description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Add Category Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add Category
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

export default AddCategory;
