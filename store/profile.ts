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
    loading: false,
    certificates: [],
    links: [],
    events: [],
    event: {},
    programs: [],
    program: {},
    ESOs: [],
    singleESO: {},
    articles: {},
    loadingArticles: false,
    singleArticles: {},
    // Add faqs and galleries state
    faqs: [],
    faq: {},
    loadingFaqs: false,
    galleries: [],
    gallery: {},
    loadingGalleries: false,
    reports: [],
    report: {},
    loadingReports: false
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
    async getProfile(id: any) {
      this.loadingProfile = true
      try {
        const response = await apiGetRequest(`/api/profiles/`);
        this.profile = response.data?.results[0]
        this.org_profile = response.data?.results[0]
        this.loadingProfile = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async createProfile(body: any) {
      try {
        const response = await apiPostRequestForFormData(`/api/profiles/`, body);
        // this.submitting = false
        this.profile = response.data
        // setItem('profile',JSON.stringify(response.data))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async updateProfile(id: any, body: any) {
      try {
        const response = await apiPutRequest(`/api/profiles/${id}/`, body);
        // this.submitting = false
        this.profile = response.data
        // setItem('profile',JSON.stringify(response.data))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async uploadCertificates(id: any, body: any) {
      try {
        const response = await apiPostRequestForFormData(`/api/certificates/`, body);
        // this.submitting = false
        // this.profile = response.data.data
        // setItem('profile',JSON.stringify(response.data.data))
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async getCertificates() {
      this.loadingProfile = true
      try {
        const response = await apiGetRequest(`/api/certificates`);
        this.certificates = response.data
        this.loadingProfile = false
        return { data: response, error: response.error };
      } catch (error) {
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
    async getLinks() {
      this.loadingProfile = true
      try {
        const response = await apiGetRequest(`/api/social-links/`);
        this.links = response.data
        this.loadingProfile = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getEvents(title: string | undefined) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/events/?title=${title || ''}`);
        this.events = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleEvents(id: any) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/events/${id}`);
        // this.links = response.data
        this.event = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getProgrammes(sectors: string | undefined, target_audience: string | undefined, financial_supports: string | undefined, non_financial_supports: string | undefined, title: string | undefined, sort_by: string | undefined, details__amount: string | undefined, page: string | undefined) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/programs/?sectors=${sectors || ''}&target_audience=${target_audience || ''}&financial_supports=${financial_supports || ''}&non_financial_supports=${non_financial_supports || ''}&title=${title || ''}&sort_by=${sort_by || ''}&details__amount=${details__amount || ''}&page=`);
        // this.links = response.data
        this.programs = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleProgramme(id: any) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/programs/${id}`);
        // this.links = response.data
        this.program = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getESOs(organization_types: undefined, sectors: undefined, user__organization_name: undefined) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/profiles/?user__organization_type=${organization_types || ''}&sectors=${sectors || ''}&user__organization_name=${user__organization_name || ''}`);
        // this.links = response.data
        this.ESOs = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleESO(id: any) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/profiles/${id}`);
        // this.links = response.data
        this.singleESO = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getArticles() {
      this.loadingArticles = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/articles/`);
        this.articles = response.data
        this.loadingProfile = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleArticles(id: any) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/articles/${id}`);
        this.singleArticles = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },

    // FAQ Actions
    async getFaqs(search: string | undefined, page: string | undefined) {
      this.loadingFaqs = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/faqs/?search=${search || ''}&page=${page || ''}`);
        this.faqs = response.data
        this.loadingFaqs = false
        return { data: response, error: response.error };
      } catch (error) {
        this.loadingFaqs = false
        return { data: null, error: "Unknown error" }
      }
    },


    // Gallery Actions
    async getGalleries(search: string | undefined, page: string | undefined, category: string | undefined) {
      this.loadingGalleries = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/galleries/?search=${search || ''}&page=${page || ''}&category=${category || ''}`);
        this.galleries = response.data
        this.loadingGalleries = false
        return { data: response, error: response.error };
      } catch (error) {
        this.loadingGalleries = false
        return { data: null, error: "Unknown error" }
      }
    },

    async getSingleGallery(id: any) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/galleries/${id}`);
        this.gallery = response.data
        this.loading = false
        return { data: response, error: response.error };
      } catch (error) {
        this.loading = false
        return { data: null, error: "Unknown error" }
      }
    },

    async getReports() {
      this.loadingReports = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/reports/`);
        this.reports = response.data
        this.loadingReports = false
        return { data: response, error: response.error };
      } catch (error) {
        this.loadingReports = false
        return { data: null, error: "Unknown error" }
      }
    },

    async getSingleReport(id: any) {
      this.loadingReports = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/reports/${id}/`);
        this.report = response.data
        this.loadingReports = false
        return { data: response, error: response.error };
      } catch (error) {
        this.loadingReports = false
        return { data: null, error: "Unknown error" }
      }
    },

  },
});