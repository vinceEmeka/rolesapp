import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<Role>('admin');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login({ username, role });
      navigate('/dashboard');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <label htmlFor="username">Username: </label>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br />

      <label htmlFor="username">User's Role: </label>

      <select value={role} onChange={e => setRole(e.target.value as Role)}>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
