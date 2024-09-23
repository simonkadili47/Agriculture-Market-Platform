import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import logo from "../assets/agriculture.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  // Simulated user data; ideally, you'd fetch this from your auth context or API
  const user = {
    name: "John Doe",
    role: "Farmer",
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); 
    //   console.log('Token before logout:', token);

      const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // console.log('Logout successful');
        localStorage.removeItem('token'); 
        navigate('/login'); 
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border border-gray-200 text-gray-800 p-2 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Agriculture Logo"
          className="w-10 h-10 object-cover"
        />
        <p className="text-lg font-semibold">AGRICULTURE PLATFORM</p>
      </div>
      <div className="flex items-center space-x-3">
        <IoIosNotifications size={24} className="text-blue-600" />
        <div className="relative" ref={userMenuRef}>
          <div
            className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer"
            onClick={toggleUserMenu}
          >
            <FaUser size={12} />
          </div>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="relative mr-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 border border-white" />
                  <FaUser size={28} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
              </div>
              <a
                onClick={handleLogout} 
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
