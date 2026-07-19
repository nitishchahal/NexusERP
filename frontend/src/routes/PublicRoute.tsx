import { Navigate, Outlet } from "react-router-dom";

/**
 * PublicRoute
 *
 * Accessible only to unauthenticated users.
 *
 * Examples:
 * - Login
 * - Forgot Password
 * - Reset Password
 */

const isAuthenticated = false; // TODO: Replace with Auth Store

const PublicRoute = () => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;