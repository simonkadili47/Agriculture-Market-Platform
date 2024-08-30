import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import DashboardCards from '../Components/DashboardCards';

const Dashboardf = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">
          <DashboardCards /> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboardf;
