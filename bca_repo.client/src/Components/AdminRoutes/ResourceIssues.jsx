import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ResourceIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get('https://localhost:7166/api/ResourceIssue/getAll');
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Resource Issues</h2>
      {issues.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Issue ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Resource ID</th>
                <th className="py-3 px-4 text-left">User ID</th>
                <th className="py-3 px-4 text-left">Action Type</th>
                <th className="py-3 px-4 text-left">Message</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {issues.map((issue) => (
                <tr key={issue.issueID} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{issue.issueID}</td>
                  <td className="py-2 px-4">{issue.title}</td>
                  <td className="py-2 px-4">{issue.resourceID}</td>
                  <td className="py-2 px-4">{issue.userID}</td>
                  <td className="py-2 px-4 capitalize">{issue.actionType}</td>
                  <td className="py-2 px-4">{issue.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">No resource issues found.</div>
      )}
    </div>
  );
}
