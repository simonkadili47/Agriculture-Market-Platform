
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
        <div className="w-full bg-white border border-gray-200 text-gray-800 p-3 flex  justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Agriculture Logo" className="w-14 h-14 object-cover" />
                <p className="text-xl font-bold">AGRICULTURE PLATFORM</p>
            </div>
            <div className="flex items-center space-x-4">
                <IoIosNotifications size={32} className="text-blue-600" />
                <div className="relative" ref={userMenuRef}>
                    <div
                        className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer"
                        onClick={toggleUserMenu}
                    >
                        <FaUser size={16} />
                    </div>
                    {userMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <div className="flex items-center p-4 border-b border-gray-200">
                                <div className="relative mr-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 border border-white" />
                                    <FaUser size={32} />
                                </div>
                                <div>
                                    <p className="font-semibold">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.role}</p>
                                </div>
                            </div>
                            {/* <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a> */}
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
