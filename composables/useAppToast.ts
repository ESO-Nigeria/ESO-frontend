import { toast } from 'vue-sonner'

export const useAppToast = () => {
  const parseError = (error: any): string => {
    if (!error) return 'An unexpected error occurred';
    if (typeof error === 'string') return error;

    if (typeof error === 'object') {
      // Check for common error properties
      if (error.detail && typeof error.detail === 'string') return error.detail;
      if (error.message && typeof error.message === 'string') return error.message;
      if (error.error && typeof error.error === 'string') return error.error;
      
      // Handle arrays of error messages (e.g., { "error": ["message1", "message2"] })
      if (error.error && Array.isArray(error.error)) return error.error.join(' ');

      // Handle field-specific errors often returned by Django Rest Framework
      const messages: string[] = [];
      for (const [key, value] of Object.entries(error)) {
        // Skip some keys if necessary or handle non-field errors
        if (key === 'non_field_errors') {
          if (Array.isArray(value)) messages.push(value.join(' '));
          else messages.push(String(value));
          continue;
        }

        // Format field name (e.g., "first_name" -> "First name")
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
        
        if (Array.isArray(value)) {
          messages.push(`${fieldName}: ${value.join(' ')}`);
        } else if (typeof value === 'string') {
          messages.push(`${fieldName}: ${value}`);
        } else if (typeof value === 'object' && value !== null) {
          // Recursive call for nested objects if needed, or just stringify
          messages.push(`${fieldName}: ${JSON.stringify(value)}`);
        }
      }

      return messages.length > 0 ? messages.join('\n') : 'An unexpected error occurred';
    }

    return 'An unexpected error occurred';
  };

  const showError = (err: any, fallback?: string) => {
    const message = parseError(err);
    toast.error(message || fallback || 'An error occurred');
  };

  const showSuccess = (message: string) => {
    toast.success(message);
  };

  const showInfo = (message: string) => {
    toast.info(message);
  };

  const showWarning = (message: string) => {
    toast.warning(message);
  };

  return {
    showError,
    showSuccess,
    showInfo,
    showWarning,
    parseError
  };
};
