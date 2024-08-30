import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ProductTable from '../Components/ProductTable';

const ViewProduct = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className=' flex-1'>
          <h1 className='text-xl font-bold text-black mt-4 ml-4'>View All Product</h1>
          <div className='mt-4 mr-16 ml-8'> {/* Adjust margin here for smaller space */}
          <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
