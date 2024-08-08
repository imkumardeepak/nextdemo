// components/Navbar.js
import React from 'react';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">MyLogo</a>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-800 dark:text-white">
              <FiUser className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
