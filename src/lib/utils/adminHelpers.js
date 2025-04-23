
/**
 * Utility functions for admin dashboard
 */

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Format currency values
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

/**
 * Format date to localized string
 * @param {string|Date} date - Date to format
 * @param {string} formatStr - Format string (default: dd/MM/yyyy)
 * @returns {string} Formatted date string
 */
export const formatDate = (date, formatStr = 'dd/MM/yyyy') => {
  return format(new Date(date), formatStr, { locale: es });
};

/**
 * Calculate percentage change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {string} Formatted percentage change
 */
export const calculatePercentageChange = (current, previous) => {
  if (!previous) return '+100%';
  const change = ((current - previous) / previous) * 100;
  return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
};

/**
 * Get status color class based on priority/status
 * @param {string} status - Status or priority value
 * @returns {string} Tailwind CSS color classes
 */
export const getStatusColor = (status) => {
  const statusColors = {
    'alta': 'bg-red-100 text-red-800',
    'media': 'bg-yellow-100 text-yellow-800',
    'baja': 'bg-green-100 text-green-800',
    'pendiente': 'bg-yellow-100 text-yellow-800',
    'en proceso': 'bg-blue-100 text-blue-800',
    'completado': 'bg-green-100 text-green-800',
    'cancelado': 'bg-red-100 text-red-800'
  };
  return statusColors[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
};

/**
 * Generate chart data from records
 * @param {Array} records - Array of records with dates
 * @param {string} valueKey - Key to use for values
 * @returns {Array} Formatted data for charts
 */
export const generateChartData = (records, valueKey) => {
  return records.reduce((acc, record) => {
    const date = format(new Date(record.date), 'MMM dd', { locale: es });
    const existing = acc.find(item => item.date === date);
    if (existing) {
      existing.value += record[valueKey];
    } else {
      acc.push({ date, value: record[valueKey] });
    }
    return acc;
  }, []);
};

/**
 * Filter and sort records
 * @param {Array} records - Array of records
 * @param {Object} filters - Filter criteria
 * @param {Object} sort - Sort criteria
 * @returns {Array} Filtered and sorted records
 */
export const filterAndSortRecords = (records, filters = {}, sort = {}) => {
  let result = [...records];

  // Apply filters
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      result = result.filter(record => 
        record[key].toLowerCase().includes(value.toLowerCase())
      );
    }
  });

  // Apply sorting
  if (sort.key) {
    result.sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];
      return sort.direction === 'asc' ? 
        (aVal > bVal ? 1 : -1) : 
        (aVal < bVal ? 1 : -1);
    });
  }

  return result;
};

/**
 * Validate form data
 * @param {Object} data - Form data to validate
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} Validation result
 */
export const validateFormData = (data, requiredFields) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!data[field] || data[field].trim() === '') {
      errors[field] = 'Este campo es requerido';
    }
  });

  // Email validation
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Email inválido';
  }

  // Phone validation
  if (data.phone && !/^\+?[\d\s-]{8,}$/.test(data.phone)) {
    errors.phone = 'Teléfono inválido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Generate summary statistics
 * @param {Array} records - Array of records
 * @returns {Object} Summary statistics
 */
export const generateSummaryStats = (records) => {
  return records.reduce((stats, record) => {
    stats.total++;
    if (record.status === 'completed') stats.completed++;
    if (record.priority === 'high') stats.highPriority++;
    stats.totalValue += parseFloat(record.value || 0);
    return stats;
  }, {
    total: 0,
    completed: 0,
    highPriority: 0,
    totalValue: 0
  });
};

/**
 * Format large numbers with K/M suffix
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatLargeNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};
