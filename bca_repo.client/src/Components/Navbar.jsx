import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center ">
      <div className="text-xl font-bold">BCA Repository</div>
      <ul className="flex space-x-8 text-2xl font-bold">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/resources" className="hover:underline">Resources</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
      </ul>
      <div>
        <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</Link>
        <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
      </div>
    </nav>
  );
}
