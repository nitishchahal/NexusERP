/**
 * Environment Configuration
 *
 * Centralized access to all environment variables.
 * Never access `import.meta.env` directly outside this file.
 */

const env = {
    APP_NAME: import.meta.env.VITE_APP_NAME || "NexusERP",
  
    APP_ENV: import.meta.env.VITE_APP_ENV || "development",
  
    API_BASE_URL:
      import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  
    APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",
  
    ENABLE_DEVTOOLS:
      import.meta.env.VITE_ENABLE_DEVTOOLS === "true",
  };
  
  export default env;