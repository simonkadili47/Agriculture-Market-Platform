import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    farmer_name: '',
    product_name: '',
    category_id: '',
    selling_price: '',
    product_description: '',
    quantity: '',
    product_image: null,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch the user profile
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const apiUrl = 'http://127.0.0.1:8000/api/profile';

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        if (response.ok) {
          const data = await response.json();
          setFormData(prevState => ({
            ...prevState,
            user_id: data.data.id, // Assuming the user ID is returned
            farmer_name: data.data.full_name,
          }));
        } else {
          console.error('Failed to fetch profile:', response.statusText);
        }
      } catch (error) {
        console.error('Error while fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    // Fetch the categories for the dropdown
    const fetchCategories = async () => {
      const token = localStorage.getItem('token');
      const apiUrl = 'http://127.0.0.1:8000/api/categories';

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          console.error('Failed to fetch categories:', response.statusText);
        }
      } catch (error) {
        console.error('Error while fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      product_image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const apiUrl = 'http://127.0.0.1:8000/api/addproduct';

    // Create a FormData object to handle file upload
    const formDataToSend = new FormData();
    formDataToSend.append('user_id', formData.user_id);
    formDataToSend.append('product_name', formData.product_name);
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('selling_price', formData.selling_price);
    formDataToSend.append('product_description', formData.product_description);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('product_image', formData.product_image);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
      body: formDataToSend,
    };

    try {
      const response = await fetch(apiUrl, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
        toast.success('Product added successfully!', {
          position: 'top-right',
        });
        // Clear the form after successful submission
        setFormData({
          user_id: '',
          farmer_name: '',
          product_name: '',
          category_id: '',
          selling_price: '',
          product_description: '',
          quantity: '',
          product_image: null,
        });
      } else {
        const errorData = await response.json();
        console.error('Failed to add product:', errorData.message || response.statusText);
        toast.error('Failed to add product!', {
          position: 'top-right',
        });
      }
    } catch (error) {
      console.error('Error while adding product:', error);
      toast.error('Error while adding product!', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="w-full max-w-lg mx-auto">
            <div className="mb-8 mt-2">
              <h1 className="text-3xl font-semibold text-gray-800">Add New Product</h1>
            </div>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
              <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="farmer_name" className="block text-gray-700 font-medium mb-1 text-sm">Farmer Name</label>
                  <input
                    type="text"
                    id="farmer_name"
                    name="farmer_name"
                    value={formData.farmer_name}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    readOnly
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="product_name" className="block text-gray-700 font-medium mb-1 text-sm">Product Name</label>
                  <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="category_id" className="block text-gray-700 font-medium mb-1 text-sm">Category</label>
                  <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="selling_price" className="block text-gray-700 font-medium mb-1 text-sm">Selling Price</label>
                  <input
                    type="number"
                    id="selling_price"
                    name="selling_price"
                    value={formData.selling_price}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1 text-sm">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="product_image" className="block text-gray-700 font-medium mb-1 text-sm">Product Image</label>
                  <input
                    type="file"
                    id="product_image"
                    name="product_image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full px-2 mb-4">
                  <label htmlFor="product_description" className="block text-gray-700 font-medium mb-1 text-sm">Product Description</label>
                  <textarea
                    id="product_description"
                    name="product_description"
                    value={formData.product_description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    rows="4"
                    required
                  />
                </div>
               
                <div className="w-full px-2 mb-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-500 transition duration-300"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </main>
      </div>
    </div>
  );
};

export default AddProducts;
