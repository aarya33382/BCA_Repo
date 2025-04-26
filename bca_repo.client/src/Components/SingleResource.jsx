
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Links } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

import { totalContext } from "./AppCotext";



const SingleResource = () => {

    const { isLogged } = useContext(totalContext);


    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState([]);
    let length = 0;
    useEffect(() => {
        axios.get(`https://localhost:7166/api/Resources/getResources`)
            .then((response) => {
                console.log(response.data);
                const selectedFile = response.data.find(item => item.resourceID === parseInt(id));
                if (selectedFile) {
                    setFile(selectedFile);
                    const category = selectedFile.category;
                    console.log(category);

                    const sameCategory = response.data.filter((file) => {
                        return file.category === category && file.resourceID !== parseInt(id);
                    })
                    console.log(sameCategory);
                    setFiles(sameCategory);
                    // length = sameCategory.length;
                    console.log(files.length);

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
        <>
            
                {!isLogged && (
                    <div className="absolute h-[89%] w-[99%] flex items-center justify-center bg-white/30 backdrop-blur-sm  z-50">

                    
                    </div>


                )}
          

            <div className="main-container w-screen h-full flex  br">

                <div className=" left container w-[50%] p-6 flex justify-center bg " >
                    <div className="max-w-lg w-full h-[70%] bg-white shadow-xl rounded-xl p-6 border border-gray-200">
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

                <div className="right w-full md:w-[50%] h-full flex flex-col overflow-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6 border-b pb-2">
                        📘 Related Resources
                    </h1>

                    <div className="space-y-4">
                        {files.length > 0 ? (
                            files.map((file) => (
                                <Link
                                    key={file.resourceID}
                                    to={`/resource/${file.resourceID}`}
                                    className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 transition-all hover:shadow-xl hover:scale-[1.02]"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl">
                                        📄
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-lg font-semibold text-gray-800">{file.title}</p>
                                        {/* You can also show file.description or file.subject here */}
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No other related files found.</p>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
};

export default SingleResource;


