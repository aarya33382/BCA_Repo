import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center">About BCA Notes</h1>
        <hr className="border-t-2 border-gray-300 my-5" />
        
        <p className="text-gray-700 text-lg text-center">
          Welcome to <span className="font-semibold text-blue-600">BCA Notes</span>, your one-stop destination for high-quality study materials covering a wide range of subjects related to computer science.
        </p>
        
        <p className="text-gray-700 mt-5">
          At <span className="font-semibold text-blue-600">BCA Notes</span>, our mission is simple: to provide well-structured and easy-to-understand study materials for students pursuing the 
          <span className="font-semibold"> Bachelor of Computer Applications (BCA).</span> 
          Whether you're a beginner or an advanced learner, we aim to support your academic journey with valuable resources.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">📌 What We Offer</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
          <li>Comprehensive lecture notes for various subjects.</li>
          <li>Well-explained C, C++, and Java programming concepts.</li>
          <li>Previous year solved question papers and model exams.</li>
          <li>Guides on database management, networking, and IT fundamentals.</li>
          <li>Easy-to-follow tutorials and study tips.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">🤔 Have You Ever Asked These Questions?</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
          <li>Where can I find structured C and C++ programming examples?</li>
          <li>How do I start coding from scratch?</li>
          <li>Where can I access all BCA subjects under one platform?</li>
        </ul>
        <p className="text-gray-700 mt-4">
          If yes, then you're in the right place! Our platform is designed to help students learn efficiently and excel in their studies.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">🚀 Why Choose BCA Notes?</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
          <li>Completely free and accessible anytime, anywhere.</li>
          <li>High-quality PDF notes and downloadable resources.</li>
          <li>Up-to-date materials covering the latest BCA syllabus.</li>
          <li>Community-driven content—learn from others, and contribute!</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">📞 Contact Us</h2>
        <p className="text-gray-700 mt-3">
          Have suggestions or need specific study materials? Feel free to 
          <a href="/contact" className="text-blue-600 font-bold hover:underline"> Contact Us</a>.
        </p>

        <p className="text-gray-700 mt-6 text-center font-semibold">
          Happy Learning! 🎓🚀
        </p>
      </div>
    </div>
  );
}
