import React from 'react'
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import PaymentmethodTable from '../Components/PaymemethodTable';

const PaymentsMethod = () => {
  return (
     <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* Flex container to align the heading and button */}
        <div className="flex justify-between items-center mt-4 ml-4 mr-4">
          <h1 className="text-xl font-bold text-black">Payments Method</h1>
          <button className="p-3 bg-green-600 text-white rounded-lg">
            <a href="">Add Payment Method</a>
          </button>
        </div>
        <div className="mt-6 mr-16 ml-8"> 
            <PaymentmethodTable/>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaymentsMethod