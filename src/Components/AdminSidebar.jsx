import React, { useState, useEffect, useRef } from 'react'; 
import { TfiDashboard } from "react-icons/tfi"; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import { AiFillProduct } from "react-icons/ai";
import { RxBorderSplit } from "react-icons/rx";
import { SiMarketo } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { GrUserManager } from "react-icons/gr"; 
import { HiOutlineDocumentReport } from "react-icons/hi";


const AdiminSidebar = () => {
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
      

      <div className="flex ">
        {/* Sidebar */}
        <div className="w-1/7 h-screen bg-white p-6 ">
        <li className="mb-2 bg-orange-400 p-3 px-4 rounded-lg inline-flex items-center">
        <TfiDashboard className="mr-2 text-2xl" />
                    <a href="/AdminDashboard" className="text-gray-600">Dashboard</a>
                  </li>
          <ul className='mt-5'>
            <li className="mb-6"> 
              <div className="flex items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('usermanagement')}>
              <GrUserManager  className="mr-2 text-xl" />
                <span className="flex-grow">User Management</span>
                {dropdownStates.usermanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.usermanagement && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="/Admin/add-users" className="text-gray-600">Add Users</a>
                  </li>
                
                  <li className="mb-2">
                    <a href="/Admin/view-users" className="text-gray-600">View Users</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-6">
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('productmanagement')}>
                <RxBorderSplit className="mr-2 text-xl" />
                <span className='flex-grow'>Product Management</span>
                {dropdownStates.productmanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.productmanagement&& (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="/Admin/view-products" className="text-gray-600">View Products</a>
                  </li>
                  <li className="mb-2">
                    <a href="/Admin/view-category" className="text-gray-600">View Category</a>
                  </li>
                
                </ul>
              )}
            </li>
            <li className="mb-6"> 
              <div className="flex justify-between items-center text-gray-700 cursor-pointer" onClick={() => handleDropdownToggle('ordermanagement')}>
                <SiMarketo className='mr-2 text-xl' />
                <span className='flex-grow'>Order Management</span>
                {dropdownStates.ordermanagement ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {dropdownStates.ordermanagement && (
                <ul className="mt-2 ml-4">
                  <li className="mb-2">
                    <a href="/Admin/view-orders" className="text-gray-600">Monitor Orders</a>
                  </li>
                  
                </ul>
              )}
            </li>
            <li className="mb-6"> 
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

      
      </div>
    </div>
  );
};

export default AdiminSidebar;
