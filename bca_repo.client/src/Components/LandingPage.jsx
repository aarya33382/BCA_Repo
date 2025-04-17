import React, { useState, useEffect } from 'react';
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

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold text-blue-600">Unlock Full Features!</h2>
            <p className="text-gray-700 mt-2">To unlock full access, including downloading and publishing study materials, and to enjoy a seamless user experience, please register and log in.</p>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" onClick={() => setShowPopup(false)}>Close</button>
              <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded">Register</a>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-100 min-h-screen  flex flex-col items-center     ">
        <div className=" text-center w-[90%]">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Welcome to BCA Repository</h1>
          <p className="text-xl text-gray-700 mb-8">Your Ultimate Study Companion! A one-stop platform for BCA students to access and share study materials.</p>

          <div className=" bg-white shadow-lg rounded-lg p-8 text-left mb-6 h-[60vh]">
            <h2 className="text-3xl font-semibold text-blue-500 text-center ">📚 What We Offer?</h2> <br />
            <div className='card-container w-full h-[90%] flex justify-around'>
              <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102' >
                <FontAwesomeIcon icon={faBookOpen} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
                <p className='font-bold text-center'>Lecture Notes</p>
                <p className='text-center w-[90%]'> Access topic-wise notes prepared by qualified educators and toppers to help you grasp concepts quickly and effectively.</p>
              </div>
              <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faSheetPlastic} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
                <p className='font-bold text-center'>Previous Year Question Papers</p>
                <p className='text-center w-[90%]'>Practice with actual question papers from previous semesters to understand exam patterns and boost confidence. </p>
              </div>
              <div className='w-[22%] h-[90%] flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faDiagramProject} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
                <p className='font-bold text-center'>Project Reports</p>
                <p className='text-center w-[90%]'>Browse detailed project documentation to help you plan, design, and present your academic or mini-projects.</p>
              </div>
              <div className='w-[22%] h-[90%]  flex flex-col justify-around rounded-2xl shadow-2xl hover:scale-102'>
                <FontAwesomeIcon icon={faBook} size="2xl" style={{ color: "#286ee6", fontSize: "120px" }} />
                <p className='font-bold text-center'>Reference Books</p>
                <p className='text-center w-[90%]'>Get curated lists of textbooks and reference materials recommended by universities and faculty members </p>
              </div>
            </div>
          </div>

          <div className="bg-white h-[70vh] w-[100%] shadow-lg rounded-lg p-8 text-left mb-6 flex flex-col justify-around items-center">
            <h2 className="text-3xl h-[15%] font-semibold text-blue-500">🙌 How It Works?</h2>
            <div className='h-[85%] w-[100%] flex'>
              <div className=' h-[100%] w-[50%]'>
                <div className='h-[100%] w-[100%] flex justify-center'>
                  <img className='h-[100%] w-[90%]' src="/aa.webp" alt="" />
                </div>
              </div>
              <div className='h-[100%] w-[50%] flex flex-col pl-6'>
                <h1 className='font-bold text-2xl mb-6 '>BCA Repo for Students</h1>
                <ol className="list-none text-gray-700 space-y-4 h-[100%] w-[90%] flex flex-col justify-around ">
                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faDownload} size="xl" style={{ color: "#000000" }} />
                    <div>
                      <strong>Browse & Download</strong>
                      <p className="text-sm">Access a vast collection of study materials.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUpload} size="xl" style={{ color: "#000000" }} />
                    <div>
                      <strong>Upload & Share</strong>
                      <p className="text-sm">Contribute your own notes and help others.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faUserTie} size="xl" style={{ color: "#000000" }} />
                    <div>
                      <strong>Admin Approval</strong>
                      <p className="text-sm">Uploaded materials are verified for quality.</p>
                    </div>
                  </li>

                  <li className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faFaceSmile} size="xl" style={{ color: "#000000" }} />
                    <div>
                      <strong>Easy Access</strong>
                      <p className="text-sm">Use categories, search, and filters to find resources.</p>
                    </div>
                  </li>
                </ol>
              </div>

            </div>
          </div>

          {/* <div className="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
            <h2 className="text-3xl font-semibold text-blue-500">🎯 Why Choose BCA Repository?</h2>
            <ul className="list-disc pl-8 text-gray-700 mt-4 space-y-2">
              <li><strong>Free & Open Access</strong> – Materials are freely available for students.</li>
              <li><strong>Well-Organized Categories</strong> – Find notes based on subjects and semesters.</li>
              <li><strong>Secure & Verified Content</strong> – Admin approval ensures reliable resources.</li>
              <li><strong>User-Friendly Interface</strong> – Simple and intuitive design.</li>
            </ul>
          </div> */}
<div class="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
  <h2 class="text-3xl font-semibold text-blue-500 text-center mb-6">
    🎯 Why Choose BCA Repository?
  </h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-lg font-bold text-blue-600">Free & Open Access</h3>
      <p class="text-gray-700 mt-2">Materials are freely available for students.</p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-lg font-bold text-blue-600">Well-Organized Categories</h3>
      <p class="text-gray-700 mt-2">Find notes based on subjects and semesters.</p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-lg font-bold text-blue-600">Secure & Verified Content</h3>
      <p class="text-gray-700 mt-2">Admin approval ensures reliable resources.</p>
    </div>

    <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-lg font-bold text-blue-600">User-Friendly Interface</h3>
      <p class="text-gray-700 mt-2">Simple and intuitive design.</p>
    </div>
  </div>
</div>

          <div className="w-full h-[80vh] bg-white rounded-lg p-8 shadow-lg mt-12 ">
            <h2 className="text-3xl h-[10%] font-semibold text-blue-600    text-center">
              ✨ Features
            </h2>
            <div className="flex justify-around h-[80%]">
              <div className='flex flex-col w-[40%] h-full justify-around'>
                <FeatureItem
                  icon={<FaBook className="text-blue-600 text-4xl" />}
                  title="Numerous Subjects"
                  description="BCA Notes provides subjects like Java, C++, MIS, and IT."
                />
                <FeatureItem
                  icon={<FaStar className="text-blue-600 text-4xl" />}
                  title="Superior Notes"
                  description="Expert-created notes with well-structured content."
                />
                <FeatureItem
                  icon={<FaTachometerAlt className="text-blue-600 text-4xl" />}
                  title="Ultra Fast Speed"
                  description="Fast and seamless access with cloud hosting."
                />
              </div>
              <div className='flex flex-col w-[40%] h-full  justify-around'>
                <FeatureItem
                  icon={<FaSignal className="text-blue-600 text-4xl" />}
                  title="Always On-Mode"
                  description="Access study materials offline with caching."
                />

                <FeatureItem
                  icon={<FaShieldAlt className="text-blue-600 text-4xl" />}
                  title="Iron-clad Security"
                  description="Secured with SSL encryption for safety."
                />
                <FeatureItem
                  icon={<FaEnvelope className="text-blue-600 text-4xl" />}
                  title="Top-notch Support"
                  description="Contact us anytime for help or contributions."
                />
              </div>
            </div>
          </div>


          <p className="text-2xl font-semibold text-gray-800 mt-6">🌟 Start Exploring Now! Enhance your learning experience with the best study materials.</p>
          <p className="text-lg text-blue-600 font-medium mt-2">📥 Have study materials to share? Upload them and help the community grow!</p>
        </div>
      </div>

      <footer className="bg-blue-600 text-white text-center py-6 mt-12">
        <p className="text-lg">&copy; 2025 BCA Repository. All rights reserved.</p>
        <p className="text-sm">Designed to help BCA students with quality study materials.</p>
      </footer>
    </>
  );
}
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 h-[30%] bg-gray-100 p-10 rounded-lg shadow-md">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);


