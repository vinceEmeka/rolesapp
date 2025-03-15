import React from 'react';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../components/Dashboard';
import AuthenticatedLayout from '../components/AuthenticatedLayout';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>Please login first.</p>;

  return (
   <AuthenticatedLayout>
 <div className='container'>
      <h2>Welcome, {user.username} ({user.role})</h2>
      <Dashboard role={user.role} />
      
      {/* <button onClick={logout}>Logout</button> */}
    </div>
   </AuthenticatedLayout>
   
  );
};

export default DashboardPage;
 