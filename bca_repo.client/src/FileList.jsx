
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

    if (loading) return <p className="text-center text-gray-600">Loading files...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Available Files</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {filteredFiles.length > 0 ? (
                    filteredFiles.map((file) => (
                        <Link
                            key={file.resourceID}
                            to={`/resource/${file.resourceID}`}  // Navigate to SingleResource
                            className=" border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white cursor-pointer hover:shadow-xl transition"
                        >
                            <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full text-gray-700 text-lg font-bold">
                                📄
                            </div>
                            <p className="mt-4 font-medium text-lg text-center">{file.title}</p>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No files match your criteria.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FileList;


