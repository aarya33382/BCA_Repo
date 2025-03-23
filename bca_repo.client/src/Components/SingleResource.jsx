// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SingleResource = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         axios.get(`https://localhost:7166/api/Resources/getResources`)
//             .then((response) => {
//                 const selectedFile = response.data.find(item => item.resourceID === parseInt(id));
//                 if (selectedFile) {
//                     setFile(selectedFile);
//                     console.log(response.data);
//                 } else {
//                     setError("File not found.");
//                 }
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching file details:", error);
//                 setError("Failed to load file details.");
//                 setLoading(false);
//             });
//     }, [id]);

//     // Handle file download
//     const handleDownload = async () => {
//         try {
//             const response = await axios.get(
//                 `https://localhost:7166/api/Resources/download/${id}`,
//                 { responseType: "blob" }
//             );

//             const blob = new Blob([response.data], { type: response.headers["content-type"] });

//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement("a");
//             link.href = url;
//             link.setAttribute("download", file.title || "downloaded_file");
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             console.error("Error downloading file:", error);
//             alert("⚠️ Failed to download file.");
//         }
//     };

//     if (loading) return <p className="text-center text-gray-600 animate-pulse">Loading file details...</p>;
//     if (error) return <p className="text-center text-red-500">{error}</p>;

//     return (
//         <div className="container mx-auto p-6 flex justify-center">
//             <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{file.title}</h2>
//                 <p className="text-gray-600 text-center mb-4">{file.description}</p>

//                 <div className="bg-gray-100 p-4 rounded-lg mb-6">
//                     <p><strong>Category:</strong> {file.category}</p>
//                     <p><strong>Uploaded By:</strong> {file.uploadedBy}</p>
//                     <p><strong>Upload Date:</strong> {file.uploadedAt}</p>
//                     <p><strong>File Type:</strong> {file.fileType}</p>
//                     <p><strong>Size:</strong> {file.size} KB</p>
//                 </div>

//                 <div className="flex justify-between">
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
//                     >
//                         ⬅ Back
//                     </button>

//                     <button
//                         onClick={handleDownload}
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                     >
//                         ⬇ Download File
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleResource;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Download } from "lucide-react";

const SingleResource = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:7166/api/Resources/getResources`)
            .then((response) => {
                const selectedFile = response.data.find(item => item.resourceID === parseInt(id));
                if (selectedFile) {
                    setFile(selectedFile);
                } else {
                    setError("⚠️ File not found.");
                }
                setLoading(false);
            })
            .catch(() => {
                setError("⚠️ Failed to load file details.");
                setLoading(false);
            });
    }, [id]);

    // Handle file download
    const handleDownload = async () => {
        try {
            const response = await axios.get(
                `https://localhost:7166/api/Resources/download/${id}`,
                { responseType: "blob" }
            );

            const blob = new Blob([response.data], { type: response.headers["content-type"] });

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", file.title || "downloaded_file");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch {
            alert("⚠️ Failed to download file.");
        }
    };

    if (loading) {
        return <p className="text-center text-gray-600 animate-pulse">Loading file details...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-6 flex justify-center">
            <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{file.title}</h2>
                <p className="text-gray-600 text-center mb-4">{file.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <p><strong>📂 Category:</strong> {file.category}</p>
                    <p><strong>👤 Uploaded By:</strong> {file.uploadedBy}</p>
                    <p><strong>📅 Upload Date:</strong> {new Date(file.uploadedAt).toLocaleString()}</p>
                </div>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                    >
                        <ArrowLeft size={18} /> Back
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <Download size={18} /> Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleResource;
