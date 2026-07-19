/**
 * ============================================================
 * NexusERP Application Configuration
 * ============================================================
 *
 * Global application configuration.
 * These values rarely change and are used throughout the app.
 */

const appConfig = {
    app: {
      name: "NexusERP",
      version: "1.0.0",
      environment: "development",
    },
  
    pagination: {
      defaultPage: 1,
      defaultPageSize: 10,
      pageSizeOptions: [10, 20, 50, 100],
    },
  
    date: {
      locale: "en-IN",
      format: "DD/MM/YYYY",
      timeFormat: "HH:mm",
    },
  
    upload: {
      maxFileSize: 5 * 1024 * 1024, // 5MB
      allowedImageTypes: [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ],
    },
  
    table: {
      enableSorting: true,
      enableFiltering: true,
      enablePagination: true,
    },
  
    dashboard: {
      refreshInterval: 30000, // 30 Seconds
    },
  } as const;
  
  export default appConfig;