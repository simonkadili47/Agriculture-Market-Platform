import React from 'react';
import AdminSidebar from '../Components/AdminSidebar';  
import Header from '../Components/Header';
import AdminDashboardCards from '../Components/AdminDashboardCards';

const Admin_Dashboard = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 mt-20"> 
        <AdminSidebar />
        <main className="flex-grow p-4">
          <AdminDashboardCards /> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
