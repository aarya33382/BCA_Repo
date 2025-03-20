import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const FileUpload = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !title || !description || !category) {
      setMessage("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("uploadedBy", 8); 

    try {
      const response = await axios.post(
        "https://localhost:7166/api/Resources/save",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        setMessage(`File uploaded successfully: ${response.data.fileUrl}`);
        setTimeout(() => onClose(), 2100); // Close modal after success
      } else {
        setMessage("File upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage(`File upload failed: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-all"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Resource</h2>

        {/* Title Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="notes">Notes</option>
            <option value="question-papers">Question Papers</option>
            <option value="assignments">Assignments</option>
            <option value="projects">Projects</option>
          </select>
        </div>

        {/* File Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">Upload File</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Upload
        </button>

        {/* Message */}
        {message && <p className="mt-3 text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
