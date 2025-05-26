
// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate, Links } from "react-router-dom";
// import axios from "axios";
// import { ArrowLeft, Download } from "lucide-react";
// import { Link } from "react-router-dom";

// import { totalContext } from "./AppCotext";



// const SingleResource = () => {

//     const { isLogged } = useContext(totalContext);


//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [files, setFiles] = useState([]);
//     let length = 0;
//     useEffect(() => {
//         axios.get(`https://localhost:7166/api/Resources/getResources`)
//             .then((response) => {
//                 console.log(response.data);
//                 const selectedFile = response.data.find(item => item.resourceID === parseInt(id));
//                 if (selectedFile) {
//                     setFile(selectedFile);
//                     const category = selectedFile.category;
//                     console.log(category);

//                     const sameCategory = response.data.filter((file) => {
//                         return file.category === category && file.resourceID !== parseInt(id);
//                     })
//                     console.log(sameCategory);
//                     setFiles(sameCategory);
//                     // length = sameCategory.length;
//                     console.log(files.length);

//                 } else {
//                     setError("⚠️ File not found.");
//                 }
//                 setLoading(false);
//             })
//             .catch(() => {
//                 setError("⚠️ Failed to load file details.");
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
//         } catch {
//             alert("⚠️ Failed to download file.");
//         }
//     };

//     if (loading) {
//         return <p className="text-center text-gray-600 animate-pulse">Loading file details...</p>;
//     }

//     if (error) {
//         return <p className="text-center text-red-500">{error}</p>;
//     }

//     return (
//         <>
            
//                 {!isLogged && (
//                     <div className="absolute h-[89%] w-[99%] flex items-center justify-center bg-white/30 backdrop-blur-sm  z-50">

                    
//                     </div>


//                 )}
          

//             <div className="main-container w-screen h-full flex  ">

//                 <div className=" left container w-[50%] p-6 flex justify-center  " >
//                     <div className="max-w-lg w-full h-[70%] bg-white shadow-xl rounded-xl p-6 border border-gray-200">
//                         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{file.title}</h2>
//                         <p className="text-gray-600 text-center mb-4">{file.description}</p>

//                         <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
//                             <p><strong>📂 Category:</strong> {file.category}</p>
//                             <p><strong>👤 Uploaded By:</strong> {file.uploadedBy}</p>
//                             <p><strong>📅 Upload Date:</strong> {new Date(file.uploadedAt).toLocaleString()}</p>
//                         </div>

//                         <div className="flex justify-between mt-6">
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
//                             >
//                                 <ArrowLeft size={18} /> Back
//                             </button>

//                             <button
//                                 onClick={handleDownload}
//                                 className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                             >
//                                 <Download size={18} /> Download
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="  right w-full md:w-[50%] h-[85vh] flex flex-col overflow-auto px-4">
//                     <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-6 border-b pb-2">
//                         📘 Related Resources
//                     </h1>

//                     <div className="space-y-4">
//                         {files.length > 0 ? (
//                             files.map((file) => (
//                                 <Link
//                                     key={file.resourceID}
//                                     to={`/resource/${file.resourceID}`}
//                                     className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 transition-all hover:shadow-xl hover:scale-[1.02]"
//                                 >
//                                     <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl">
//                                         📄
//                                     </div>
//                                     <div className="flex-1">
//                                         <p className="text-lg font-semibold text-gray-800">{file.title}</p>
//                                         {/* You can also show file.description or file.subject here */}
//                                     </div>
//                                 </Link>
//                             ))
//                         ) : (
//                             <p className="text-center text-gray-500">No other related files found.</p>
//                         )}
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default SingleResource;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Download, FileText, Calendar, User, Folder } from "lucide-react";
import { totalContext } from "./AppCotext";

const SingleResource = () => {
  const { isLogged } = useContext(totalContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7166/api/Resources/getResources`)
      .then((response) => {
        const selectedFile = response.data.find(item => item.resourceID === parseInt(id));
        if (selectedFile) {
          setFile(selectedFile);
          const category = selectedFile.category;
          const sameCategory = response.data.filter(
            (file) => file.category === category && file.resourceID !== parseInt(id)
          );
          setFiles(sameCategory);
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

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7166/api/Resources/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
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

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-indigo-50">
      <div className="text-center text-indigo-700 font-medium px-6 py-4 bg-white rounded-xl shadow-lg animate-pulse">
        <div className="flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading file details...</span>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <div className="text-center text-red-600 font-medium px-6 py-4 bg-white rounded-xl shadow-lg">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!isLogged && (
        <div className="absolute h-full w-full flex items-center justify-center bg-white/30 backdrop-blur-md z-50" />
      )}

      <div className="  flex flex-col lg:h-[85vh] md:flex-row  bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Left Section - File Details */}
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
          <div className="w-full max-w-xl bg-white shadow-xl rounded-3xl p-8 border border-indigo-100 transform transition hover:shadow-2xl">
            <div className="bg-indigo-600 -mt-12 mb-8 mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <FileText size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-center text-indigo-800 mb-4">{file.title}</h2>
            <p className="text-gray-600 text-center mb-8 italic">{file.description}</p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Folder size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium text-indigo-700">{file.category}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <User size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Uploaded By</p>
                  <p className="font-medium text-indigo-700">{file.uploadedBy}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Calendar size={20} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Uploaded At</p>
                  <p className="font-medium text-indigo-700">{new Date(file.uploadedAt).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium shadow-sm"
              >
                <ArrowLeft size={20} /> Back
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-medium shadow-md"
              >
                <Download size={20} /> Download
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Related Files (Scrollable) */}
        <div className="w-full md:w-1/2 p-8  max-h-screen">
          <div className="sticky top-0 pt-2 pb-4 bg-gradient-to-br from-indigo-50 to-purple-50 z-10">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Related Resources
              </span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
          </div>

          <div className="space-y-4  lg:h-[70vh]  overflow-y-auto scrollbar-hidden pb-6">
            {files.length > 0 ? (
              files.map((file) => (
                <Link
                  key={file.resourceID}
                  to={`/resource/${file.resourceID}`}
                  className="flex items-center gap-4 bg-white border border-indigo-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 rounded-2xl group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
                    <FileText size={28} className="text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-indigo-800 group-hover:text-indigo-600 transition-colors">{file.title}</p>
                    <p className="text-sm text-gray-500 truncate">{file.description}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                        {file.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl shadow-md border border-indigo-100">
                <div className="text-indigo-300 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">No other related files found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleResource;