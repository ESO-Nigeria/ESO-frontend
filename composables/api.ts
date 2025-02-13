import axios from 'axios';
import { useAuthStore } from "~/store/auth";

interface ApiResponse {
  data: any; // Adjust this type according to your actual API response structure
  error: any; // Adjust this type according to your actual error response structure
}

export const apiGetRequest = async (url: string): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  const storedToken = getItem("token");
  try {
    const response = await axios.get(baseURL + url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + JSON.parse(storedToken), // Add your authorization header here
      },
    });
    
    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiGetUnRestrictedRequest = async (url: string): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  const storedToken = getItem("token");
  try {
    const response = await axios.get(baseURL + url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(storedToken), // Add your authorization header here
      },
    });
    
    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};
export const apiPostRequest = async (url: string, body: object, options: { auth: boolean } = { auth: true }): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.post(baseURL + url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token, // Add your authorization header here
      },
    });
    return { data: response, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiPostFormRequest = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.post(baseURL + url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token, // Add your authorization header here
      },
    });
    return { data: response, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiPostRequestForFormData = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.post(baseURL + url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + token, // Add your authorization header here
      },
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiPutRequest = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.put(baseURL + url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token, // Add your authorization header here
      },
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiPatchRequest = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.patch(baseURL + url, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token, // Add your authorization header here
      },
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiPatchRequestForFormData = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.patch(baseURL + url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'token ' + token, // Add your authorization header here
      },
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};

export const apiDeleteRequest = async (url: string, body: object): Promise<ApiResponse> => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { getToken } = storeToRefs(useAuthStore());
  const token = getToken.value;
  
  try {
    const response = await axios.delete(baseURL + url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token, // Add your authorization header here
      },
      data: body
    });

    return { data: response.data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data ?? 'Unknown error' };
  }
};