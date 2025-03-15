import React from 'react';
import AuthenticatedLayout from '../components/AuthenticatedLayout';

const ProfilePage: React.FC = () => {
  return (
   <AuthenticatedLayout>
   <div className='container'>
      <h2>Profile Page</h2>
      <p>Some user profile details here...</p>
    </div>
   </AuthenticatedLayout>
    
  );
};

export default ProfilePage;
