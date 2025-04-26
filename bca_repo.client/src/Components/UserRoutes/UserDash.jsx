

// import React, { useContext } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { totalContext } from '../AppCotext';

// export default function UserDash() {
//   const { currentUser } = useContext(totalContext);

//   return (
//     <div className="flex h-screen bg-gray-50 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
//         <div className="mb-10">
//           <h2 className="text-2xl font-bold text-blue-600">User Dashboard</h2>
//           <p className="text-sm text-gray-500 mt-1">{`Welcome back ${currentUser.name} !`}</p>
//         </div>

//         <nav className="flex-1">
//           <ul className="space-y-3 text-base">
//             <li>
//               <Link
//                 to="details"
//                 className="block px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all"
//               >
//                 📋 My Details
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="uploads"
//                 className="block px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all"
//               >
//                 📤 Uploads
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="queries"
//                 className="block px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all"
//               >
//                 ❓ My Queries
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="mt-10 text-sm text-gray-500">
//           <span>Role ID: </span>
//           <span className="font-medium text-gray-700">{currentUser.roleId}</span>
//         </div>
//       </aside>

//       {/* Content */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { totalContext } from '../AppCotext';

export default function UserDash() {
  const { currentUser } = useContext(totalContext);

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600">User Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">{`Welcome back ${currentUser.name} !`}</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-3 text-base">
            <li>
              <NavLink
                to="details"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                📋 My Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="uploads"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                📤 Uploads
              </NavLink>
            </li>
            <li>
              <NavLink
                to="queries"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : 'hover:bg-blue-100 hover:text-blue-600'
                  }`
                }
              >
                ❓ My Queries
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-10 text-sm text-gray-500">
          <span>Role ID: </span>
          <span className="font-medium text-gray-700">{currentUser.roleId}</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
