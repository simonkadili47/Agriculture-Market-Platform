import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { TfiDashboard } from "react-icons/tfi";
import { AiFillProduct } from "react-icons/ai";
import { RxBorderSplit } from "react-icons/rx";
import { SiMarketo } from "react-icons/si";
import { MdPayments } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [dropdownStates, setDropdownStates] = useState({
    myProducts: false,
    marketTrends: false,
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
          <Link to="/Farmer-dashboard" className="flex items-center text-gray-700 hover:text-blue-600">
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
                <Link to="/farmer/add-product" className="text-gray-600 hover:text-blue-600">Add Product</Link>
              </li>
              <li className="mb-2">
                <Link to="/farmer/view-product" className="text-gray-600 hover:text-blue-600">View Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/farmer/add-category" className="text-gray-600 hover:text-blue-600">Add Category</Link>
              </li>
              <li className="mb-2">
                <Link to="/farmer/view-category" className="text-gray-600 hover:text-blue-600">View Category</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-6">
          <div className="flex items-center text-gray-700 cursor-pointer" >
            <RxBorderSplit className="mr-2 text-xl" />
            <ul>
            <li className="mb-2">
            <Link to="/Farmer/orders" className="text-gray-600 hover:text-blue-600"> Orders</Link>

              </li>
              </ul>
            
          </div>
        
        </li>
        <li className="mb-6">
          <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('marketTrends')}>
            <SiMarketo className="mr-2 text-xl" />
            <span className="flex-grow">Market Trends</span>
            {dropdownStates.marketTrends ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {dropdownStates.marketTrends && (
            <ul className="mt-2 ml-4">
              <li className="mb-2">
                <Link to="/farmer/CurrentTrends" className="text-gray-600 hover:text-blue-600">Current Trends</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-blue-600">Market Reports</Link>
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
                <Link to="/farmer/payments-method" className="text-gray-600 hover:text-blue-600">Payment Methods</Link>
              </li>
              <li className="mb-2">
                <Link to="/farmer/todays-payments" className="text-gray-600 hover:text-blue-600">Todays Payments</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-blue-600">Pending Payments</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-blue-600">WithDraw</Link>
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
                <a href="#" className="text-gray-600">Profile Settings</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600">Account Security</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600">Notification Preferences</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
