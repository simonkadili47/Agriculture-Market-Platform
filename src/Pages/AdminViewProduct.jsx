import React from 'react';
import Header from '../Components/Header';
import AdminSidebar from '../Components/AdminSidebar';
import ProductTable from '../Components/ProductTable';

const AdminViewProduct = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
        <AdminSidebar/>
        <main className="flex-1 p-4 ml-16">
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-2 text-black">View All Products</h1>
            </div>
          </div>
        
          <div className="w-full max-w-5xl"> 
            <ProductTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminViewProduct;
