import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const AddProducts = () => {
  const [formData, setFormData] = useState({
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
        console.log('Product added successfully:', data);
      } else {
        console.error('Failed to add product:', response.statusText);
      }
    } catch (error) {
      console.error('Error while adding product:', error);
    }

    setFormData({
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

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-4">
              <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
                {/* Product Name */}
                <div className="w-full sm:w-1/3 px-2 mb-4">
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
                <div className="w-full sm:w-1/3 px-2 mb-4">
                  <label htmlFor="category_id" className="block text-gray-700 font-medium mb-1 text-sm">Product Category</label>
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Maize">Maize</option>
                    <option value="Cassava">Cassava</option>
                    <option value="Pineapple">Pineapple</option>
                  </select>
                </div>

                {/* Selling Price */}
                <div className="w-full sm:w-1/3 px-2 mb-4">
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
                <div className="w-full sm:w-1/3 px-2 mb-4">
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
                <div className="w-full sm:w-1/3 px-2 mb-4">
                  <label htmlFor="product_image" className="block text-gray-700 font-medium mb-1 text-sm">Product Image</label>
                  <input
                    type="file"
                    id="product_image"
                    name="product_image"
                    value={formData.product_image}
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
