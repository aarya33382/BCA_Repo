// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function MyUploads() {
//   const [resources, setResources] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('userT');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUserId(parsedUser.userId);
//     }
//   }, []);

//   useEffect(() => {
//     if (userId !== null) {
//       fetchResources();
//     }
//   }, [userId]);

//   const fetchResources = async () => {
//     try {
//       const response = await axios.get('https://localhost:7166/api/Resources/getResources');
//       const userResources = response.data.filter(resource => resource.uploadedBy === userId);
//       setResources(userResources);
//     } catch (error) {
//       console.error('Error fetching resources:', error);
//     }
//   };

//   const getStatusText = (isApproved) => {
//     return isApproved ? "Approved" : "Pending";
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">My Uploaded Resources</h2>
//       {resources.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">ID</th>
//                 <th className="py-3 px-4 text-left">Title</th>
//                 <th className="py-3 px-4 text-left">Description</th>
//                 <th className="py-3 px-4 text-left">Category</th>
//                 <th className="py-3 px-4 text-left">Uploaded At</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               {resources.map((resource) => (
//                 <tr key={resource.resourceID} className="border-b hover:bg-gray-50">
//                   <td className="py-2 px-4">{resource.resourceID}</td>
//                   <td className="py-2 px-4">{resource.title}</td>
//                   <td className="py-2 px-4">{resource.description}</td>
//                   <td className="py-2 px-4">{resource.category}</td>
//                   <td className="py-2 px-4">{new Date(resource.uploadedAt).toLocaleString()}</td>
//                   <td className="py-2 px-4">
//                     <span className={`px-2 py-1 rounded-full text-sm ${
//                       resource.isApproved ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
//                     }`}>
//                       {getStatusText(resource.isApproved)}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="text-center text-gray-500 py-10">
//           No uploaded resources found.
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyUploads() {
  const [resources, setResources] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [actionType, setActionType] = useState('');
  const [message, setMessage] = useState('');

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

  const openIssueModal = (resource) => {
    setSelectedResource(resource);
    setShowModal(true);
    setActionType('');
    setMessage('');
  };

  const handleSubmitIssue = async () => {
    const issueData = {
      resourceId: selectedResource.resourceID,
      title: selectedResource.title,
      userID:userId,
      actionType:actionType,
      message:message
    };

    try {
      await axios.post('https://localhost:7166/api/ResourceIssue/raise', issueData);
      alert("Issue submitted to admin successfully.");
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert("Failed to submit the issue.");
    }
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
                <th className="py-3 px-4 text-left">Actions</th>
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
                  <td className="py-2 px-4">
                    <button
                      onClick={() => openIssueModal(resource)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Raise Issue
                    </button>
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

      {/* Modal for raising issue */}
      {showModal && selectedResource && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Raise Issue for: {selectedResource.title}</h3>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Resource ID:</label>
                <input type="text" value={selectedResource.resourceID} readOnly className="w-full border px-3 py-2 rounded bg-gray-100" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">User ID:</label>
                <input type="text" value={userId} readOnly className="w-full border px-3 py-2 rounded bg-gray-100" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Action:</label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={actionType}
                  onChange={(e) => setActionType(e.target.value)}
                >
                  <option value="">Select Action</option>
                  <option value="permanent">Permanently Remove</option>
                  <option value="temporary">Temporarily Disable</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Message to Admin:</label>
                <textarea
                  rows="3"
                  className="w-full border px-3 py-2 rounded"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain your issue here..."
                />
              </div>
            </div>

            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
              <button onClick={handleSubmitIssue} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
