import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ProductTable from '../Components/ProductTable';

const ViewProduct = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 ml-64">
          {/* Flex container to align the heading and button */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-2 text-black">View All Products</h1>
              <button className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <a href="/farmer/add-product">Add Product</a>
              </button>
            </div>
          </div>
          {/* Centered ProductTable */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl"> {/* Adjust max-w-4xl to fit the space */}
              <ProductTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewProduct;
