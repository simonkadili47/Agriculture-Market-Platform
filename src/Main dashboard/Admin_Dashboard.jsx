import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa'; 
import { IoIosNotifications } from 'react-icons/io';
import { TfiDashboard } from "react-icons/tfi"; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import { AiFillProduct } from "react-icons/ai";
import { RxBorderSplit } from "react-icons/rx";
import { SiMarketo } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import logo from '../assets/agriculture.webp'

const AdiminDashboard = () => {
  const [dropdownStates, setDropdownStates] = useState({
    usermanagement: false,
    productmanagement: false,
    ordermanagement: false,
    reports: false,
    paymentstransaction: false,
    settings: false,
  });

  const userMenuRef = useRef(null);

  const user = {
    name: "John Doe",
    role: "Farmer"
  };

  const handleDropdownToggle = (menu) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setDropdownStates((prevState) => ({
          ...prevState,
          userMenu: false,
        }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
       <div className="w-full bg-white border border-gray-200 text-gray-800 p-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Agriculture Logo" className="w-14 h-14 object-cover" />
          <p className="text-xl font-bold">AGRICULTURE PLATFORM</p>
          
         
        </div>

        <div className="flex items-center space-x-4">
          <IoIosNotifications size={32} className='text-blue-600' />
          
          {/* User Icon with Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <div 
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer"
              onClick={() => handleDropdownToggle('userMenu')}
            >
              <FaUser size={16} />
            </div>
            {dropdownStates.userMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="flex items-center p-4 border-b border-gray-200">
                  {/* Online Indicator */}
                  <div className="relative mr-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 border border-white" />
                    <FaUser size={32} />
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </div>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex ">
        {/* Sidebar */}
        <div className="w-1/7 h-screen bg-white p-6 ">
        <li className="mb-2 bg-orange-400 p-3 px-4 rounded-lg inline-flex items-center">
        <TfiDashboard className="mr-2 text-2xl" />
                    <a href="/" className="text-gray-600">Dashboard</a>
                  </li>
          <ul className='mt-5'>
            <li className="mb-6"> {/* Increased margin-bottom */}
              <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('usermanagement')}>
              <GrUserManager  className="mr-2 text-xl" />
                <span className="flex-grow">User Management</span>
                {dropdownStates.usermanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.usermanagement && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Add Farmers</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Add Buyers</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">View Users</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-6"> {/* Increased margin-bottom */}
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('productmanagement')}>
                <RxBorderSplit className="mr-2 text-xl" />
                <span className='flex-grow'>Product Management</span>
                {dropdownStates.productmanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.productmanagement&& (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">New Product</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Product Category</a>
                  </li>
                
                </ul>
              )}
            </li>
            <li className="mb-6"> {/* Increased margin-bottom */}
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('ordermanagement')}>
                <SiMarketo className='mr-2 text-xl' />
                <span className='flex-grow'>Order Management</span>
                {dropdownStates.ordermanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.ordermanagement && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Monitor Orders</a>
                  </li>
                  
                </ul>
              )}
            </li>
            <li className="mb-6"> {/* Increased margin-bottom */}
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('reports')}>
              <HiOutlineDocumentReport  className='mr-2 text-xl' />
                <span className='flex-grow'>Reports</span>
                {dropdownStates.reports ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.reports && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Sales Reports</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Order Reports</a>
                  </li>
               
                </ul>
              )}
            </li>
            <li className="mb-6"> {/* Increased margin-bottom */}
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('paymentstransaction')}>
              <MdOutlinePayments  className='mr-2 text-xl' />
                <span className='flex-grow'>Payments Transactions</span>
                {dropdownStates.paymentstransaction ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.paymentstransaction && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Overview Transactions</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600">Transaction History</a>
                  </li>
                 
                </ul>
              )}
            </li>
            <li className="mb-6"> {/* Increased margin-bottom */}
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
                    <a href="#" className="text-gray-600">Account Settings</a>
                  </li>
                
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-7 bg-custom-gray">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
           <h3 className="text-lg font-semibold"> <AiFillProduct/>Total Products</h3>
              <p className="text-2xl font-bold">123</p> 
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold"> <GrUserManager/>Total  Users</h3>
              <p className="text-2xl font-bold">456</p> {/* Replace with dynamic value */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaMoneyBillAlt />
              <h3 className="text-lg font-semibold ">Total Payments</h3>
              <p className="text-2xl font-bold">$7890</p> {/* Replace with dynamic value */}
            </div>
          </div>

          {/* Other content can go here */}
        </div>
      </div>
    </div>
  );
};

export default AdiminDashboard;
