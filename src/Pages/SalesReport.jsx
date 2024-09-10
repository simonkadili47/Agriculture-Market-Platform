import React from 'react';
import Header from '../Components/Header';
import AdiminSidebar from '../Components/AdminSidebar';

const SalesReport = () => {
  return (
    <div className="flex flex-col mt-14 min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
       <AdiminSidebar/>
        <main className="flex-1 p-4 ml-64"> {/* Adjust ml-64 to the width of your sidebar */}
          {/* Container for heading and button */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-4 text-black">Sales Report</h1>
             
            </div>
          </div>
          {/* Table container */}
          <div className="overflow-x-auto">
        
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesReport;
