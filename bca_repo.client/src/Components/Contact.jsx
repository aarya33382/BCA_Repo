
// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// import { totalContext } from "./AppCotext";

// export default function Contact() {
//   const { currentUser } = useContext(totalContext);

//   const [formData, setFormData] = useState({
//     userID: "",
//     name: "",
//     email: "",
//     reason: "",
//     subject: "",
//     description: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     if (currentUser) {
//       setFormData((prev) => ({
//         ...prev,
//         userID: currentUser.userId,
//         name: currentUser.name,
//         email: currentUser.email,
//       }));
//     }
//   }, [currentUser]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSuccessMessage("");
//     setErrorMessage("");

//     try {
//       const response = await axios.post("https://localhost:7166/api/ContactUs/AddContact", formData);
//       if (response.status === 200) {
//         setSuccessMessage("Message sent successfully! We will get back to you soon.");
//         toast.success("Message sent successfully!");
//         setFormData((prev) => ({
//           ...prev,
//           reason: "",
//           subject: "",
//           description: "",
//         })); // Reset only reason, subject, description
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

//   const handleReset = () => {
//     setFormData((prev) => ({
//       ...prev,
//       reason: "",
//       subject: "",
//       description: "",
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-10 px-4">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">
//           BCA Repository
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">crafted with ❤️ for BCA students</p>
//         <hr className="border-t-2 border-purple-300 w-32 mx-auto mt-3" />
//       </div>

//       {/* Contact Form */}
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">📩 Contact Us</h2>
//         <p className="text-gray-600 text-sm mb-4">
//           This contact page is for questions regarding the platform or uploading files.
//         </p>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               readOnly
//               placeholder="Your Name"
//               className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               readOnly
//               placeholder="Your Email"
//               className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
//             />
//           </div>

//           <select
//             name="reason"
//             value={formData.reason}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           >
//             <option value="">— Select a Reason —</option>
//             <option value="Upload Issue">📤 Upload Issue</option>
//             <option value="Feedback">💬 Feedback</option>
//           </select>

//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Subject"
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           />

//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Write your message..."
//             rows="5"
//             required
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
//           ></textarea>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 ease-in-out"
//             >
//               {isSubmitting ? "Sending..." : "SEND MESSAGE"}
//             </button>
//             <button
//               type="button"
//               onClick={handleReset}
//               className="w-full sm:w-auto px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition duration-200 ease-in-out"
//             >
//               RESET
//             </button>
//           </div>
//         </form>

//         {/* Status Messages */}
//         {successMessage && (
//           <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
//         )}
//         {errorMessage && (
//           <p className="text-red-600 mt-4 font-medium">{errorMessage}</p>
//         )}

//         {/* Notes */}
//         <div className="mt-6 text-sm text-gray-500 space-y-2">
//           <p><strong>Note:</strong> Spamming this form may result in an IP ban.</p>
//           <p>We try to respond within 24–48 hours. Thank you for your patience!</p>
//         </div>
//       </div>
//     </div>
//   );
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          BCA Repository
        </h1>
        <p className="text-sm text-gray-600 mt-2 font-medium">crafted with ❤️ for BCA students</p>
        <div className="flex justify-center mt-4">
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-indigo-500">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600 text-sm">
              For questions regarding the platform or uploading files
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                readOnly
                placeholder="Your Name"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                placeholder="Your Email"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Reason</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <option value="">— Select a Reason —</option>
              <option value="Upload Issue">📤 Upload Issue</option>
              <option value="Feedback">💬 Feedback</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            ></textarea>
          </div>

          {/* Status Messages */}
          {successMessage && (
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">{successMessage}</p>
                </div>
              </div>
            </div>
          )}
          
          {errorMessage && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 shadow-md disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Notes */}
        <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
          <h3 className="text-sm font-semibold text-indigo-800 mb-2">Important Notes:</h3>
          <ul className="text-xs text-gray-600 space-y-1 ml-5 list-disc">
            <li>Spamming this form may result in an IP ban</li>
            <li>We try to respond within 24–48 hours</li>
            <li>Thank you for your patience and understanding!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}