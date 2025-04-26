import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { totalContext } from '../AppCotext';
import { FaUsers, FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

export default function Dashboard() {
  const { currentUser } = useContext(totalContext);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl p-6 flex flex-col border-r border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-purple-700 tracking-tight">Admin Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">{`Hello, ${currentUser.name}`}</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-3 text-base font-medium">
            <li>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold shadow-sm'
                      : 'hover:bg-purple-50 hover:text-purple-600 text-gray-700'
                  }`
                }
              >
                <FaUsers className="text-lg" />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resources"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold shadow-sm'
                      : 'hover:bg-purple-50 hover:text-purple-600 text-gray-700'
                  }`
                }
              >
                <FaBookOpen className="text-lg" />
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="queries"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 font-semibold shadow-sm'
                      : 'hover:bg-purple-50 hover:text-purple-600 text-gray-700'
                  }`
                }
              >
                <FaQuestionCircle className="text-lg" />
                Queries
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-auto text-xs text-gray-500 pt-6 border-t border-gray-200">
          Role ID: <span className="text-gray-800 font-semibold">{currentUser.roleId}</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
