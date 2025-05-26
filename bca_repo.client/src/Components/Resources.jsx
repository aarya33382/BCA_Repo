
// import React, { useState } from 'react';
// import { Search, Upload } from 'lucide-react';
// import FileList from '../FileList';
// import FileUpload from '../FileUpload';
// import { toast } from "react-toastify";
// import UserRoute from './UserRoutes/UserRoute';

// export default function Resources() {
//     const [upload, setUpload] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [reload, setReload] = useState(true);

//     const handleUploadClick = () => {
//         setUpload((prev) => !prev);
//     };

//     return (
//         <>
//             <div className="main-container w-full h-full p-4 sm:p-6 bg-gray-100 overflow-auto">
//                 {/* Top Section: Search & Category Filter */}
//                 <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center bg-white p-4 rounded-lg shadow-md">
                    
//                     {/* Search Input */}
//                     <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/3">
//                         <Search className="text-gray-500 mr-2" size={20} />
//                         <input
//                             type="text"
//                             id="search"
//                             placeholder="Search resources..."
//                             className="w-full outline-none text-sm"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                     </div>

//                     {/* Category Filter */}
//                     <div className="flex items-center w-full md:w-auto">
//                         <label htmlFor="cat" className="text-gray-700 font-medium mr-2 whitespace-nowrap">Category:</label>
//                         <select
//                             name="category"
//                             id="cat"
//                             className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full md:w-auto text-sm"
//                             value={selectedCategory}
//                             onChange={(e) => setSelectedCategory(e.target.value)}
//                         >
//                             <option value="">All Categories</option>
//                             <option value="notes">Notes</option>
//                             <option value="question-papers">Question Papers</option>
//                             <option value="assignments">Assignments</option>
//                             <option value="projects">Projects</option>
//                         </select>
//                     </div>

//                     {/* Upload Button */}
//                     <div className="w-full md:w-auto">
//                         <button 
//                             onClick={handleUploadClick} 
//                             className="flex w-full md:w-auto justify-center items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm"
//                         >
//                             <Upload size={20} className="mr-2" />
//                             Upload Resource
//                         </button>
//                     </div>
//                 </div>

//                 {/* FileList Component (Shows Filtered Files) */}
//                 <div className="mt-4">
//                     <FileList searchQuery={searchQuery} selectedCategory={selectedCategory} Reload={reload} />
//                 </div>
//             </div>

//             {/* Upload Modal */}
//             {upload && <UserRoute><FileUpload onClose={handleUploadClick} SetReload={setReload} /></UserRoute>}
//         </>
//     );
// }

import React, { useState } from 'react';
import { Search, Upload, Filter } from 'lucide-react';
import FileList from '../FileList';
import FileUpload from '../FileUpload';
import { toast } from "react-toastify";
import UserRoute from './UserRoutes/UserRoute';

export default function Resources() {
    const [upload, setUpload] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [reload, setReload] = useState(true);

    const handleUploadClick = () => {
        setUpload((prev) => !prev);
    };

    return (
        <>
            <div className="main-container w-full h-full p-4 sm:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Resource Library
                    </h1>
                    <p className="text-gray-600 mt-2">Search, filter, and discover educational resources</p>
                </div>
                
                {/* Top Section: Search & Category Filter */}
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-indigo-100">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end">
                        {/* Search Input */}
                        <div className="flex-1">
                            <label htmlFor="search" className="block text-sm font-medium text-indigo-700 mb-2">
                                Search Resources
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="text-indigo-400" size={18} />
                                </div>
                                <input
                                    type="text"
                                    id="search"
                                    placeholder="Enter keywords to search..."
                                    className="w-full pl-10 pr-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-indigo-50 text-gray-800 outline-none transition-all"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="md:w-1/4">
                            <label htmlFor="cat" className="block text-sm font-medium text-indigo-700 mb-2">
                                Filter by Category
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter className="text-indigo-400" size={18} />
                                </div>
                                <select
                                    name="category"
                                    id="cat"
                                    className="w-full pl-10 pr-4 py-3 border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-indigo-50 text-gray-800 outline-none appearance-none transition-all"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">All Categories</option>
                                    <option value="notes">Notes</option>
                                    <option value="question-papers">Question Papers</option>
                                    <option value="assignments">Assignments</option>
                                    <option value="projects">Projects</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Upload Button */}
                        <div className="md:w-auto flex-shrink-0">
                            <button 
                                onClick={handleUploadClick} 
                                className="w-full md:w-auto flex justify-center items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <Upload size={18} className="mr-2" />
                                Upload Resource
                            </button>
                        </div>
                    </div>
                </div>

                {/* FileList Component (Shows Filtered Files) */}
                <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-6">
                    <FileList searchQuery={searchQuery} selectedCategory={selectedCategory} Reload={reload} />
                </div>
            </div>

            {/* Upload Modal */}
            {upload && <UserRoute><FileUpload onClose={handleUploadClick} SetReload={setReload} /></UserRoute>}
        </>
    );
}