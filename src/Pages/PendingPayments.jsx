import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import PendingPyamentTable from '../Components/PendingPaymentsTable'


const PendingPayments = () => {
    return (
      <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 ml-64">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-xl font-bold ml-3'>Pending Payment's</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-5xl"> {/* Adjust to max-w-3xl or any other value you need */}
              <PendingPyamentTable />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  };

export default PendingPayments;
