import React from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, isAuthenticated }) => {
  return !isAuthenticated ? <>{children}</> : <Navigate to='/dashboard' replace />;
};

export default PublicRoute;
