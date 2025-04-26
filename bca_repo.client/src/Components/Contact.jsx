
// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// import { totalContext } from "./AppCotext";

// export default function Contact() {

//   const {currentUser}=useContext(totalContext)
//   const [formData, setFormData] = useState({
//     userID:currentUser.userId,
//     name: "",
//     email: "",
//     reason: "",
//     subject: "",
//     description: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("Sending data:", formData);s
//     setIsSubmitting(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     try {
//       const response = await axios.post("https://localhost:7166/api/ContactUs/AddContact", formData);
//       console.log(response);
//       if (response.status==200) {
//         setSuccessMessage("Message sent successfully! We will get back to you soon.");
//         toast.success("Message sent succesfully")
//         setFormData({ userID:currentUser.userId,name: "", email: "", reason: "", subject: "", description: "" }); // Reset form
//       } else {
//         setErrorMessage("Something went wrong. Please try again later.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//       setErrorMessage("Failed to send message. Please check your connection.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  

 
//    return (
//      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-4">
//        {/* Header */}
//        <div className="text-center mb-6">
//          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">
//            BCA Repository
//          </h1>
//          <p className="text-sm text-gray-600 mt-1">crafted with ❤️ for BCA students</p>
//          <hr className="border-t-2 border-purple-300 w-32 mx-auto mt-3" />
//        </div>
//        {/* Contact Form Container */}
//        <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
//          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">📩 Contact Us</h2>
//          <p className="text-gray-600 text-sm mb-4">
//            This contact page is for questions regarding the platform or uploading files.
//          </p>
//          <form className="space-y-5" onSubmit={handleSubmit}>
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//              <input
//                type="text"
//                name="name"
//                value={formData.name}
//                onChange={handleChange}
//                placeholder="Your Name"
//                required
//                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//              />
//              <input
//                type="email"
//                name="email"
//                value={formData.email}
//                onChange={handleChange}
//                placeholder="Your Email"
//                required
//                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//              />
//            </div>
//            <select
//              name="reason"
//              value={formData.reason}
//              onChange={handleChange}
//              required
//              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//            >
//              <option value="">— Select a Reason —</option>
//              <option value="Upload Issue">📤 Upload Issue</option>
//              <option value="Feedback">💬 Feedback</option>
//            </select>
//            <input
//              type="text"
//              name="subject"
//              value={formData.subject}
//              onChange={handleChange}
//              placeholder="Subject"
//              required
//              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//            />
//            <textarea
//              name="description"
//              value={formData.description}
//              onChange={handleChange}
//              placeholder="Write your message..."
//              rows="5"
//              required
//              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
//            ></textarea>
//            {/* Buttons */}
//            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
//              <button
//                type="submit"
//                disabled={isSubmitting}
//                className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 ease-in-out"
//              >
//                {isSubmitting ? "Sending..." : "SEND MESSAGE"}
//              </button>
//              <button
//                type="reset"
//                onClick={() =>
//                  setFormData({
//                    name: "",
//                    email: "",
//                    reason: "",
//                    subject: "",
//                    description: "",
//                  })
//                }
//                className="w-full sm:w-auto px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition duration-200 ease-in-out"
//              >
//                RESET
//              </button>
//            </div>
//          </form>
//          {/* Status Messages */}
//          {successMessage && (
//            <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
//          )}
//          {errorMessage && (
//            <p className="text-red-600 mt-4 font-medium">{errorMessage}</p>
//          )}
//          {/* Notes */}
//          <div className="mt-6 text-sm text-gray-500 space-y-2">
//            <p><strong>Note:</strong> Spamming this form may result in an IP ban.</p>
//            <p>We try to respond within 24–48 hours. Thank you for your patience!</p>
//          </div>
//        </div>
//      </div>
//    );
  
// }

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { totalContext } from "./AppCotext";

export default function Contact() {
  const { currentUser } = useContext(totalContext);

  const [formData, setFormData] = useState({
    userID: "",
    name: "",
    email: "",
    reason: "",
    subject: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (currentUser) {
      setFormData((prev) => ({
        ...prev,
        userID: currentUser.userId,
        name: currentUser.name,
        email: currentUser.email,
      }));
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://localhost:7166/api/ContactUs/AddContact", formData);
      if (response.status === 200) {
        setSuccessMessage("Message sent successfully! We will get back to you soon.");
        toast.success("Message sent successfully!");
        setFormData((prev) => ({
          ...prev,
          reason: "",
          subject: "",
          description: "",
        })); // Reset only reason, subject, description
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      setErrorMessage("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      reason: "",
      subject: "",
      description: "",
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">
          BCA Repository
        </h1>
        <p className="text-sm text-gray-600 mt-1">crafted with ❤️ for BCA students</p>
        <hr className="border-t-2 border-purple-300 w-32 mx-auto mt-3" />
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">📩 Contact Us</h2>
        <p className="text-gray-600 text-sm mb-4">
          This contact page is for questions regarding the platform or uploading files.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              readOnly
              placeholder="Your Name"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              placeholder="Your Email"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">— Select a Reason —</option>
            <option value="Upload Issue">📤 Upload Issue</option>
            <option value="Feedback">💬 Feedback</option>
          </select>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          ></textarea>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 ease-in-out"
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition duration-200 ease-in-out"
            >
              RESET
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {successMessage && (
          <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 mt-4 font-medium">{errorMessage}</p>
        )}

        {/* Notes */}
        <div className="mt-6 text-sm text-gray-500 space-y-2">
          <p><strong>Note:</strong> Spamming this form may result in an IP ban.</p>
          <p>We try to respond within 24–48 hours. Thank you for your patience!</p>
        </div>
      </div>
    </div>
  );
}
