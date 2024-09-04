import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const PaymentsMethod = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editMethod, setEditMethod] = useState({ method: '', accountNumber: '', name: '' });

  const handleAddPaymentMethod = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newMethod = {
      method: formData.get('method'),
      accountNumber: formData.get('accountNumber'),
      name: formData.get('name')
    };
    setPaymentMethods([...paymentMethods, newMethod]);
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setPaymentMethods(paymentMethods.filter((_, i) => i !== index));
    // API call to delete method by index can be added here
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditMethod(paymentMethods[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditMethod({ ...editMethod, [name]: value });
  };

  const handleSaveEdit = (index) => {
    const updatedMethods = [...paymentMethods];
    updatedMethods[index] = editMethod;
    setPaymentMethods(updatedMethods);
    setEditIndex(null);
    // API call to save edited method by index can be added here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="flex justify-between items-center mt-4 ml-4 mr-4">
            <h1 className="text-xl font-bold text-black">Payments Method</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              {showForm ? 'Close Form' : 'Add Payment Method'}
            </button>
          </div>
          {showForm && (
            <div className="mt-7 text-black flex justify-center">
              <form 
                onSubmit={handleAddPaymentMethod} 
                className="bg-white p-4 rounded-lg shadow-md mb-6 w-full max-w-md"
              >
                <div className="mb-4">
                  <label htmlFor="method" className="block text-gray-700">Payment Method</label>
                  <input
                    type="text"
                    id="method"
                    name="method"
                    placeholder="Enter payment method"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="accountNumber" className="block text-gray-700">Account Number</label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    placeholder="Enter account number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Account Holder Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter account holder name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                >
                  Add Payment Method
                </button>
              </form>
            </div>
          )}
          <div className="mt-7 text-black flex justify-center">
            <div className="w-full max-w-4xl">
              <h2 className="text-lg font-bold mb-4 text-center">Available Payment Methods</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 px-4 text-left w-1/4">Payment Method</th>
                      <th className="py-2 px-4 text-left w-1/4">Account Name</th>
                      <th className="py-2 px-4 text-left w-1/4">Account Number</th>
                      <th className="py-2 px-4 text-left w-1/4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.length === 0 ? (
                      <tr>
                        <td className="py-4 px-4 text-center" colSpan="4">No payment methods available.</td>
                      </tr>
                    ) : (
                      paymentMethods.map((method, index) => (
                        <tr key={index}>
                          {editIndex === index ? (
                            <>
                              <td className="py-2 px-4 border-b border-gray-300">
                                <input 
                                  type="text" 
                                  name="method" 
                                  value={editMethod.method} 
                                  onChange={handleInputChange}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </td>
                              <td className="py-2 px-4 border-b border-gray-300">
                                <input 
                                  type="text" 
                                  name="name" 
                                  value={editMethod.name} 
                                  onChange={handleInputChange}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </td>
                              <td className="py-2 px-4 border-b border-gray-300">
                                <input 
                                  type="text" 
                                  name="accountNumber" 
                                  value={editMethod.accountNumber} 
                                  onChange={handleInputChange}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </td>
                              <td className="py-2 px-4 border-b border-gray-300">
                                <button
                                  onClick={() => handleSaveEdit(index)}
                                  className="bg-green-500 text-white p-1 px-2 rounded-md hover:bg-green-600 mr-2"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditIndex(null)}
                                  className="bg-red-500 text-white p-1 px-2 rounded-md hover:bg-red-600"
                                >
                                  Cancel
                                </button>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="py-2 px-4 border-b border-gray-300">{method.method}</td>
                              <td className="py-2 px-4 border-b border-gray-300">{method.name}</td>
                              <td className="py-2 px-4 border-b border-gray-300">{method.accountNumber}</td>
                              <td className="py-2 px-4 border-b border-gray-300">
                                <button
                                  onClick={() => handleEditClick(index)}
                                  className="bg-yellow-500 text-white p-1 px-2 rounded-md hover:bg-yellow-600 mr-2"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(index)}
                                  className="bg-red-500 text-white p-1 px-2 rounded-md hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              </td>
                            </>
                          )}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* Space reserved for future API integration */}
              <div className="mt-6">
                {/* You can place your API integration code here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMethod;
