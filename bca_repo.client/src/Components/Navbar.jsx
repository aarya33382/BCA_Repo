


// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { totalContext } from './AppCotext';
// import { UserCircle, LogOut, Info } from 'lucide-react'; // optional icons
// import axios from 'axios';

// export default function Navbar() {
//   const { currentUser, isLogged, setIsLogged, setCurrentUser } = useContext(totalContext);
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userT');
//     delete axios.defaults.headers.common['Authorization']; // clean Axios
//     setIsLogged(false);
//     setCurrentUser(null);
//     setShowMenu(false);
//     navigate('/login');

//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
//       <div className="text-xl font-bold">BCA Repository</div>
//       <ul className="flex space-x-8 text-2xl font-bold">
//         <li><Link to="/" className="hover:underline">Home</Link></li>
//         <li><Link to="/resources" className="hover:underline">Resources</Link></li>
//         <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
//         <li><Link to="/about" className="hover:underline">About Us</Link></li>
//       </ul>

//       {isLogged ? (
//         <div className="relative">
//           <div 
//             className="flex items-center gap-2 cursor-pointer select-none"
//             onClick={() => setShowMenu(!showMenu)}
//           >
//             <UserCircle size={28} className="text-white" />
//             <span className="font-semibold text-white">{currentUser?.name}</span>
//           </div>

//           {showMenu && (
//             <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 py-2 z-50">
//               <Link to={currentUser.roleId===0?"/userDashboard":"/adminDashboard"} className="flex items-center px-4 py-2 hover:bg-gray-100">
//                 <Info size={18} className="mr-2" /> My Info
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 <LogOut size={18} className="mr-2" /> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</Link>
//           <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
//         </div>
//       )}
//     </nav>
//   );
// }



// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { totalContext } from './AppCotext';
// import { UserCircle, LogOut, Info, Menu, X } from 'lucide-react'; // added Menu and X icons
// import axios from 'axios';

// export default function Navbar() {
//   const { currentUser, isLogged, setIsLogged, setCurrentUser } = useContext(totalContext);
//   const [showMenu, setShowMenu] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userT');
//     delete axios.defaults.headers.common['Authorization']; // clean Axios
//     setIsLogged(false);
//     setCurrentUser(null);
//     setShowMenu(false);
//     setMobileMenuOpen(false);
//     navigate('/login');
//   };

//   // Close mobile menu when navigating to a new page
//   const handleNavigation = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
//       <div className="text-xl font-bold">BCA Repository</div>
      
//       {/* Mobile menu button */}
//       <button 
//         className="md:hidden text-white focus:outline-none" 
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       >
//         {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex space-x-8 text-lg lg:text-2xl font-bold">
//         <li><Link to="/" className="hover:underline">Home</Link></li>
//         <li><Link to="/resources" className="hover:underline">Resources</Link></li>
//         <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
//         <li><Link to="/about" className="hover:underline">About Us</Link></li>
//       </ul>

//       {/* Authentication buttons - Desktop */}
//       <div className="hidden md:block">
//         {isLogged ? (
//           <div className="relative">
//             <div 
//               className="flex items-center gap-2 cursor-pointer select-none"
//               onClick={() => setShowMenu(!showMenu)}
//             >
//               <UserCircle size={28} className="text-white" />
//               <span className="font-semibold text-white">{currentUser?.name}</span>
//             </div>

//             {showMenu && (
//               <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 py-2 z-50">
//                 <Link 
//                   to={currentUser.roleId===0?"/userDashboard":"/adminDashboard"} 
//                   className="flex items-center px-4 py-2 hover:bg-gray-100"
//                   onClick={handleNavigation}
//                 >
//                   <Info size={18} className="mr-2" /> My Info
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   <LogOut size={18} className="mr-2" /> Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div>
//             <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded mr-2">Login</Link>
//             <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded">Register</Link>
//           </div>
//         )}
//       </div>

//       {/* Mobile Navigation Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 p-4 shadow-lg z-50">
//           <ul className="flex flex-col space-y-4 mb-4">
//             <li>
//               <Link to="/" className="block hover:underline" onClick={handleNavigation}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/resources" className="block hover:underline" onClick={handleNavigation}>
//                 Resources
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="block hover:underline" onClick={handleNavigation}>
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="block hover:underline" onClick={handleNavigation}>
//                 About Us
//               </Link>
//             </li>
//           </ul>

//           {/* Authentication buttons - Mobile */}
//           {isLogged ? (
//             <div className="border-t border-white/30 pt-4">
//               <div className="flex items-center gap-2 mb-3">
//                 <UserCircle size={24} className="text-white" />
//                 <span className="font-semibold text-white">{currentUser?.name}</span>
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <Link 
//                   to={currentUser.roleId===0?"/userDashboard":"/adminDashboard"}
//                   className="flex items-center px-2 py-2 bg-blue-700 rounded hover:bg-blue-800"
//                   onClick={handleNavigation}
//                 >
//                   <Info size={18} className="mr-2" /> My Info
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center w-full text-left px-2 py-2 bg-blue-700 rounded hover:bg-blue-800"
//                 >
//                   <LogOut size={18} className="mr-2" /> Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col space-y-2 border-t border-white/30 pt-4">
//               <Link 
//                 to="/login" 
//                 className="bg-white text-blue-600 px-4 py-2 rounded text-center"
//                 onClick={handleNavigation}
//               >
//                 Login
//               </Link>
//               <Link 
//                 to="/register" 
//                 className="bg-white text-blue-600 px-4 py-2 rounded text-center"
//                 onClick={handleNavigation}
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { totalContext } from './AppCotext';
import { UserCircle, LogOut, Info, Menu, X } from 'lucide-react';
import axios from 'axios';

export default function Navbar() {
  const { currentUser, isLogged, setIsLogged, setCurrentUser } = useContext(totalContext);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userT');
    delete axios.defaults.headers.common['Authorization'];
    setIsLogged(false);
    setCurrentUser(null);
    setShowMenu(false);
    setMobileMenuOpen(false);
    navigate('/login');
  };

  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold">BCA Repository</div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-lg lg:text-2xl font-bold">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/resources" className="hover:underline">Resources</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
      </ul>

      {/* Authentication buttons - Desktop */}
      <div className="hidden md:block">
        {isLogged ? (
          <div className="relative" ref={menuRef}>
            <div
              className="flex items-center gap-2 cursor-pointer select-none"
              onClick={() => setShowMenu(!showMenu)}
            >
              <UserCircle size={28} className="text-white" />
              <span className="font-semibold text-white">{currentUser?.name}</span>
            </div>

            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-md w-40 py-2 z-50">
                <Link
                  to={currentUser.roleId === 0 ? "/userDashboard" : "/adminDashboard"}
                  className="flex items-center px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleNavigation();
                    setShowMenu(false);
                  }}
                >
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
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 p-4 shadow-lg z-50">
          <ul className="flex flex-col space-y-4 mb-4">
            <li><Link to="/" className="block hover:underline" onClick={handleNavigation}>Home</Link></li>
            <li><Link to="/resources" className="block hover:underline" onClick={handleNavigation}>Resources</Link></li>
            <li><Link to="/contact" className="block hover:underline" onClick={handleNavigation}>Contact Us</Link></li>
            <li><Link to="/about" className="block hover:underline" onClick={handleNavigation}>About Us</Link></li>
          </ul>

          {isLogged ? (
            <div className="border-t border-white/30 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <UserCircle size={24} className="text-white" />
                <span className="font-semibold text-white">{currentUser?.name}</span>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  to={currentUser.roleId === 0 ? "/userDashboard" : "/adminDashboard"}
                  className="flex items-center px-2 py-2 bg-blue-700 rounded hover:bg-blue-800"
                  onClick={handleNavigation}
                >
                  <Info size={18} className="mr-2" /> My Info
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-2 py-2 bg-blue-700 rounded hover:bg-blue-800"
                >
                  <LogOut size={18} className="mr-2" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 border-t border-white/30 pt-4">
              <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded text-center" onClick={handleNavigation}>Login</Link>
              <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded text-center" onClick={handleNavigation}>Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
