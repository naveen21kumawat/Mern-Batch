import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About User Directory App
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to our comprehensive User Directory Application! This modern web application 
              is built with React and demonstrates advanced routing capabilities, state management, 
              and API integration patterns.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🚀 Features</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Dynamic user listing from JSONPlaceholder API</li>
                  <li>• Individual user detail pages</li>
                  <li>• Responsive design with Tailwind CSS</li>
                  <li>• Modern React Hooks (useState, useEffect, useParams)</li>
                  <li>• Client-side routing with React Router</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-3">⚡ Technology Stack</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• React 18+ with Hooks</li>
                  <li>• React Router DOM for navigation</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• JSONPlaceholder API for data</li>
                  <li>• Vite for fast development</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">📋 App Structure</h3>
              <div className="text-gray-700">
                <p className="mb-3">This application demonstrates key React concepts:</p>
                <ul className="space-y-2">
                  <li><strong>Home Page:</strong> Landing page with app overview and navigation</li>
                  <li><strong>Users Page:</strong> Complete user directory with clickable user cards</li>
                  <li><strong>User Details:</strong> Individual user profiles with comprehensive information</li>
                  <li><strong>Error Handling:</strong> 404 page for invalid routes</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/users" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Explore Users Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;