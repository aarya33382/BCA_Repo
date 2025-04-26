import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyUploads() {
  const [resources, setResources] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userT');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserId(parsedUser.userId);
    }
  }, []);

  useEffect(() => {
    if (userId !== null) {
      fetchResources();
    }
  }, [userId]);

  const fetchResources = async () => {
    try {
      const response = await axios.get('https://localhost:7166/api/Resources/getResources');
      const userResources = response.data.filter(resource => resource.uploadedBy === userId);
      setResources(userResources);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const getStatusText = (isApproved) => {
    return isApproved ? "Approved" : "Pending";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Uploaded Resources</h2>
      {resources.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Uploaded At</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {resources.map((resource) => (
                <tr key={resource.resourceID} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{resource.resourceID}</td>
                  <td className="py-2 px-4">{resource.title}</td>
                  <td className="py-2 px-4">{resource.description}</td>
                  <td className="py-2 px-4">{resource.category}</td>
                  <td className="py-2 px-4">{new Date(resource.uploadedAt).toLocaleString()}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      resource.isApproved ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                    }`}>
                      {getStatusText(resource.isApproved)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No uploaded resources found.
        </div>
      )}
    </div>
  );
}
