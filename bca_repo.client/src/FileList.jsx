
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const FileList = ({ searchQuery, selectedCategory, Reload }) => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch all available files
//     useEffect(() => {
//         axios.get("https://localhost:7166/api/Resources/getResources")
//             .then((response) => {
//                 setFiles(response.data);
//                 setLoading(false);
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching files:", error);
//                 setError("Failed to load files.");
//                 setLoading(false);
//             });
//     }, [Reload]);

//     // Apply filters for search & category
//     const filteredFiles = files.filter((file) =>
//         (searchQuery === "" || file.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
//         (selectedCategory === "" || file.category.toLowerCase() === selectedCategory.toLowerCase())&&file.isApproved
//     );

//     if (loading) return <p className="text-center text-gray-600">Loading files...</p>;
//     if (error) return <p className="text-center text-red-500">{error}</p>;

//     return (
//         <div className="container mx-auto p-6">
//             <h2 className="text-2xl font-semibold text-center mb-6">Available Files</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//                 {filteredFiles.length > 0 ? (
//                     filteredFiles.map((file) => (
//                         <Link
//                             key={file.resourceID}
//                             to={`/resource/${file.resourceID}`}  // Navigate to SingleResource
//                             className=" border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white cursor-pointer hover:shadow-xl transition"
//                         >
//                             <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full text-gray-700 text-lg font-bold">
//                                 📄
//                             </div>
//                             <p className="mt-4 font-medium text-lg text-center">{file.title}</p>
//                         </Link>
//                     ))
//                 ) : (
//                     <p className="text-center text-gray-500 col-span-full">
//                         No files match your criteria.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FileList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FileText, Search, AlertCircle } from "lucide-react";

const FileList = ({ searchQuery, selectedCategory, Reload }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch all available files
    useEffect(() => {
        axios.get("https://localhost:7166/api/Resources/getResources")
            .then((response) => {
                setFiles(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching files:", error);
                setError("Failed to load files.");
                setLoading(false);
            });
    }, [Reload]);

    // Apply filters for search & category
    const filteredFiles = files.filter((file) =>
        (searchQuery === "" || file.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategory === "" || file.category.toLowerCase() === selectedCategory.toLowerCase())&&file.isApproved
    );

    // Function to determine icon color based on file category
    const getCategoryColor = (category) => {
        const categoryMap = {
            'document': 'indigo',
            'image': 'purple',
            'video': 'pink', 
            'audio': 'blue',
            'pdf': 'red',
            'spreadsheet': 'green',
            'presentation': 'orange',
            'archive': 'yellow',
            'code': 'emerald',
        };
        
        const lowerCategory = category?.toLowerCase();
        // Default to indigo if category doesn't match or is undefined
        return categoryMap[lowerCategory] || 'indigo';
    };

    if (loading) return (
        <div className="flex justify-center items-center py-20">
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <p className="text-indigo-700 font-medium">Loading files...</p>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="flex justify-center items-center py-20">
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl shadow-lg flex items-center space-x-3">
                <AlertCircle className="text-red-500" size={24} />
                <p className="text-red-600 font-medium">{error}</p>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-6">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    Available Resources
                </h2>
                <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
            </div>

            {filteredFiles.length === 0 && (
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center max-w-xl mx-auto shadow-md">
                    <div className="flex justify-center mb-4">
                        <Search size={48} className="text-gray-300" />
                    </div>
                    <p className="text-lg text-gray-500 font-medium">No files match your criteria.</p>
                    <p className="text-gray-400 mt-2">Try adjusting your search or category filters.</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFiles.map((file) => {
                    const colorKey = getCategoryColor(file.category);
                    const bgColorClass = `bg-${colorKey}-100`;
                    const textColorClass = `text-${colorKey}-600`;
                    const borderColorClass = `border-${colorKey}-200`;
                    const hoverBgClass = `group-hover:bg-${colorKey}-200`;
                    
                    return (
                        <Link
                            key={file.resourceID}
                            to={`/resource/${file.resourceID}`}
                            className="group border border-gray-100 rounded-2xl shadow-md p-6 flex flex-col items-center bg-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 ${bgColorClass} rounded-full opacity-20`}></div>
                            
                            <div className={`${bgColorClass} ${hoverBgClass} w-20 h-20 flex items-center justify-center rounded-2xl ${textColorClass} ${borderColorClass} border transition-colors duration-300 relative z-10`}>
                                <FileText size={32} />
                            </div>
                            
                            <h3 className="mt-5 font-semibold text-lg text-center text-gray-800 group-hover:text-indigo-700 transition-colors line-clamp-2">
                                {file.title}
                            </h3>
                            
                            {file.category && (
                                <span className={`mt-3 px-3 py-1 text-xs font-medium ${bgColorClass} ${textColorClass} rounded-full`}>
                                    {file.category}
                                </span>
                            )}
                            
                            {file.uploadedAt && (
                                <p className="mt-2 text-xs text-gray-500">
                                    {new Date(file.uploadedAt).toLocaleDateString()}
                                </p>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FileList;