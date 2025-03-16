import React from 'react';
import { Role } from '../types';

interface DashboardProps {
  role: Role;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  switch (role) {
    case 'admin':
      return <div>Show admin controls.</div>;
    case 'editor':
      return <div>Show content editor panel.</div>;
    case 'viewer':
      return <div>Show read-only reports.</div>;
    default:
      return null;
  }
};

export default Dashboard;
