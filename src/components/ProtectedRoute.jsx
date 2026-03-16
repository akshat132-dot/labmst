import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/access-denied" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
