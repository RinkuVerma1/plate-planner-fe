// src/routes/RestrictedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to='/dashboard' replace /> : <>{children}</>;
};

export default RestrictedRoute;
