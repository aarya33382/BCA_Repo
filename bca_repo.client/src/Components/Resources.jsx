
import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import FileList from '../FileList';
import FileUpload from '../FileUpload';
import { toast } from "react-toastify";
import UserRoute from './UserRoutes/UserRoute';



export default function Resources() {
    const [upload, setUpload] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const[reload,setReload]=useState(true);
    // Toggle upload modal
    const handleUploadClick = () => {
        setUpload((prev) => !prev);
    };

    return (
        <>
            <div className="main-container w-full h-full p-6 bg-gray-100 overflow-auto">
                {/* Top Section: Search & Category Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md">
                    
                    {/* Search Input */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3 mb-3 md:mb-0">
                        <Search className="text-gray-500 mr-2" size={20} />
                        <input
                            type="text"
                            id="search"
                            placeholder="Search resources..."
                            className="w-full outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex items-center">
                        <label htmlFor="cat" className="text-gray-700 font-medium mr-2">Category:</label>
                        <select
                            name="category"
                            id="cat"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="notes">Notes</option>
                            <option value="question-papers">Question Papers</option>
                            <option value="assignments">Assignments</option>
                            <option value="projects">Projects</option>
                        </select>
                    </div>

                    {/* Upload Button */}
                    <button 
                        onClick={handleUploadClick} 
                        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        <Upload size={20} className="mr-2" />
                        Upload Resource
                    </button>
                </div>

                {/* FileList Component (Shows Filtered Files) */}
                <FileList searchQuery={searchQuery} selectedCategory={selectedCategory} Reload={reload}/>
            </div>

            {/* Upload Modal */}
            {upload && <UserRoute><FileUpload onClose={handleUploadClick} SetReload={setReload}/></UserRoute>}
        </>
    );
}
