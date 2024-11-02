import axios from 'axios';
import { defineStore } from 'pinia';
// import { useToast } from '~/components/ui/toast';
import { apiGetRequest } from '~/composables/api';

export const useAuthStore =  defineStore('auth', {
  state: () => ({
    user: null,
    token:  null,

  }),
  getters:{
    getToken(state) {
      // Check if localStorage is available (client-side)
      if (process.client) {
        const storedToken = getItem('token');
        if (storedToken && storedToken !== undefined) {
          this.token = JSON.parse(storedToken);
        }
      }
      return state.token
    },
  },
  actions: {
    async login( body: any  ) {
    try {
      const response =  await apiPostRequest('/auth/token/login',  body ); 
      // this.submitting = false
      console.log('response', response.data.auth_token)
      setItem('token', JSON.stringify(response.data.auth_token))
      return { data: response, error: response.error  };
    } catch (error) {
      return { data: null, error: error ?? 'Unknown error' };
    }
    },
    async register(body: object){
      try {
        const response =  await apiPostRequest('/auth/users/',  body ); 
        // this.submitting = false
        console.log('response', response)
        // setItem('token', JSON.stringify(response.data.auth_token))
        return { data: response, error: response.error  };
      } catch (error) {
        return { data: null, error: error ?? 'Unknown error' };
      }
    }
  }
})
