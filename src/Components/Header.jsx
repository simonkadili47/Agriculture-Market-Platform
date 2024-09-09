import React, { useState, useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa'; 
import { IoIosNotifications } from 'react-icons/io';
import logo from '../assets/agriculture.webp';

const Header = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);

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

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 bg-white border border-gray-200 text-gray-800 p-2 flex justify-between items-center z-50">
            <div className="flex items-center space-x-2">
                {/* Reduced the logo size */}
                <img src={logo} alt="Agriculture Logo" className="w-10 h-10 object-cover" />
                {/* Reduced the title size */}
                <p className="text-lg font-semibold">AGRICULTURE PLATFORM</p>
            </div>
            <div className="flex items-center space-x-3">
                {/* Reduced the notification icon size */}
                <IoIosNotifications size={24} className="text-blue-600" />
                <div className="relative" ref={userMenuRef}>
                    {/* Reduced the user icon size */}
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
                                    {/* Reduced the user icon inside the dropdown */}
                                    <FaUser size={28} />
                                </div>
                                <div>
                                    {/* Adjusted text sizes inside the dropdown */}
                                    <p className="font-semibold text-sm">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.role}</p>
                                </div>
                            </div>
                            <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
