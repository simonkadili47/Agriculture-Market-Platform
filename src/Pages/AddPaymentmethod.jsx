import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const AddPaymentmethod = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Flex container to align the heading and button */}
          <div className="flex justify-between items-center mt-4 ml-4 mr-4">
            <h1 className="text-xl font-bold text-black">Add Payments Method</h1>
          </div>
          
          {/* Form container */}
          <div className="flex justify-center mt-8">
            <form 
              action="" 
              className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label 
                  htmlFor="payment_method" 
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Payment Method
                </label>
                <input
                  type="payment_method"
                  id="payment_method"
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Payment Method"
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="account_number" 
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                 Account Number
                </label>
                <input
                  type="number"
                  id="account_number"
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Account Number"
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="account_name" 
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Account Name
                </label>
                <input
                  type="text"
                  id="account_name"
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Account Name"
                />
              </div>
              <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-52 px-2 py-2 text-sm  font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Add Payment Method
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPaymentmethod;
