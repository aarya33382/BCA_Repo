import React, { useState, useEffect } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (activeTab === "users") {
      fetch("https://localhost:7166/api/Users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        })
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [activeTab]);

  const [resources, setResources] = useState([
    {id: 101,  title: "React Guide",category:"Web Development", status: "Published",},
    {id: 102, title: "ASP.NET Core", category:"Backend", status: "Draft" },
  ]);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (activeTab === "messages") {
      fetch("https://localhost:7166/api/ContactUs/GetAllContactUsDetails")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch messages");
          }
          return response.json();
        })
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
    }
  }, [activeTab]);

  // Delete Handlers
  const deleteUser = (id) => {
    fetch(`https://localhost:7166/api/Users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

 
  return (
    <div className="flex min-h-screen bg-gray-200">
      {/ Sidebar /}
      <aside className="w-72 bg-blue-700 text-white p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("users")}
            className={`w-full p-3 rounded-lg text-lg font-medium ${
              activeTab === "users" ? "bg-blue-900" : "hover:bg-blue-800"
            }`}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`w-full p-3 rounded-lg text-lg font-medium ${
              activeTab === "resources" ? "bg-blue-900" : "hover:bg-blue-800"
            }`}
          >
            Manage Resources
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`w-full p-3 rounded-lg text-lg font-medium ${
              activeTab === "messages" ? "bg-blue-900" : "hover:bg-blue-800"
            }`}
          >
            Contact Messages
          </button>
        </nav>
      </aside>

      {/ Main Content /}
      <main className="flex-1 p-8">
        {/ Manage Users Section /}
        {activeTab === "users" && (
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Manage Users</h2>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-blue-100 text-gray-700">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Date of Birth</th>
                    <th className="p-3">Created At</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.role}</td>
                      <td className="p-3">{user.gender}</td>
                      <td className="p-3">{user.dateOfBirth}</td>
                      <td className="p-3">{user.createdAt}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="text-white bg-red-500 px-4 py-2 font-bold rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {/ Contact Messages Section /}
        {activeTab === "messages" && (
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Contact Messages</h2>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-red-200 text-gray-700">
                    <th className="p-3">User ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Reason</th>
                    <th className="p-3">Message</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr key={message.contactID}>
                      <td className="p-3">{message.userID}</td>
                      <td className="p-3">{message.name}</td>
                      <td className="p-3">{message.email}</td>
                      <td className="p-3">{message.subject}</td>
                      <td className="p-3">{message.reason}</td>
                      <td className="p-3">{message.discription}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteMessage(message.contactID)}
                          className="text-white bg-red-500 px-3 py-1 font-bold rounded"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;
