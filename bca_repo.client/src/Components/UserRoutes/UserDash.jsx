

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








// import React, { useContext } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
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
//               <NavLink
//                 to="details"
//                 className={({ isActive }) =>
//                   `block px-3 py-2 rounded-lg transition-all ${
//                     isActive
//                       ? 'bg-blue-100 text-blue-600 font-semibold'
//                       : 'hover:bg-blue-100 hover:text-blue-600'
//                   }`
//                 }
//               >
//                 📋 My Details
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="uploads"
//                 className={({ isActive }) =>
//                   `block px-3 py-2 rounded-lg transition-all ${
//                     isActive
//                       ? 'bg-blue-100 text-blue-600 font-semibold'
//                       : 'hover:bg-blue-100 hover:text-blue-600'
//                   }`
//                 }
//               >
//                 📤 Uploads
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="queries"
//                 className={({ isActive }) =>
//                   `block px-3 py-2 rounded-lg transition-all ${
//                     isActive
//                       ? 'bg-blue-100 text-blue-600 font-semibold'
//                       : 'hover:bg-blue-100 hover:text-blue-600'
//                   }`
//                 }
//               >
//                 ❓ My Queries
//               </NavLink>
//             </li>
//           </ul>
//         </nav>

//         <div className="mt-10 text-sm text-gray-500">
//           <span>Role ID: </span>
//           <span className="font-medium text-gray-700">{currentUser.roleId}</span>
//         </div>
//       </aside>

//       {/* Main Content */}
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
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-xl p-8 flex flex-col border-r border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700">User Dashboard</h2>
          <p className="text-sm text-gray-600 mt-2 font-medium">{`Welcome back, ${currentUser.name}!`}</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4 text-lg">
            <li>
              <NavLink
                to="details"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all flex items-center ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`
                }
              >
                <span className="mr-3 text-xl">📋</span> My Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to="uploads"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all flex items-center ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`
                }
              >
                <span className="mr-3 text-xl">📤</span> Uploads
              </NavLink>
            </li>
            <li>
              <NavLink
                to="queries"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all flex items-center ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md'
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`
                }
              >
                <span className="mr-3 text-xl">❓</span> My Queries
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-12 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm text-gray-700 font-medium">User Information</p>
          <div className="mt-2 flex items-center">
            <span className="text-sm text-gray-500">Role ID:</span>
            <span className="ml-2 font-medium text-blue-700">{currentUser.roleId}</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto scrollbar-hidden">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}