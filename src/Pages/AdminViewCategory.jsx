import React from 'react';
import Header from '../Components/Header';
import AdiminSidebar from '../Components/AdminSidebar';
import AdminViewCategoryTable from '../Components/AdminCategoryTable'

const ViewCategory = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
       <AdiminSidebar/>
        <main className="flex-1 p-4 ml-8"> 
         
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold ml-4 text-black">View All Categories</h1>
              
            </div>
          </div>
         
          <div className="overflow-x-auto">
           <AdminViewCategoryTable/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewCategory;
