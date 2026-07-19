/**
 * ============================================================
 * NexusERP API Endpoints
 * ============================================================
 *
 * Centralized location for all backend API endpoints.
 * Never hardcode API URLs inside components or services.
 */

export const API_ENDPOINTS = {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
      REFRESH_TOKEN: "/auth/refresh-token",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/reset-password",
      CHANGE_PASSWORD: "/auth/change-password",
      PROFILE: "/auth/profile",
    },
  
    USERS: {
      BASE: "/users",
      PROFILE: "/users/profile",
    },
  
    ROLES: {
      BASE: "/roles",
    },
  
    PERMISSIONS: {
      BASE: "/permissions",
    },
  
    COMPANIES: {
      BASE: "/companies",
    },
  
    BRANCHES: {
      BASE: "/branches",
    },
  
    DEPARTMENTS: {
      BASE: "/departments",
    },
  
    EMPLOYEES: {
      BASE: "/employees",
    },
  
    DASHBOARD: {
      STATS: "/dashboard/stats",
      ANALYTICS: "/dashboard/analytics",
    },
  
    INVENTORY: {
      PRODUCTS: "/inventory/products",
      CATEGORIES: "/inventory/categories",
      STOCKS: "/inventory/stocks",
      WAREHOUSES: "/inventory/warehouses",
    },
  
    SALES: {
      ORDERS: "/sales/orders",
      CUSTOMERS: "/sales/customers",
      INVOICES: "/sales/invoices",
    },
  
    PURCHASE: {
      ORDERS: "/purchase/orders",
      SUPPLIERS: "/purchase/suppliers",
    },
  
    CRM: {
      LEADS: "/crm/leads",
      CONTACTS: "/crm/contacts",
    },
  
    HRMS: {
      EMPLOYEES: "/hrms/employees",
      ATTENDANCE: "/hrms/attendance",
      LEAVES: "/hrms/leaves",
    },
  
    PAYROLL: {
      BASE: "/payroll",
    },
  
    ACCOUNTS: {
      BASE: "/accounts",
    },
  
    REPORTS: {
      BASE: "/reports",
    },
  
    NOTIFICATIONS: {
      BASE: "/notifications",
    },
  
    SETTINGS: {
      BASE: "/settings",
    },
  } as const;