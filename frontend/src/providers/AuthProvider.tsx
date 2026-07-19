import type { ReactNode } from "react";
import { useEffect } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    // TODO:
    // Restore session
    // Refresh token
    // Fetch current user
  }, []);

  return <>{children}</>;
};

export default AuthProvider;