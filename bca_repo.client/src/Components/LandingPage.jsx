import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

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
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">Welcome to BCA Repository</h1>
          <p className="text-xl text-gray-700 mb-8">Your Ultimate Study Companion! A one-stop platform for BCA students to access and share study materials.</p>
          
          <div className="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
            <h2 className="text-3xl font-semibold text-blue-500">📚 What We Offer?</h2>
            <ul className="list-disc pl-8 text-gray-700 mt-4 space-y-2">
              <li>Lecture Notes</li>
              <li>Previous Year Question Papers</li>
              <li>Assignments & Solutions</li>
              <li>Project Reports</li>
              <li>Reference Books & E-books</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
            <h2 className="text-3xl font-semibold text-blue-500">🙌 How It Works?</h2>
            <ol className="list-decimal pl-8 text-gray-700 mt-4 space-y-2">
              <li><strong>Browse & Download</strong> – Access a vast collection of study materials.</li>
              <li><strong>Upload & Share</strong> – Contribute your own notes and help others.</li>
              <li><strong>Admin Approval</strong> – Uploaded materials are verified for quality.</li>
              <li><strong>Easy Access</strong> – Use categories, search, and filters to find resources.</li>
            </ol>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 text-left mb-6">
            <h2 className="text-3xl font-semibold text-blue-500">🎯 Why Choose BCA Repository?</h2>
            <ul className="list-disc pl-8 text-gray-700 mt-4 space-y-2">
              <li><strong>Free & Open Access</strong> – Materials are freely available for students.</li>
              <li><strong>Well-Organized Categories</strong> – Find notes based on subjects and semesters.</li>
              <li><strong>Secure & Verified Content</strong> – Admin approval ensures reliable resources.</li>
              <li><strong>User-Friendly Interface</strong> – Simple and intuitive design.</li>
            </ul>
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
