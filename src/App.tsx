
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/profilePage';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
           path="/dashboard" 
           element={
           <ProtectedRoute>
           <DashboardPage />
           </ProtectedRoute>
          } />

          <Route 
          path='/profile'
          element= {
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }/>
         

          <Route 
          path='/settings'
          element={
            <ProtectedRoute requiredRole='admin'>
              <SettingsPage />
            </ProtectedRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

