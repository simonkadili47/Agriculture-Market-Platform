import React from 'react';
import Header from '../Components/Header';
import AdminSidebar from '../Components/AdminSidebar';
import UsersTable from '../Components/UsersTable';

const ViewUsers = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-4 ml-12">
          <div className="mb-1"> 
            <div className="flex justify-between items-center mb-1"> 
              <h1 className="text-xl font-bold text-black">View All Users</h1>
              <button className="p-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <a href="/Admin/add-users">Add User</a>
              </button>
            </div>
          </div>
          
          <div className="mt-6 overflow-x-auto"> 
            <UsersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewUsers;
