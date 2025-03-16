import React from 'react';
import { Role } from '../types';

interface DashboardProps {
  role: Role;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  switch (role) {
    case 'admin':
      return <div>Admin: Show admin controls.</div>;
    case 'editor':
      return <div>Editor: Show content editor panel.</div>;
    case 'viewer':
      return <div>Viewer: Show read-only reports.</div>;
    default:
      return null;
  }
};

export default Dashboard;
