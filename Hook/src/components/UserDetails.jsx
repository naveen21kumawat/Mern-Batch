import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`User not found (HTTP ${response.status})`);
      }
      
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching user:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/users')}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              Back to Users
            </button>
            <button 
              onClick={fetchUser}
              className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">No user data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            to="/users" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Users
          </Link>
        </div>

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-12 text-white">
            <div className="text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">{user.name.charAt(0)}</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-xl opacity-90">@{user.username}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-500 text-xl">📧</div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                        {user.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-green-500 text-xl">📞</div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href={`tel:${user.phone}`} className="text-blue-600 hover:underline">
                        {user.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-purple-500 text-xl">🌐</div>
                    <div>
                      <p className="font-medium text-gray-800">Website</p>
                      <a 
                        href={`http://${user.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {user.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-green-500 pb-2">
                  Address
                </h2>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-gray-800">
                      <span className="font-medium">Street:</span> {user.address.street}, {user.address.suite}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">City:</span> {user.address.city}
                    </p>
                    <p className="text-gray-800">
                      <span className="font-medium">Zipcode:</span> {user.address.zipcode}
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Coordinates:</span> 
                        {user.address.geo.lat}, {user.address.geo.lng}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-purple-500 pb-2 mb-6">
                Company Information
              </h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      🏢 {user.company.name}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Catchphrase:</span> "{user.company.catchPhrase}"
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Business:</span> {user.company.bs}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/users"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-center"
              >
                View All Users
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
