import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area with Outlet */}
      <div className="flex-1 bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;
