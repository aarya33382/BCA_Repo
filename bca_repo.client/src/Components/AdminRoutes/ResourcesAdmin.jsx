import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ResourcesAdmin() {
  const [resources, setResources] = useState([]);

  // Fetch all resources
  const fetchResources = async () => {
    try {
      const response = await axios.get('https://localhost:7166/api/Resources/getResources');
      setResources(response.data);
      console.log(response.data);

    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  // Toggle approval status
  const toggleApproval = async (id, currentStatus) => {
    try {
      await axios.put(`https://localhost:7166/api/Resources/approve/${id}`, {
        isApproved: currentStatus ? false : true
      });
      fetchResources();
    } catch (error) {
      console.error("Error updating approval:", error);
    }
  };

  // Delete a resource
  const deleteResource = async (id) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      try {
        await axios.delete(`https://localhost:7166/api/Resources/${id}`);
        fetchResources();
      } catch (error) {
        console.error("Error deleting resource:", error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Resources Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Title</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-left">Approved</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map(resource => (
            <tr key={resource.resourceId} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{resource.resourceID}</td>
              <td className="py-2 px-4">{resource.title}</td>
              <td className="py-2 px-4">{resource.description}</td>
              <td className="py-2 px-4">{resource.isApproved ? "Yes" : "No"}</td>
              <td className="py-2 px-4 flex justify-center gap-3">
                <button
                  onClick={() => toggleApproval(resource.resourceID, resource.isApproved)}
                  className={`px-3 py-1 rounded ${
                    resource.isApproved
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {resource.isApproved ? "Disapprove" : "Approve"}
                </button>
                <button
                  onClick={() => deleteResource(resource.resourceID)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {resources.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No resources found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
