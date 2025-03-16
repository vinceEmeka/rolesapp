import React from 'react';
import AuthenticatedLayout from '../components/AuthenticatedLayout';

const ProfilePage: React.FC = () => {
  return (
   <AuthenticatedLayout>
   <div className='container'>
      <h2>Welcome, to your Profile Page</h2>

    </div>
   </AuthenticatedLayout>
    
  );
};

export default ProfilePage;
