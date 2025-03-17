import React from 'react'

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login to BCA Repository</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password </label>
            <input  type="password"  id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
          </div>
           <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center"> <input type="checkbox" className="form-checkbox text-blue-600" /> <span className="ml-2 text-sm text-gray-600">Remember me</span> </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit"className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all" > Login </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">  Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a></p>
      </div>
    </div>
  );
};
