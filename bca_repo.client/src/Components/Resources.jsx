import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import FileUpload from '../FileUpload';
export default function Resources() {
 const[upload,setUpload]=useState(false);
  const handleUploadClick= (e)=>
  {
      setUpload((prev)=>!prev);
  }





  return (
    <>
    <div className="main-container w-full h-full p-6 bg-gray-100">
      {/* Top Section: Search & Category Filter */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        
        {/* Search Input */}
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/3">
          <Search className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            id="search"
            placeholder="Search resources..."
            className="w-full outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center">
          <label htmlFor="cat" className="text-gray-700 font-medium mr-2">Category:</label>
          <select
            name="category"
            id="cat"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="notes">Notes</option>
            <option value="question-papers">Question Papers</option>
            <option value="assignments">Assignments</option>
            <option value="projects">Projects</option>
          </select>
        </div>

        {/* Upload Button */}
        <button onClick={handleUploadClick} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          <Upload size={20} className="mr-2" />
          Upload Resource
        </button>
      </div>

      {/* Resources List (Placeholder) */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">Available Resources</h2>
        <p className="text-gray-500">No resources found. Start by uploading one!</p>
      </div>
    </div>
     {upload&&<FileUpload onClose={handleUploadClick}/>}
    </>
  );
}
