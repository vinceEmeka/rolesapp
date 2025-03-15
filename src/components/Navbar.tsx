import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// import ProfilePage from '../pages/profilePage';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem', 
      background: '#f5f5f5', 
      marginBottom: '1rem' 
    }}>
      <div>
        <strong>{user.username}</strong> ({user.role})
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        {user.role === 'admin' && <Link to="/settings">Settings</Link>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
