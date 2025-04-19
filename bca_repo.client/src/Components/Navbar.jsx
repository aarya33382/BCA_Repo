// import React ,{useContext}from 'react';
// import { Link } from 'react-router-dom';


// import { totalContext } from './AppCotext';



// export default function Navbar() {
//   const {currentUser,isLogged}=useContext(totalContext);

    

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center ">
//       <div className="text-xl font-bold">BCA Repository</div>
//       <ul className="flex space-x-8 text-2xl font-bold">
//         <li><Link to="/" className="hover:underline">Home</Link></li>
//         <li><Link to="/resources" className="hover:underline">Resources</Link></li>
//         <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
//         <li><Link to="/about" className="hover:underline">About Us</Link></li>
//       </ul>
//       {
//         isLogged?
//         currentUser.name
//         :(<div>
//           <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</Link>
//           <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
//         </div>)
//       }
     
//     </nav>
//   );
// }




import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { totalContext } from './AppCotext';
import { UserCircle, LogOut, Info } from 'lucide-react'; // optional icons
import axios from 'axios';

export default function Navbar() {
  const { currentUser, isLogged, setIsLogged, setCurrentUser } = useContext(totalContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userT');
    delete axios.defaults.headers.common['Authorization']; // clean Axios
    setIsLogged(false);
    setCurrentUser(null);
    setShowMenu(false);
    navigate('/login');

  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold">BCA Repository</div>
      <ul className="flex space-x-8 text-2xl font-bold">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/resources" className="hover:underline">Resources</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
      </ul>

      {isLogged ? (
        <div className="relative">
          <div 
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <UserCircle size={28} className="text-white" />
            <span className="font-semibold text-white">{currentUser?.name}</span>
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 py-2 z-50">
              <Link to="/my-info" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <Info size={18} className="mr-2" /> My Info
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                <LogOut size={18} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</Link>
          <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
        </div>
      )}
    </nav>
  );
}
