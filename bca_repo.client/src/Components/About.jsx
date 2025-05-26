import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center py-12 px-4 sm:py-16 sm:px-6">
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 inline-block">
          About BCA Notes
        </h1>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-4xl">
        {/* Introduction Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-indigo-500 mb-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-full mb-6 md:mb-0 md:mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
                Welcome to <span className="font-semibold text-indigo-600">BCA Notes</span>, your comprehensive resource hub for high-quality study materials covering a wide range of subjects related to computer science and applications.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 text-lg mt-6 leading-relaxed">
            At <span className="font-semibold text-indigo-600">BCA Notes</span>, our mission is simple: to provide well-structured and easy-to-understand study materials for students pursuing the 
            <span className="font-semibold"> Bachelor of Computer Applications (BCA)</span>. 
            Whether you're a beginner starting your programming journey or an advanced learner preparing for exams, we aim to support your academic journey with valuable resources crafted by experts and experienced educators.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-2 text-indigo-700 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free Access
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-2 text-indigo-700 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Downloadable PDFs
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-2 text-indigo-700 font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Up-to-date Content
            </div>
          </div>
        </div>
        
        {/* What We Offer */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border-l-4 border-purple-500 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">What We Offer</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">📚</span>
                <span className="text-gray-700">Comprehensive lecture notes for all BCA subjects</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">💻</span>
                <span className="text-gray-700">Well-explained C, C++, and Java programming concepts</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">📝</span>
                <span className="text-gray-700">Previous year solved question papers and model exams</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">🔍</span>
                <span className="text-gray-700">Guides on database management, networking, and IT fundamentals</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-100 text-yellow-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">🧩</span>
                <span className="text-gray-700">Easy-to-follow tutorials and study tips</span>
              </li>
              <li className="flex items-center">
                <span className="bg-pink-100 text-pink-800 rounded-full w-8 h-8 flex justify-center items-center mr-3 flex-shrink-0">📊</span>
                <span className="text-gray-700">Interactive coding exercises and practice problems</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Common Questions */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border-r-4 border-blue-500 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-700">Where can I find structured C and C++ programming examples?</p>
              <p className="text-gray-600 mt-2">Our programming section includes step-by-step examples, from basic to advanced concepts, with detailed explanations.</p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <p className="font-medium text-indigo-700">How do I start coding from scratch?</p>
              <p className="text-gray-600 mt-2">Check out our beginner's guide to programming, where we break down concepts into manageable chunks with practical examples.</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-medium text-purple-700">Where can I access all BCA subjects under one platform?</p>
              <p className="text-gray-600 mt-2">Right here! Our repository covers the entire BCA curriculum with semester-wise organization of materials.</p>
            </div>
            
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="font-medium text-pink-700">How can I contribute to BCA Notes?</p>
              <p className="text-gray-600 mt-2">We welcome contributions! Check our contribution guidelines and share your notes, examples, or resources with the community.</p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border-b-4 border-green-500 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">Why Choose BCA Notes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-3">
                <div className="bg-green-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700 ml-3">Free Access</h3>
              </div>
              <p className="text-gray-600">All our materials are completely free and accessible anytime, anywhere. No hidden fees or subscriptions required.</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
              <div className="flex items-center mb-3">
                <div className="bg-indigo-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 ml-3">Downloadable Resources</h3>
              </div>
              <p className="text-gray-600">High-quality PDF notes and downloadable resources that you can access offline for your convenience.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-700 ml-3">Up-to-date Content</h3>
              </div>
              <p className="text-gray-600">Materials are regularly updated to cover the latest BCA syllabus and industry-relevant technologies.</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-100">
              <div className="flex items-center mb-3">
                <div className="bg-yellow-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-yellow-700 ml-3">Community-Driven</h3>
              </div>
              <p className="text-gray-600">Learn from others, contribute your knowledge, and be part of a supportive learning community.</p>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-indigo-100 mt-2">Study Notes</div>
            </div>
            <div>
              <div className="text-4xl font-bold">200+</div>
              <div className="text-indigo-100 mt-2">Code Examples</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-indigo-100 mt-2">Subjects Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10K+</div>
              <div className="text-indigo-100 mt-2">Happy Students</div>
            </div>
          </div>
        </div>
        
        {/* Contact & Call to Action */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Get Involved</h2>
            <p className="text-gray-600 mt-2">Join our community and contribute to the learning experience</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex-1">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">Have suggestions or need specific study materials? We're here to help!</p>
              <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 shadow-md">
                Get in Touch
              </a>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 flex-1">
              <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Contribute
              </h3>
              <p className="text-gray-600 mb-4">Share your knowledge and help fellow students by contributing your notes and resources.</p>
              <a href="" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 shadow-md">
                Start Contributing
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center bg-white shadow-lg rounded-xl p-6">
          <p className="text-lg font-bold text-indigo-600">Happy Learning! 🎓🚀</p>
          <p className="text-gray-600 mt-2">Join us in making learning computer science accessible and enjoyable for everyone.</p>
        </div>
      </div>
    </div>
  );
}