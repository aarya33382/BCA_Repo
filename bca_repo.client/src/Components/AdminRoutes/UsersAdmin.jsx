import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://localhost:7166/api/users'); // Update with your API
      setUsers(res.data);
      console.log(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const confirmDelete = (user) => {
    setSelectedUser(user);
    setShowConfirm(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://localhost:7166/api/Users/${selectedUser.userID}`); // Update with your API
      setUsers((prev) => prev.filter((u) => u.userID !== selectedUser.userID));
      setShowConfirm(false);
      setSelectedUser(null);
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3">User ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4">{user.userID}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.roleId===0?'User':'Admin'}</td>
                <td className="px-6 py-4">{user.gender===0?'Male': user.gender===1?'Female':'Other'}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => confirmDelete(user)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Confirm Delete Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete <strong>{selectedUser?.name}</strong>?</p>
            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
