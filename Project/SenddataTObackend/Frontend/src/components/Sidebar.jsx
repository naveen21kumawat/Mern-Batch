import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../Context/ContextProvide';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useContext(userContext);
  
  // Get user role from context, default to 'user' if not available
  const userRole = user?.role || 'user';

  // Tab configurations based on user role
  const tabConfig = {
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/admin/dashboard' },
      { id: 'users', label: 'Manage Users', icon: '👥', path: '/admin/users' },
      { id: 'analytics', label: 'Analytics', icon: '📈', path: '/admin/analytics' },
      { id: 'settings', label: 'Settings', icon: '⚙️', path: '/admin/settings' }
    ],
    user: [
      { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '/user/dashboard' },
      { id: 'profile', label: 'Profile', icon: '👤', path: '/user/profile' },
      { id: 'activities', label: 'Activities', icon: '📋', path: '/user/activities' },
      { id: 'support', label: 'Support', icon: '💬', path: '/user/support' }
    ]
  };

  const tabs = tabConfig[userRole] || tabConfig.user;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} min-h-screen`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold">
              {userRole === 'admin' ? 'Admin Panel' : 'User Panel'}
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  `w-full flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                <span className="text-lg">{tab.icon}</span>
                {!isCollapsed && (
                  <span className="ml-3 text-sm font-medium">{tab.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 p-4 border-t border-gray-700" style={{width: isCollapsed ? '64px' : '256px'}}>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">
              {userRole === 'admin' ? 'A' : 'U'}
            </span>
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium capitalize">{userRole}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
