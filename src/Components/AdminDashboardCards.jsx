import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const AdminDashboardCards = () => {
  return (
    <div className="pt-4 flex justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
          <FaUserLarge />
            <span>Total Users</span>
          </h3>
          <p className="text-2xl font-bold">123</p> 
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold flex items-center space-x-2">
            <AiFillProduct />
            <span>Total Orders</span>
          </h3>
          <p className="text-2xl font-bold">6</p> 
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <FaMoneyBillAlt />
            <h3 className="text-lg font-semibold">Total Payments</h3>
          </div>
          <p className="text-2xl font-bold">$7890</p> 
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardCards;
