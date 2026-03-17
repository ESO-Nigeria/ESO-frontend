import { toast } from 'vue-sonner'
import { markRaw, h } from 'vue'
import OnboardingToast from '~/components/layouts/OnboardingToast.vue'

export const useAppToast = () => {
  const parseError = (error: any): string => {
    if (!error) return 'An unexpected error occurred';
    
    // Handle string errors, check for HTML which usually indicates a server error page
    const containsHtml = (val: string) => {
      const trimmed = val.trim();
      return trimmed.startsWith('<!doctype html>') || 
             trimmed.startsWith('<html') || 
             val.includes('<html>') || 
             val.includes('</html>') ||
             val.includes('Server Error (500)');
    };

    if (typeof error === 'string') {
      if (containsHtml(error)) {
        return 'Our server encountered an issue (500). Please try again in a few moments.';
      }
      return error;
    }

    if (typeof error === 'object' && error !== null) {
      // Check for common error properties
      const extractMessage = (obj: any): string | null => {
        if (!obj) return null;
        if (typeof obj === 'string') return containsHtml(obj) ? 'Server error' : obj;
        if (obj.detail && typeof obj.detail === 'string') return containsHtml(obj.detail) ? 'Server error' : obj.detail;
        if (obj.message && typeof obj.message === 'string') return containsHtml(obj.message) ? 'Server error' : obj.message;
        if (obj.error && typeof obj.error === 'string') return containsHtml(obj.error) ? 'Server error' : obj.error;
        return null;
      };

      const topMsg = extractMessage(error);
      if (topMsg) return topMsg;
      
      // Handle arrays of error messages (e.g., { "error": ["message1", "message2"] })
      if (error.error && Array.isArray(error.error)) {
        return error.error
          .map((e: any) => typeof e === 'string' && containsHtml(e) ? 'Server error' : String(e))
          .join(' ');
      }

      // Handle field-specific errors often returned by Django Rest Framework
      const messages: string[] = [];
      for (const [key, value] of Object.entries(error)) {
        // Skip common meta keys or internal axios properties
        if (['status', 'statusText', 'headers', 'config', 'request', 'name', 'code', 'stack'].includes(key)) continue;

        if (key === 'non_field_errors') {
          if (Array.isArray(value)) messages.push(value.join(' '));
          else messages.push(String(value));
          continue;
        }

        // Format field name (e.g., "first_name" -> "First name")
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
        
        if (Array.isArray(value)) {
          const valMsgs = value.map(v => (typeof v === 'string' && containsHtml(v)) ? 'Unexpected response' : String(v));
          messages.push(`${fieldName}: ${valMsgs.join(' ')}`);
        } else if (typeof value === 'string') {
          const valMsg = containsHtml(value) ? 'Unexpected response' : value;
          messages.push(`${fieldName}: ${valMsg}`);
        } else if (value && typeof value === 'object') {
           const nestedMsg = extractMessage(value) || 'Invalid value';
           messages.push(`${fieldName}: ${nestedMsg}`);
        }
      }

      const finalMessage = messages.length > 0 ? messages.join('\n') : 'An unexpected server response was received.';
      return finalMessage.includes('[object Object]') ? 'An error occurred. Please check your inputs.' : finalMessage;
    }

    return 'An unexpected error occurred';
  };

  const showError = (err: any, fallback?: string) => {
    try {
      const message = parseError(err);
      const finalMsg = message || fallback || 'An error occurred';
      toast.error(finalMsg);
    } catch (e) {
      toast.error(fallback || 'An unexpected error occurred');
    }
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

  const showOnboarding = () => {
    toast.custom((t) => h(OnboardingToast, { onDismiss: () => toast.dismiss(t), onClose: () => toast.dismiss(t) }), {
      duration: 10000,
      position: 'bottom-right'
    });
  };

  return {
    showError,
    showSuccess,
    showInfo,
    showWarning,
    showOnboarding,
    parseError
  };
};
