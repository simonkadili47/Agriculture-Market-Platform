import React from 'react';
import Sidebar from '../Components/BuyerSidebar';
import Header from '../Components/Header';
import BuyerDashboardCards from '../Components/BuyerDashboardCards'

const BuyerDashboard = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">
          <BuyerDashboardCards/> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default BuyerDashboard;
