import React from 'react';
import { AiFillProduct } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { FaMoneyBillAlt } from "react-icons/fa";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold"><AiFillProduct /> Total Products</h3>
        <p className="text-2xl font-bold">123</p> 
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold"><AiFillProduct /> Pending Orders</h3>
        <p className="text-2xl font-bold">6</p> 
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FaMoneyBillAlt />
        <h3 className="text-lg font-semibold">Total Payments</h3>
        <p className="text-2xl font-bold">$7890</p> 
      </div>
    </div>
  );
};

export default DashboardCards;
