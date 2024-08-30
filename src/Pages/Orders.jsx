import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import OrdersTable from '../Components/OrdersTable';

const Orders = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
            <h1 className='text-xl font-bold'>Orders</h1>
         <div className='mt-12 ml-8 '>
         <OrdersTable />
         </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
