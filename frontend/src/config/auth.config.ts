/**
 * ============================================================
 * Authentication Configuration
 * ============================================================
 */

const authConfig = {
    tokenKey: "access_token",
  
    refreshTokenKey: "refresh_token",
  
    userKey: "user",
  
    loginRedirect: "/dashboard",
  
    logoutRedirect: "/login",
  
    tokenRefreshThreshold: 60, // Seconds
  } as const;
  
  export default authConfig;