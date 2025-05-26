// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { LucideVolleyball, X } from "lucide-react";
// import { toast } from "react-toastify";
// import { totalContext } from "./Components/AppCotext";

// const FileUpload = ({ onClose,SetReload }) => {

//   const {currentUser}= useContext(totalContext);

//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file || !title || !description || !category) {
//       setMessage("⚠️ All fields are required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("File", file);  // ✅ Matches DTO property "File"
//     formData.append("Title", title);
//     formData.append("Description", description);
//     formData.append("Category", category);
//     formData.append("UploadedBy", currentUser.userId);

//     console.log("🚀 Sending FormData:");
//     for (let pair of formData.entries()) {
//       console.log(pair[0], pair[1]); 
//     }

//     try {
//       const response = await axios.post(
//         "https://localhost:7166/api/Resources/save",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       if (response.status === 200) {
//         console.log(response.data);
//         setMessage(`✅ File uploaded: ${response.data.fileUrl}`);
//         setTimeout(() => onClose(), 2100);
//         SetReload((prev)=>!prev);
//            toast.success("File Uploaded Successfully!");
//       } else {
//         setMessage("❌ File upload failed.");
//       }
//     } catch (error) {
//       console.error("🔥 Upload error:", error);
//       setMessage(`❌ Upload failed: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative animate-fadeIn">
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-all">
//           <X size={24} />
//         </button>

//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Resource</h2>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-medium">Title</label>
//           <input
//             type="text"
//             placeholder="Enter Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-medium">Description</label>
//           <textarea
//             placeholder="Enter Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//             rows="3"
//           ></textarea>
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-medium">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Category</option>
//             <option value="notes">Notes</option>
//             <option value="question-papers">Question Papers</option>
//             <option value="assignments">Assignments</option>
//             <option value="projects">Projects</option>
//           </select>
//         </div>

//         <div className="mb-3">
//           <label className="block text-gray-700 font-medium">Upload File</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button onClick={handleUpload} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
//           Upload
//         </button>

//         {message && <p className="mt-3 text-center text-gray-700">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default FileUpload;


import React, { useContext, useState } from "react";
import axios from "axios";
import { X, Upload, FileText } from "lucide-react";
import { toast } from "react-toastify";
import { totalContext } from "./Components/AppCotext";

const FileUpload = ({ onClose, SetReload }) => {
  const { currentUser } = useContext(totalContext);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !title || !description || !category) {
      setMessage("⚠️ All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("File", file);  // ✅ Matches DTO property "File"
    formData.append("Title", title);
    formData.append("Description", description);
    formData.append("Category", category);
    formData.append("UploadedBy", currentUser.userId);

    console.log("🚀 Sending FormData:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        "https://localhost:7166/api/Resources/save",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        console.log(response.data);
        setMessage(`✅ File uploaded: ${response.data.fileUrl}`);
        setTimeout(() => onClose(), 2100);
        SetReload((prev) => !prev);
        toast.success("File Uploaded Successfully!");
      } else {
        setMessage("❌ File upload failed.");
      }
    } catch (error) {
      console.error("🔥 Upload error:", error);
      setMessage(`❌ Upload failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "notes": return "📝";
      case "question-papers": return "📄";
      case "assignments": return "📚";
      case "projects": return "🏗️";
      default: return "📁";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl px-6 py-5 w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-hidden  relative animate-fadeIn border border-blue-100">
        <div className="absolute top-2 right-2">

          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex items-center mb-6 text-blue-800">
          <Upload size={28} className="mr-3" />
          <h2 className="text-2xl font-bold">Upload Resource</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">Title</label>
            <input
              type="text"
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white placeholder-gray-400 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">Description</label>
            <textarea
              placeholder="Enter a detailed description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white placeholder-gray-400 text-gray-800"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">Category</label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white appearance-none text-gray-800"
              >
                <option value="">Select Category</option>
                <option value="notes">📝 Notes</option>
                <option value="question-papers">📄 Question Papers</option>
                <option value="assignments">📚 Assignments</option>
                <option value="projects">🏗️ Projects</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">Upload File</label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${isDragging ? "border-blue-500 bg-blue-50" : "border-blue-200 hover:border-blue-400"
                } ${file ? "bg-green-50 border-green-300" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                  {file ? (
                    <>
                      <FileText size={36} className="text-green-500 mb-2" />
                      <p className="text-sm font-medium text-green-700">{file.name}</p>
                      <p className="text-xs text-green-600 mt-1">
                        {(file.size / 1024 / 1024).toFixed(2)} MB • Ready to upload
                      </p>
                    </>
                  ) : (
                    <>
                      <Upload size={36} className="text-blue-500 mb-2" />
                      <p className="text-sm font-medium text-gray-700">
                        Drag & drop your file here or <span className="text-blue-600">browse</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Supports documents, PDFs, images, etc.
                      </p>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          <button
            onClick={handleUpload}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <Upload size={18} className="mr-2" />
            Upload Resource
          </button>

          {message && (
            <div className={`mt-3 p-3 rounded-lg text-center ${message.includes("✅") ? "bg-green-100 text-green-800" :
                message.includes("⚠️") ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
              }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;