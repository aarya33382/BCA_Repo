import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function QueriesAdmin() {
  const [queries, setQueries] = useState([]);

  // Fetch all queries
  const fetchQueries = async () => {
    try {
      const response = await axios.get('https://localhost:7166/api/ContactUs/GetAllContactUsDetails');
      setQueries(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  // Delete a query
  const deleteQuery = async (id) => {
    if (window.confirm("Are you sure you want to delete this query?")) {
      try {
        await axios.delete(`https://localhost:7166/api/ContactUs/DeleteContactUs/${id}`);
        fetchQueries(); // Refresh after deletion
      } catch (error) {
        console.error('Error deleting query:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Queries Management</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Reason</th>
            <th className="py-3 px-4 text-left">Subject</th>
            <th className="py-3 px-4 text-left">Description</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query.contactID} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{query.contactID}</td>
              <td className="py-2 px-4">{query.name}</td>
              <td className="py-2 px-4">{query.email}</td>
              <td className="py-2 px-4">{query.reason}</td>
              <td className="py-2 px-4">{query.subject}</td>
              <td className="py-2 px-4">{query.description}</td>
              <td className="py-2 px-4 flex justify-center">
                <button
                  onClick={() => deleteQuery(query.contactID)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {queries.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">
                No queries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
