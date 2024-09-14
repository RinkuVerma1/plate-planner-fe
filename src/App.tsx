import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import Dashboard from './screens/Dashboard';
import NotFoundPage from './screens/NotFoundPage';
import './App.css';

const App: React.FC = () => {
  const isAuthenticated = false; // Change this based on your authentication logic

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PublicRoute>
          }
        />
        {/* 404 Not Found */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
