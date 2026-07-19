/**
 * ============================================================
 * Feature Flags
 * ============================================================
 *
 * Enable/Disable features during development.
 */

const featureFlags = {
    enableNotifications: true,
  
    enableAnalytics: true,
  
    enableAuditLogs: true,
  
    enableDarkMode: true,
  
    enableMultiCompany: true,
  } as const;
  
  export default featureFlags;