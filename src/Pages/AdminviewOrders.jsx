import React from 'react';
import Header from '../Components/Header';
import AdiminSidebar from '../Components/AdminSidebar';
import OrdersTable from '../Components/OrdersTable';

const Orders = () => {
  return (
    <div className="flex flex-col mt-20 min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
       <AdiminSidebar/>
        <main className="flex-1 p-4 ml-28">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className='text-xl font-bold ml-3'>All Orders</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-5xl"> 
              <OrdersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Orders;
