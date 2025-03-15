import React from 'react';
import { Role } from '../types';

interface DashboardProps {
  role: Role;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  switch (role) {
    case 'admin':
      return <div>Admin Panel: Manage Users & Settings</div>;
    case 'editor':
      return <div>Editor Panel: Create & Edit Content</div>;
    case 'viewer':
      return <div>Viewer Panel: Browse Content</div>;
    default:
      return null;
  }
};

export default Dashboard;
