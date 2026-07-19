import { Navigate, Outlet } from "react-router-dom";

/**
 * PrivateRoute
 *
 * Accessible only to authenticated users.
 */

const isAuthenticated = false; // TODO: Replace with Auth Store

const PrivateRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;