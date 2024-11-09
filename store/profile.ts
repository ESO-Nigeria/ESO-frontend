import axios from "axios";
import { defineStore } from "pinia";
// import { useToast } from '~/components/ui/toast';
import { apiGetRequest } from "~/composables/api";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: null,
    token: null,
    org_profile: {},
    submittingForm: false,
    loadingProfile: {},
    loading:false,
    certificates: [],
    links:[],
    events:[],
    event:{},
    programs:[],
    program: {},
    ESOs: [],
    singleESO: {},
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
    async getProfile(id: any){
      this.loadingProfile = true
      try{
        const response = await apiGetRequest(`/api/profiles/`);
        this.profile = response.data?.results[0]
        this.org_profile = response.data?.results[0]
        this.loadingProfile = false
        console.log('response.data', response.data?.results[0], )
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async createProfile(body: any) {
      try {
        const response = await apiPostRequestForFormData(`/api/profiles/`, body);
        // this.submitting = false
        console.log("response", response.data);
        this.profile = response.data
        // setItem('profile',JSON.stringify(response.data))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async uploadCertificates(id: any,body: any) {
      try {
        const response = await apiPostRequestForFormData(`/api/certificates/`, body);
        // this.submitting = false
        console.log("response", response.data);
        // this.profile = response.data.data
        // setItem('profile',JSON.stringify(response.data.data))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async getCertificates(){
      this.loadingProfile = true
      try{
        const response = await apiGetRequest(`/api/certificates`);
        this.certificates = response.data
        this.loadingProfile = false
        console.log('response.data', response.data, this.profile)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async socialLinks(body: any) {
      try {
        const response = await apiPostFormRequest(`/api/social-links/`, body);
        this.links = response.data.data
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async getLinks(){
      this.loadingProfile = true
      try{
        const response = await apiGetRequest(`/api/social-links/`);
        this.links = response.data
        this.loadingProfile = false
        console.log('response.data', response.data, this.profile)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getEvents(){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/events/` );
        // this.links = response.data
        this.events = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleEvents(id: any){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/events/${id}`);
        // this.links = response.data
        this.event = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getProgrammes(){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/programs/?page=`);
        // this.links = response.data
        this.programs = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleProgramme(id: any){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/programs/${id}`);
        // this.links = response.data
        this.program = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getESOs(){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/profiles/`);
        // this.links = response.data
        this.ESOs = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleESO(id: any){
      this.loading = true
      try{
        const response = await apiGetUnRestrictedRequest(`/api/profiles/${id}`);
        // this.links = response.data
        this.singleESO = response.data
        this.loading = false
        console.log('response.data', response.data)
        return { data: response, error: response.error };
      }catch (error){
        return { data: null, error: "Unknown error" }
      }
    },
  },
});
