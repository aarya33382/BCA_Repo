

// import React, { useState, useEffect,useContext } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBook, faBookOpen, faDiagramProject, faSheetPlastic, faDownload, faFaceSmile, faUpload, faUserTie } from '@fortawesome/free-solid-svg-icons'
// import Navbar from './Navbar';

// import {
//   FaBook,
//   FaTachometerAlt,
//   FaShieldAlt,
//   FaStar,
//   FaSignal,
//   FaEnvelope,
// } from "react-icons/fa";


// import { totalContext } from './AppCotext';


// export default function LandingPage() {
 
//   const [showPopup, setShowPopup] = useState(true);
//   const {isLogged}=useContext(totalContext);

//   useEffect(() => {
//   console.log(isLogged);
//     const timer = setTimeout(() => {
//       setShowPopup(false);
//     }, 5000);
//     if(isLogged)
//       {
//         setShowPopup(false);
//       }
//       else{
//         setShowPopup(true)
//       }
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {showPopup && (
//   <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
//       <h2 className="text-2xl font-bold text-blue-600">Unlock Full Features!</h2>
//       <p className="text-gray-700 mt-2">
//         To unlock full access, including downloading and publishing study materials, and to enjoy a seamless user experience, please register and log in.
//       </p>
//       <div className="mt-4 flex justify-center gap-2 flex-wrap">
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => setShowPopup(false)}
//         >
//           Close
//         </button>
//         <a
//           href="/login"
//           className="bg-yellow-500 text-white px-4 py-2 rounded"
//         >
//           Login
//         </a>
//         <a
//           href="/register"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Register
//         </a>
//       </div>
//     </div>
//   </div>
// )}

//       <div className="bg-gray-100 min-h-screen  flex flex-col items-center     ">
//         <div className=" text-center w-[90%]">
//           <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Welcome to BCA Repository</h1>
//           <p className="text-xl text-gray-700 mb-8">Your Ultimate Study Companion! A one-stop platform for BCA students to access and share study materials.</p>

//           <div className=" bg-white shadow-lg rounded-lg p-8 text-left mb-6 h-[60vh]">
//             <h2 className="text-3xl font-semibold text-blue-500 text-center ">📚 What We Offer?</h2> <br />
//             <div className='card-container w-full h-[90%] flex justify-around'>
//               <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102' >
//                 <FontAwesomeIcon icon={faBookOpen} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
//                 <p className='font-bold text-center'>Lecture Notes</p>

//                 <p className='text-center w-[90%]'> Access topic-wise notes prepared by qualified educators and toppers to help you grasp concepts quickly and effectively.</p>

//               </div>
//               <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
//                 <FontAwesomeIcon icon={faSheetPlastic} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
//                 <p className='font-bold text-center'>Previous Year Question Papers</p>

//                 <p className='text-center w-[90%]'>Practice with actual question papers from previous semesters to understand exam patterns and boost confidence. </p>

                

//               </div>
//               <div className='w-[22%] h-[90%] flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
//                 <FontAwesomeIcon icon={faDiagramProject} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
//                 <p className='font-bold text-center'>Project Reports</p>

//                 <p className='text-center w-[90%]'>Browse detailed project documentation to help you plan, design, and present your academic or mini-projects.</p>

               

//               </div>
//               <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
//                 <FontAwesomeIcon icon={faBook} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
//                 <p className='font-bold text-center'>Reference Books</p>

//                 <p className='text-center w-[90%]'>Get curated lists of textbooks and reference materials recommended by universities and faculty members </p>

                

//               </div>
//             </div>
//           </div>

//           <div className="bg-white h-[70vh] w-[100%] shadow-lg rounded-lg p-8 text-left mb-6 flex flex-col justify-around items-center">
//             <h2 className="text-3xl h-[15%] font-semibold text-blue-500">🙌 How It Works?</h2>
//             <div className='h-[85%] w-[100%] flex'>
//               <div className=' h-[100%] w-[50%]'>
//                 <div className='h-[100%] w-[100%] flex justify-center'>
//                   <img className='h-[100%] w-[90%]' src="/aa.webp" alt="" />
//                 </div>
//               </div>
//               <div className='h-[100%] w-[50%] flex flex-col pl-6'>
//                 <h1 className='font-bold text-2xl mb-6 '>BCA Repo for Students</h1>
//                 <ol className="list-none text-gray-700 space-y-4 h-[100%] w-[90%] flex flex-col justify-around ">
//                   <li className="flex items-center space-x-3">
//                     <FontAwesomeIcon icon={faDownload} size="xl" style={{ color: "#000000" }} />
//                     <div>
//                       <strong>Browse & Download</strong>
//                       <p className="text-sm">Access a vast collection of study materials.</p>
//                     </div>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     <FontAwesomeIcon icon={faUpload} size="xl" style={{ color: "#000000" }} />
//                     <div>
//                       <strong>Upload & Share</strong>
//                       <p className="text-sm">Contribute your own notes and help others.</p>
//                     </div>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     <FontAwesomeIcon icon={faUserTie} size="xl" style={{ color: "#000000" }} />
//                     <div>
//                       <strong>Admin Approval</strong>
//                       <p className="text-sm">Uploaded materials are verified for quality.</p>
//                     </div>
//                   </li>

//                   <li className="flex items-center space-x-3">
//                     <FontAwesomeIcon icon={faFaceSmile} size="xl" style={{ color: "#000000" }} />
//                     <div>
//                       <strong>Easy Access</strong>
//                       <p className="text-sm">Use categories, search, and filters to find resources.</p>
//                     </div>
//                   </li>
//                 </ol>
//               </div>

//             </div>
//           </div>

      
// <div class="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
//   <h2 class="text-3xl font-semibold text-blue-500 text-center mb-6">
//     🎯 Why Choose BCA Repository?
//   </h2>
  
//   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//       <h3 class="text-lg font-bold text-blue-600">Free & Open Access</h3>
//       <p class="text-gray-700 mt-2">Materials are freely available for students.</p>
//     </div>

//     <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//       <h3 class="text-lg font-bold text-blue-600">Well-Organized Categories</h3>
//       <p class="text-gray-700 mt-2">Find notes based on subjects and semesters.</p>
//     </div>

//     <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//       <h3 class="text-lg font-bold text-blue-600">Secure & Verified Content</h3>
//       <p class="text-gray-700 mt-2">Admin approval ensures reliable resources.</p>
//     </div>

//     <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
//       <h3 class="text-lg font-bold text-blue-600">User-Friendly Interface</h3>
//       <p class="text-gray-700 mt-2">Simple and intuitive design.</p>
//     </div>
//   </div>
// </div>

//           <div className="w-full h-[80vh] bg-white rounded-lg p-8 shadow-lg mt-12 ">
//             <h2 className="text-3xl h-[10%] font-semibold text-blue-600    text-center">
//               ✨ Features
//             </h2>
//             <div className="flex justify-around h-[80%]">
//               <div className='flex flex-col w-[40%] h-full justify-around'>
//                 <FeatureItem
//                   icon={<FaBook className="text-blue-600 text-4xl" />}
//                   title="Numerous Subjects"
//                   description="BCA Notes provides subjects like Java, C++, MIS, and IT."
//                 />
//                 <FeatureItem
//                   icon={<FaStar className="text-blue-600 text-4xl" />}
//                   title="Superior Notes"
//                   description="Expert-created notes with well-structured content."
//                 />
//                 <FeatureItem
//                   icon={<FaTachometerAlt className="text-blue-600 text-4xl" />}
//                   title="Ultra Fast Speed"
//                   description="Fast and seamless access with cloud hosting."
//                 />
//               </div>
//               <div className='flex flex-col w-[40%] h-full  justify-around'>
//                 <FeatureItem
//                   icon={<FaSignal className="text-blue-600 text-4xl" />}
//                   title="Always On-Mode"
//                   description="Access study materials offline with caching."
//                 />

//                 <FeatureItem
//                   icon={<FaShieldAlt className="text-blue-600 text-4xl" />}
//                   title="Iron-clad Security"
//                   description="Secured with SSL encryption for safety."
//                 />
//                 <FeatureItem
//                   icon={<FaEnvelope className="text-blue-600 text-4xl" />}
//                   title="Top-notch Support"
//                   description="Contact us anytime for help or contributions."
//                 />
//               </div>
//             </div>
//           </div>


//           <p className="text-2xl font-semibold text-gray-800 mt-6">🌟 Start Exploring Now! Enhance your learning experience with the best study materials.</p>
//           <p className="text-lg text-blue-600 font-medium mt-2">📥 Have study materials to share? Upload them and help the community grow!</p>
//         </div>
//       </div>

//       <footer className="bg-blue-600 text-white text-center py-6 mt-12">
//         <p className="text-lg">&copy; 2025 BCA Repository. All rights reserved.</p>
//         <p className="text-sm">Designed to help BCA students with quality study materials.</p>
//       </footer>
//     </>
//   );
// }
// const FeatureItem = ({ icon, title, description }) => (
//   <div className="flex items-start space-x-4 h-[30%] bg-gray-100 p-10 rounded-lg shadow-md">
//     <div className="flex-shrink-0">{icon}</div>
//     <div>
//       <h3 className="text-lg font-bold">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   </div>
// );


import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookOpen, faDiagramProject, faSheetPlastic, faDownload, faFaceSmile, faUpload, faUserTie } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';

import {
  FaBook,
  FaTachometerAlt,
  FaShieldAlt,
  FaStar,
  FaSignal,
  FaEnvelope,
} from "react-icons/fa";


import { totalContext } from './AppCotext';


export default function LandingPage() {
 
  const [showPopup, setShowPopup] = useState(true);
  const {isLogged}=useContext(totalContext);

  useEffect(() => {
  console.log(isLogged);
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    if(isLogged)
      {
        setShowPopup(false);
      }
      else{
        setShowPopup(true)
      }
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-md text-center mx-4">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600">Unlock Full Features!</h2>
      <p className="text-gray-700 mt-2 text-sm md:text-base">
        To unlock full access, including downloading and publishing study materials, and to enjoy a seamless user experience, please register and log in.
      </p>
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
        <button
          className="bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
        <a
          href="/login"
          className="bg-yellow-500 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base"
        >
          Login
        </a>
        <a
          href="/register"
          className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base"
        >
          Register
        </a>
      </div>
    </div>
  </div>
)}

      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="text-center w-[90%] px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-4 md:mb-6 mt-4">Welcome to BCA Repository</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">Your Ultimate Study Companion! A one-stop platform for BCA students to access and share study materials.</p>

          <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 text-left mb-6 h-auto md:h-[60vh]">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 text-center">📚 What We Offer?</h2> <br />
            <div className='card-container w-full h-auto md:h-[90%] flex flex-col md:flex-row justify-around items-center gap-6 md:gap-2'>
              <div className='w-full md:w-[22%] h-auto md:h-[90%] py-4 flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102' >
                <FontAwesomeIcon icon={faBookOpen} size="2xl" style={{ color: "#286ee6", fontSize: "80px", margin: "0 auto" }} className="md:text-6xl" />
                <p className='font-bold text-center mt-3 mb-2'>Lecture Notes</p>
                <p className='text-center w-[90%] mx-auto'>Access topic-wise notes prepared by qualified educators and toppers to help you grasp concepts quickly and effectively.</p>
              </div>
              
              <div className='w-full md:w-[22%] h-auto md:h-[90%] py-4 flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faSheetPlastic} size="2xl" style={{ color: "#286ee6", fontSize: "80px", margin: "0 auto" }} className="md:text-6xl" />
                <p className='font-bold text-center mt-3 mb-2'>Previous Year Question Papers</p>
                <p className='text-center w-[90%] mx-auto'>Practice with actual question papers from previous semesters to understand exam patterns and boost confidence.</p>
              </div>
              
              <div className='w-full md:w-[22%] h-auto md:h-[90%] py-4 flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faDiagramProject} size="2xl" style={{ color: "#286ee6", fontSize: "80px", margin: "0 auto" }} className="md:text-6xl" />
                <p className='font-bold text-center mt-3 mb-2'>Project Reports</p>
                <p className='text-center w-[90%] mx-auto'>Browse detailed project documentation to help you plan, design, and present your academic or mini-projects.</p>
              </div>
              
              <div className='w-full md:w-[22%] h-auto md:h-[90%] py-4 flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faBook} size="2xl" style={{ color: "#286ee6", fontSize: "80px", margin: "0 auto" }} className="md:text-6xl" />
                <p className='font-bold text-center mt-3 mb-2'>Reference Books</p>
                <p className='text-center w-[90%] mx-auto'>Get curated lists of textbooks and reference materials recommended by universities and faculty members.</p>
              </div>
            </div>
          </div>

          <div className="bg-white h-auto md:h-[70vh] w-[100%] shadow-lg rounded-lg p-4 md:p-8 text-left mb-6 flex flex-col justify-around items-center">
            <h2 className="text-2xl md:text-3xl h-auto md:h-[15%] font-semibold text-blue-500 mb-4">🙌 How It Works?</h2>
            <div className='h-auto md:h-[85%] w-[100%] flex flex-col md:flex-row'>
              <div className='h-auto md:h-[100%] w-full md:w-[50%] mb-6 md:mb-0'>
                <div className='h-auto w-[100%] flex justify-center'>
                  <img className='h-auto max-h-[300px] md:h-[100%] w-auto md:w-[90%] object-contain' src="/aa.webp" alt="" />
                </div>
              </div>
              <div className='h-auto md:h-[100%] w-full md:w-[50%] flex flex-col pl-0 md:pl-6'>
                <h1 className='font-bold text-xl md:text-2xl mb-4 md:mb-6'>BCA Repo for Students</h1>
                <ol className="list-none text-gray-700 space-y-4 h-auto md:h-[100%] w-full md:w-[90%] flex flex-col justify-around">
                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faDownload} size="lg" style={{ color: "#000000" }} className="flex-shrink-0" />
                    <div>
                      <strong>Browse & Download</strong>
                      <p className="text-sm">Access a vast collection of study materials.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUpload} size="lg" style={{ color: "#000000" }} className="flex-shrink-0" />
                    <div>
                      <strong>Upload & Share</strong>
                      <p className="text-sm">Contribute your own notes and help others.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUserTie} size="lg" style={{ color: "#000000" }} className="flex-shrink-0" />
                    <div>
                      <strong>Admin Approval</strong>
                      <p className="text-sm">Uploaded materials are verified for quality.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faFaceSmile} size="lg" style={{ color: "#000000" }} className="flex-shrink-0" />
                    <div>
                      <strong>Easy Access</strong>
                      <p className="text-sm">Use categories, search, and filters to find resources.</p>
                    </div>
                  </li>
                </ol>
              </div>

            </div>
          </div>

      
<div className="bg-white shadow-lg rounded-lg p-4 md:p-8 text-left mb-6">
  <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 text-center mb-4 md:mb-6">
    🎯 Why Choose BCA Repository?
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md text-center">
      <h3 className="text-base md:text-lg font-bold text-blue-600">Free & Open Access</h3>
      <p className="text-gray-700 mt-2 text-sm md:text-base">Materials are freely available for students.</p>
    </div>

    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md text-center">
      <h3 className="text-base md:text-lg font-bold text-blue-600">Well-Organized Categories</h3>
      <p className="text-gray-700 mt-2 text-sm md:text-base">Find notes based on subjects and semesters.</p>
    </div>

    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md text-center">
      <h3 className="text-base md:text-lg font-bold text-blue-600">Secure & Verified Content</h3>
      <p className="text-gray-700 mt-2 text-sm md:text-base">Admin approval ensures reliable resources.</p>
    </div>

    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md text-center">
      <h3 className="text-base md:text-lg font-bold text-blue-600">User-Friendly Interface</h3>
      <p className="text-gray-700 mt-2 text-sm md:text-base">Simple and intuitive design.</p>
    </div>
  </div>
</div>

          <div className="w-full h-auto md:h-[80vh] bg-white rounded-lg p-4 md:p-8 shadow-lg mt-6 md:mt-12">
            <h2 className="text-2xl md:text-3xl h-auto md:h-[10%] font-semibold text-blue-600 text-center mb-4">
              ✨ Features
            </h2>
            <div className="flex flex-col md:flex-row justify-around h-auto md:h-[80%] gap-6 md:gap-0">
              <div className='flex flex-col w-full md:w-[45%] lg:w-[40%] h-full justify-around gap-4 md:gap-0'>
                <FeatureItem
                  icon={<FaBook className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Numerous Subjects"
                  description="BCA Notes provides subjects like Java, C++, MIS, and IT."
                />
                <FeatureItem
                  icon={<FaStar className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Superior Notes"
                  description="Expert-created notes with well-structured content."
                />
                <FeatureItem
                  icon={<FaTachometerAlt className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Ultra Fast Speed"
                  description="Fast and seamless access with cloud hosting."
                />
              </div>
              <div className='flex flex-col w-full md:w-[45%] lg:w-[40%] h-full justify-around gap-4 md:gap-0'>
                <FeatureItem
                  icon={<FaSignal className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Always On-Mode"
                  description="Access study materials offline with caching."
                />

                <FeatureItem
                  icon={<FaShieldAlt className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Iron-clad Security"
                  description="Secured with SSL encryption for safety."
                />
                <FeatureItem
                  icon={<FaEnvelope className="text-blue-600 text-3xl md:text-4xl" />}
                  title="Top-notch Support"
                  description="Contact us anytime for help or contributions."
                />
              </div>
            </div>
          </div>


          <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-6">🌟 Start Exploring Now! Enhance your learning experience with the best study materials.</p>
          <p className="text-base md:text-lg text-blue-600 font-medium mt-2 mb-4">📥 Have study materials to share? Upload them and help the community grow!</p>
        </div>
      </div>

      <footer className="bg-blue-600 text-white text-center py-4 md:py-6 mt-8 md:mt-12 w-full">
        <p className="text-base md:text-lg">&copy; 2025 BCA Repository. All rights reserved.</p>
        <p className="text-xs md:text-sm">Designed to help BCA students with quality study materials.</p>
      </footer>
    </>
  );
}
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 h-auto md:h-[30%] bg-gray-100 p-4 md:p-10 rounded-lg shadow-md">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-base md:text-lg font-bold">{title}</h3>
      <p className="text-sm md:text-base text-gray-700">{description}</p>
    </div>
  </div>
);