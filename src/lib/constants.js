
/**
 * Application-wide constants
 */

// Roles and permissions
export const ROLES = {
  ADMIN: 'admin',
  SELLER: 'seller'
};

export const PERMISSIONS = {
  [ROLES.ADMIN]: [
    'view_dashboard',
    'manage_users',
    'manage_products',
    'manage_clients',
    'manage_sales',
    'view_reports',
    'export_data'
  ],
  [ROLES.SELLER]: [
    'view_products',
    'create_sales',
    'view_clients',
    'create_clients'
  ]
};

// Product categories
export const PRODUCT_CATEGORIES = [
  'Tecnología',
  'Servicios',
  'Software',
  'Hardware',
  'Consultoría'
];

// Sale status
export const SALE_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

// Document types
export const DOCUMENT_TYPES = {
  INVOICE: 'invoice',
  RECEIPT: 'receipt'
};

// Tax rates
export const TAX_RATES = {
  IVA: 0.19
};

// Chart colors
export const CHART_COLORS = {
  primary: 'hsl(var(--primary))',
  secondary: 'hsl(var(--secondary))',
  muted: 'hsl(var(--muted))',
  background: 'hsl(var(--background))'
};

// Date formats
export const DATE_FORMATS = {
  display: 'dd/MM/yyyy',
  input: 'yyyy-MM-dd',
  api: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx'
};

// Validation rules
export const VALIDATION_RULES = {
  password: {
    minLength: 8,
    requireNumbers: true,
    requireSpecialChars: true
  },
  phone: {
    minLength: 8,
    maxLength: 15
  },
  rut: {
    pattern: /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/
  }
};

// API endpoints
export const API_ENDPOINTS = {
  auth: '/api/auth',
  users: '/api/users',
  products: '/api/products',
  clients: '/api/clients',
  sales: '/api/sales',
  reports: '/api/reports'
};

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'app-theme',
  token: 'auth-token',
  user: 'user-data'
};

// Theme settings
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Alert messages
export const ALERT_MESSAGES = {
  success: {
    create: 'Creado exitosamente',
    update: 'Actualizado exitosamente',
    delete: 'Eliminado exitosamente'
  },
  error: {
    create: 'Error al crear',
    update: 'Error al actualizar',
    delete: 'Error al eliminar',
    unauthorized: 'No tiene permisos para realizar esta acción'
  }
};

// Print settings
export const PRINT_SETTINGS = {
  pageSize: 'A4',
  orientation: 'portrait',
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }
};

// Dashboard settings
export const DASHBOARD_SETTINGS = {
  chartPeriods: {
    daily: 'daily',
    weekly: 'weekly',
    monthly: 'monthly',
    yearly: 'yearly'
  },
  defaultChartPeriod: 'monthly',
  lowStockThreshold: 10
};
