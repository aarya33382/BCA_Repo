import React, { useEffect, useState } from 'react';

export default function MyDetails() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userT');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserDetails(parsedUser);
    }
  }, []);

  const getGenderText = (gender) => {
    switch (gender) {
      case 0:
        return 'Male';
      case 1:
        return 'Female';
      case 2:
        return 'Other';
      default:
        return 'Unknown';
    }
  };

  const getRoleText = (roleId) => {
    return roleId === 0 ? 'User' : 'Admin';
  };

  if (!userDetails) {
    return <div className="p-6 text-gray-700">Loading user details...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">User ID</td>
              <td className="py-3 px-4">{userDetails.userId}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Name</td>
              <td className="py-3 px-4">{userDetails.name}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Email</td>
              <td className="py-3 px-4">{userDetails.email}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Date of Birth</td>
              <td className="py-3 px-4">{new Date(userDetails.dateOfBirth).toLocaleDateString()}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Gender</td>
              <td className="py-3 px-4">{getGenderText(userDetails.gender)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Role</td>
              <td className="py-3 px-4">{getRoleText(userDetails.roleId)}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Account Created At</td>
              <td className="py-3 px-4">{new Date(userDetails.createdAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
