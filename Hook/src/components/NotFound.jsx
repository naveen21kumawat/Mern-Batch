import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <div className="text-6xl mb-6">🔍</div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link 
              to="/users" 
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Browse Users
            </Link>
            
            <Link 
              to="/about" 
              className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              About App
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
