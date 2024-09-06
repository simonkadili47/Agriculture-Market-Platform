import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import CategoryTable from '../Components/CategoryTable';

const ViewCategory = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 ml-64"> {/* Adjust ml-64 to the width of your sidebar */}
          {/* Container for heading and button */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-4 text-black">View All Categories</h1>
              <button className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <a href="/farmer/add-category">Add Category</a>
              </button>
            </div>
          </div>
          {/* Table container */}
          <div className="overflow-x-auto">
            <CategoryTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewCategory;
