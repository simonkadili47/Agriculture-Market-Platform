import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    farmer_name: '',
    product_name: '',
    category_id: '',
    selling_price: '',
    product_description: '',
    quantity: '',
    product_image: '',
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

    // Get the token from localStorage
    const token = localStorage.getItem('token'); 
    const apiUrl = 'http://127.0.0.1:8000/api/product';

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
        toast.success('Product added successfully!', {
          position: 'top-right',
        });
      } else {
        console.error('Failed to add product:', response.statusText);
        toast.error('Failed to add product!', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error while adding product:', error);
      // Show error toast notification
      toast.error('Error while adding product!', {
        position: 'top-right',
      });
    }

    setFormData({
      farmer_name: '',
      product_name: '',
      category_id: '',
      selling_price: '',
      product_description: '',
      quantity: '',
      product_image: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <div className="flex flex-1 pt-16">
        <Sidebar />

        <main className="flex-1 p-4">
          {/* Container for Heading and Form */}
          <div className="w-full max-w-lg mx-auto">
            {/* Heading */}
            <div className="mb-8 mt-2">
              <h1 className="text-3xl font-semibold text-gray-800">Add New Product</h1>
            </div>

            {/* Form */}
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
                {/* Farmer Name */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="farmer_name" className="block text-gray-700 font-medium mb-1 text-sm">Farmer Name</label>
                  <input
                    type="text"
                    id="farmer_name"
                    name="farmer_name"
                    value={formData.farmer_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Product Name */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="product_name" className="block text-gray-700 font-medium mb-1 text-sm">Product Name</label>
                  <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Product Category */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="category_id" className="block text-gray-700 font-medium mb-1 text-sm">Product Category</label>
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    <option value="Maize">Maize</option>
                    <option value="Cassava">Cassava</option>
                    <option value="Pineapple">Pineapple</option>
                  </select>
                </div>

                {/* Selling Price */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="selling_price" className="block text-gray-700 font-medium mb-1 text-sm">Selling Price</label>
                  <input
                    type="number"
                    id="selling_price"
                    name="selling_price"
                    value={formData.selling_price}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Quantity */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1 text-sm">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Product Image */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="product_image" className="block text-gray-700 font-medium mb-1 text-sm">Product Image</label>
                  <input
                    type="file"
                    id="product_image"
                    name="product_image"
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Product Description */}
                <div className="w-full px-2 mb-4">
                  <label htmlFor="product_description" className="block text-gray-700 font-medium mb-1 text-sm">Product Description</label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    value={formData.product_description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Add Product Button */}
                <div className="w-full px-2">
                  <button
                    type="submit"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add Product
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

export default AddProducts;
