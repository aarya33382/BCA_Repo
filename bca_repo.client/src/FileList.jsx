

import React, { useEffect, useState } from "react";
import axios from "axios";

const FileList = ({ searchQuery, selectedCategory,Reload }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Fetch all available files
    useEffect(() => {
        axios.get("https://localhost:7166/api/Resources/getResources")
            .then((response) => {
                setFiles(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching files:", error);
                setError("Failed to load files.");
                setLoading(false);
            });
    },[Reload]);

    // Handle file download
    const handleDownload = async (resourceID, fileName) => {
        try {
            const response = await axios.get(
                `https://localhost:7166/api/Resources/download/${resourceID}`,
                { responseType: "blob" }
            );

            const contentDisposition = response.headers["content-disposition"];
            let suggestedFileName = fileName;
            if (contentDisposition) {
                const match = contentDisposition.match(/filename="(.+)"/);
                if (match && match.length > 1) {
                    suggestedFileName = match[1];
                }
            }

            const blob = new Blob([response.data], { type: response.headers["content-type"] });

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", suggestedFileName || "downloaded_file");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading file:", error);
            alert("⚠️ Failed to download file.");
        }
    };

    // Apply filters for search & category
    const filteredFiles = files.filter((file) =>
        (searchQuery === "" || file.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedCategory === "" || file.category.toLowerCase() === selectedCategory.toLowerCase())
    );

    if (loading) return <p className="text-center text-gray-600">Loading files...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Available Files</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFiles.length > 0 ? (
                    filteredFiles.map((file) => (
                        <div key={file.resourceID} className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white">
                            <div className="bg-gray-200 w-16 h-16 flex items-center justify-center rounded-full text-gray-700 text-lg font-bold">
                                📄
                            </div>
                            <p className="mt-4 font-medium text-lg text-center">{file.title}</p>
                            <button 
                                onClick={() => handleDownload(file.resourceID, file.title)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Download
                            </button>
                        </div>
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
