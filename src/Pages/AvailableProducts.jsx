import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/BuyerSidebar'; 
import ProductsAvailable from '../Components/ProductsAvailable';

const AvailableProducts = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1 mt-16"> 
        <Sidebar />
        <div className="flex-1 p-6 ml-[20%]"> 
          <h1 className='text-2xl font-bold text-black mb-8'>Available Products</h1> 
          
          <div className="flex justify-center">
            <ProductsAvailable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableProducts;
