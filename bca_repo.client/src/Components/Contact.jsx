import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">BCA Repository</span> crafted with ❤️
        </h1>
        <hr className="border-t-2 border-red-400 w-3/4 mx-auto my-4" />
      </div>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 text-sm mt-2"> This contact page is only for general questions regarding the platform and inquiries related to uploading files.</p>
        <hr className="border-gray-300 my-4" />
        <h3 className="text-xl font-bold text-gray-700">Contact BCA Repository Support</h3>
        <p className="text-gray-500 text-sm mb-6">Thanks for using the contact form. Please fill out the form, and we will try to get in touch with you as soon as possible.</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option>- Reason -</option>
            <option>Upload Issue</option>
            <option>Feedback</option>
          </select>
          <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <textarea placeholder="Enter your message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-600">I'm not a robot</span>
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">SEND MESSAGE</button>
            <button type="reset" className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all">RESET</button>
          </div>
        </form>
        <p className="text-gray-500 text-sm mt-6">
          <strong>Note:</strong> Spamming this form will result in an IP ban.
        </p>
        <p className="text-gray-500 text-sm mt-2"> We try to get back to our users as soon as possible, but due to high volume, responses may take 24-48 hours. Thank you for your patience!</p>
      </div>
    </div>
  )
}
