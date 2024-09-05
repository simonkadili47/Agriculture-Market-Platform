import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import PendingPyamentTable from '../Components/PendingPaymentsTable'


const PendingPayments = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Flex container to align the heading and button */}
          <div className="flex justify-between items-center mt-4 ml-4 mr-4">
            <h1 className="text-xl font-bold text-black">Pending Payments</h1>
            
          </div>
          <div className="mt-8 mr-16 ml-8"> 
            <PendingPyamentTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingPayments;
