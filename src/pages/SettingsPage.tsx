import React from 'react';
import AuthenticatedLayout from '../components/AuthenticatedLayout';

const SettingsPage: React.FC = () => {
  return (
   <AuthenticatedLayout>
<div className='container'>
      <h2>Admin Settings Page</h2>
      <p>Only accessible by admin</p>
    </div>
   </AuthenticatedLayout>
    
  );
};

export default SettingsPage;
