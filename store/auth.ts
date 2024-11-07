import axios from "axios";
import { defineStore } from "pinia";
// import { useToast } from '~/components/ui/toast';
import { apiGetRequest } from "~/composables/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    loadingUser: false
  }),
  getters: {
    getToken(state) {
      // Check if localStorage is available (client-side)
      if (process.client) {
        const storedToken = getItem("token");
        if (storedToken && storedToken !== undefined) {
          this.token = JSON.parse(storedToken);
        }
      }
      return state.token;
    },
  },
  actions: {
    async login(body: any) {
      try {
        const response = await apiPostRequest("/auth/token/login", body, { auth: false });
        // this.submitting = false
        console.log("response", response.data.data.auth_token);
        setItem("token", JSON.stringify(response.data.data.auth_token));
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async register(body: object) {
      try {
        const response = await apiPostRequest("/auth/users/", body);
        // this.submitting = false
        console.log("response", response);
        // setItem('token', JSON.stringify(response.data.auth_token))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    logUserOut() {
      // this.myprofile = null;
      // this.token = '';
      removeItem("myprofile");
      removeItem("token");
      // this.clearAuthDetails()
    },
    async reset(body: any) {
      try {
        const response = await apiPostRequest(
          "/auth/users/reset_password/",
          body
        );
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async email_verified(body: any) {
      try {
        // /auth/users/reset_password/
        const response = await apiPostRequest("/auth/users/activation/", body);
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async change_password(body: any) {
      try {
        // /auth/users/reset_password/
        const response = await apiPostRequest(
          "/auth/users/reset_password_confirm/",
          body
        );
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async getUser(){
      this.loadingUser = true
      try{
        const response = await apiGetRequest("/auth/users/me/");
        this.user = response.data
        this.loadingUser = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    }
  },
});
