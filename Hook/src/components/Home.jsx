import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to User Directory App
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover and explore user profiles with our modern, intuitive interface. 
            Browse through our comprehensive user directory and view detailed information 
            about each user in our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/users" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Browse Users
            </Link>
            
            <Link 
              to="/about" 
              className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">User Profiles</h3>
              <p className="text-gray-600">Explore detailed user information and contact details</p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Navigation</h3>
              <p className="text-gray-600">Intuitive interface for seamless user experience</p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Loading</h3>
              <p className="text-gray-600">Quick access to user data with modern technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
