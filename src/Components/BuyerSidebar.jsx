import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { TfiDashboard } from "react-icons/tfi";
import { AiFillProduct } from "react-icons/ai";
import { RxBorderSplit } from "react-icons/rx";
import { SiMarketo } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  const [dropdownStates, setDropdownStates] = useState({
    myProducts: false,
    orders: false,
    payments: false,
    settings: false
  });

  const handleDropdownToggle = (menu) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="w-1/5 h-screen bg-white p-6 ">
      <ul>
        <li className="bg-orange-400 p-3 px-4 rounded-lg inline-flex items-center">
          <Link to="" className="flex items-center text-gray-700 hover:text-blue-600">
            <TfiDashboard className="mr-2 text-2xl" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="mb-6 mt-3">
          <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('myProducts')}>
            <AiFillProduct className="mr-2 text-xl" />
            <span className="flex-grow">My Products</span>
            {dropdownStates.myProducts ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {dropdownStates.myProducts && (
            <ul className="mt-2 ml-4">
              <li className="mb-2">
                <Link to="" className="text-gray-600 hover:text-blue-600">Available Products</Link>
              </li>
             
            </ul>
          )}
        </li>
        <li className="mb-6">
        <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('orders')}>
        <RxBorderSplit className="mr-2 text-xl" />
          <span className="flex-grow">My Orders</span>
          {dropdownStates.orders ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {dropdownStates.orders&& (
          <ul className="mt-2 ml-4">
            <li className="mb-2">
              <Link to="" className="text-gray-600 hover:text-blue-600">Current Orders</Link>
            </li>
            
          </ul>
        )}
      </li>
      <li className="mb-6">
        <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('payments')}>
          <MdPayments className="mr-2 text-xl" />
          <span className="flex-grow">Payments</span>
          {dropdownStates.payments ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {dropdownStates.payments && (
          <ul className="mt-2 ml-4">
             <li className="mb-2">
              <Link to="" className="text-gray-600 hover:text-blue-600">Payment Methods</Link>
            </li>
            <li className="mb-2">
              <Link to="" className="text-gray-600 hover:text-blue-600">Paid Payments</Link>
            </li>
          
           
          </ul>
        )}
      </li>
        
       
       
        
        <li className="mb-6">
          <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('settings')}>
            <IoSettingsOutline className='mr-2 text-xl' />
            <span className='flex-grow'>Settings</span>
            {dropdownStates.settings ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {dropdownStates.settings && (
            <ul className="mt-2 ml-4">
              <li className="mb-2">
                <a href="#" className="text-gray-600">My Profile</a>
              </li>
           
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default BuyerDashboard;
