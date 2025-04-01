
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function Contact() {
  const [formData, setFormData] = useState({
    userID:38,
    name: "",
    email: "",
    reason: "",
    subject: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Sending data:", formData);
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://localhost:7166/api/ContactUs/AddContact", formData);
      console.log(response);
      if (response.status==200) {
        setSuccessMessage("Message sent successfully! We will get back to you soon.");
        toast.success("Message sent succesfully")
        setFormData({ name: "", email: "", reason: "", subject: "", message: "" }); // Reset form
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <p className="text-gray-600 text-sm mt-2">This contact page is only for general questions regarding the platform and inquiries related to uploading files.</p>
        <hr className="border-gray-300 my-4" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <select name="reason" value={formData.reason} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            <option value="">- Reason -</option>
            <option value="Upload Issue">Upload Issue</option>
            <option value="Feedback">Feedback</option>
          </select>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter your message" rows="4" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          
          <div className="flex space-x-4">
            <button type="submit" disabled={isSubmitting} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </button>
            <button type="reset" onClick={() => setFormData({ name: "", email: "", reason: "", subject: "", description: "" })} className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all">RESET</button>
          </div>
        </form>

        {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}

        <p className="text-gray-500 text-sm mt-6">
          <strong>Note:</strong> Spamming this form will result in an IP ban.
        </p>
        <p className="text-gray-500 text-sm mt-2">We try to get back to our users as soon as possible, but due to high volume, responses may take 24-48 hours. Thank you for your patience!</p>
      </div>
    </div>
  );
}
