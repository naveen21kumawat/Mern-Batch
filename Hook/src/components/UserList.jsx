import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const userData = await response.json();
      setUsers(userData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    fetchUsers();
  };

  if (loading) {
    return (
      <div className="user-list-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list-container">
        <div className="error-container">
          <h2>Error Loading Users</h2>
          <p className="error-message">{error}</p>
          <button onClick={handleRefresh} className="refresh-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list-container">
      <div className="header">
        <h1>User Directory</h1>
        <button onClick={handleRefresh} className="refresh-btn" disabled={loading}>
          {loading ? 'Refreshing...' : '🔄 Refresh'}
        </button>
      </div>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">📧 {user.email}</p>
              <div className="user-details">
                <p className="user-username">@{user.username}</p>
                <p className="user-phone">📞 {user.phone}</p>
                <p className="user-website">🌐 {user.website}</p>
                <p className="user-company">🏢 {user.company.name}</p>
              </div>
              <Link 
                to={`/users/${user.id}`} 
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="user-count">
        Total Users: {users.length}
      </div>
    </div>
  );
};

export default UserList;
