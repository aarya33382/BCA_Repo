import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyQueries() {
  const [queries, setQueries] = useState([]);
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
      fetchQueries();
    }
  }, [userId]);

  const fetchQueries = async () => {
    try {
      const response = await axios.get('https://localhost:7166/api/ContactUs/GetAllContactUsDetails');
      const userQueries = response.data.filter(query => query.userID === userId);
      setQueries(userQueries);
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Queries</h2>
      {queries.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Reason</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {queries.map((query) => (
                <tr key={query.contactID} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{query.contactID}</td>
                  <td className="py-2 px-4">{query.name}</td>
                  <td className="py-2 px-4">{query.email}</td>
                  <td className="py-2 px-4">{query.reason}</td>
                  <td className="py-2 px-4">{query.subject}</td>
                  <td className="py-2 px-4">{query.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          You haven't submitted any queries yet.
        </div>
      )}
    </div>
  );
}
