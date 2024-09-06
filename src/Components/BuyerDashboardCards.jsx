import React from 'react';
import { AiFillProduct } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";

const BuyerDashboardCards = () => {
  return (
    <div className="flex justify-end mt-24"> {/* Flexbox for aligning the grid to the right */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl"> {/* Reducing width with max-w-5xl */}
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold flex items-center"><AiFillProduct className="mr-2" /> Total Products</h3>
          <p className="text-2xl font-bold">6</p> 
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold flex items-center"><FaMoneyBillAlt className="mr-2" /> Total Payments</h3>
          <p className="text-2xl font-bold">$7890</p> 
        </div>
        
      </div>
    </div>
  );
};

export default BuyerDashboardCards;
