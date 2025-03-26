import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaEnvelope, FaInfoCircle, FaUserShield } from "react-icons/fa";  // Import Icons

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">BCA Repository</div>
      <ul className="flex space-x-8 text-2xl font-bold">
        <li>
          <Link to="/" className="hover:underline flex items-center text-[15px]">
            <FaHome className="mr-2 text-white text-2xl hover:text-gray-300 transition duration-200" /> 
            Home
          </Link>
        </li>
        <li>
          <Link to="/resources" className="hover:underline flex items-center text-[15px]">
            <FaBook className="mr-2 text-white text-2xl hover:text-gray-300 transition duration-200" /> 
            Resources
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline flex items-center text-[15px]">
            <FaEnvelope className="mr-2 text-white text-2xl hover:text-gray-300 transition duration-200" /> 
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline flex items-center text-[15px]">
            <FaInfoCircle className="mr-2 text-white text-2xl hover:text-gray-300 transition duration-200" /> 
            About Us
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:underline flex items-center text-[15px]">
            <FaUserShield className="mr-2 text-white text-2xl hover:text-gray-300 transition duration-200" /> 
            Admin
          
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login
        </Link>
        <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
      </div>
    </nav>
  );
}
