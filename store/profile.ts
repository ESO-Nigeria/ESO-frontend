import { apiGetRequest } from "~/composables/api";

export interface SocialLink {
  id: number;
  platform: string;
  url: string | null;
}

export interface User {
  email: string;
  organization_name: string;
  organization_type: string;
  whatsapp_number: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}

export interface Profile {
  id: number;
  user: User;
  approval_status: string;
  social_links: SocialLink[];
  logo_url: string;
  number_of_years_in_operation: number;
  total_ratings: number;
  average_rating: number;
  logo?: string;
  country: string;
  state: string;
  city: string;
  phone_number: string | null;
  address: string;
  services: string;
  company_phone: string;
  description: string;
  created_at: string;
  updated_at: string;
  sectors: number[];
}

interface ProfileState {
  profile: Profile | null;
  token: string | null;
  org_profile: Profile | Record<string, unknown>;
  submittingForm: boolean;
  loadingProfile: boolean;
  loading: boolean;
  certificates: Record<string, unknown>[];
  links: { results?: SocialLink[] } | Record<string, unknown>;
  events: Record<string, unknown>[];
  event: Record<string, unknown>;
  programs: Record<string, unknown>[];
  program: Record<string, unknown>;
  ESOs: Record<string, unknown>[];
  singleESO: Record<string, unknown>;
  articles: Record<string, unknown>;
  loadingArticles: boolean;
  singleArticles: Record<string, unknown>;
  faqs: Record<string, unknown>[];
  faq: Record<string, unknown>;
  loadingFaqs: boolean;
  galleries: Record<string, unknown>[];
  gallery: Record<string, unknown>;
  loadingGalleries: boolean;
  reports: Record<string, unknown>[];
  report: Record<string, unknown>;
  loadingReports: boolean;
}

export const useProfileStore = defineStore("profile", {
  state: (): ProfileState => ({
    profile: null,
    token: null,
    org_profile: {},
    submittingForm: false,
    loadingProfile: false,
    loading: false,
    certificates: [],
    links: {},
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
    async getProfile() {
      this.loadingProfile = true
      try {
        const response = await apiGetRequest(`/api/profiles/`);
        this.profile = response.data?.results[0]
        this.org_profile = response.data?.results[0]
        this.loadingProfile = false
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async createProfile(body: FormData | Record<string, unknown>) {
      try {
        const response = await apiPostRequestForFormData(`/api/profiles/`, body);
        // this.submitting = false
        this.profile = response.data
        // setItem('profile',JSON.stringify(response.data))
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async updateProfile(id: string | number, body: Record<string, unknown>) {
      try {
        const response = await apiPutRequest(`/api/profiles/${id}/`, body);
        // this.submitting = false
        this.profile = response.data
        // setItem('profile',JSON.stringify(response.data))
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: error ?? "Unknown error" };
      }
    },
    async uploadCertificates(id: string | number, body: FormData) {
      try {
        const response = await apiPostRequestForFormData(`/api/certificates/`, body);
        // this.submitting = false
        // this.profile = response.data.data
        // setItem('profile',JSON.stringify(response.data.data))
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async socialLinks(body: Record<string, unknown>) {
      try {
        const response = await apiPostFormRequest(`/api/social-links/`, body);
        this.links = response.data
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleEvents(id: string | number) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/events/${id}`);
        // this.links = response.data
        this.event = response.data
        this.loading = false
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getProgrammes(params: Record<string, string | number | undefined> = {}) {
      this.loading = true
      try {
        const queryParams = new URLSearchParams()
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            queryParams.append(key, String(value));
          }
        });
        const queryString = queryParams.toString();
        const response = await apiGetUnRestrictedRequest(`/api/programs/${queryString ? '?' + queryString : ''}`);
        this.programs = response.data
        this.loading = false
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleProgramme(id: string | number) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/programs/${id}`);
        // this.links = response.data
        this.program = response.data
        this.loading = false
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getESOs(organization_types?: string, sectors?: string, user__organization_name?: string) {
      this.loading = true
      try {
        const params = new URLSearchParams();
        if (organization_types) params.append('user__organization_type', organization_types);
        if (sectors) params.append('sectors', sectors);
        if (user__organization_name) params.append('user__organization_name', user__organization_name);
        
        const queryString = params.toString();
        const response = await apiGetUnRestrictedRequest(`/api/profiles/${queryString ? '?' + queryString : ''}`);
        this.ESOs = response.data
        this.loading = false
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleESO(id: string | number) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/profiles/${id}`);
        // this.links = response.data
        this.singleESO = response.data
        this.loading = false
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
      } catch (error) {
        return { data: null, error: "Unknown error" }
      }
    },
    async getSingleArticles(id: string | number) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/articles/${id}`);
        this.singleArticles = response.data
        this.loading = false
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
      } catch (error) {
        this.loadingGalleries = false
        return { data: null, error: "Unknown error" }
      }
    },

    async getSingleGallery(id: string | number) {
      this.loading = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/galleries/${id}`);
        this.gallery = response.data
        this.loading = false
        return { data: response.data, error: response.error };
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
        return { data: response.data, error: response.error };
      } catch (error) {
        this.loadingReports = false
        return { data: null, error: "Unknown error" }
      }
    },

    async getSingleReport(id: string | number) {
      this.loadingReports = true
      try {
        const response = await apiGetUnRestrictedRequest(`/api/reports/${id}/`);
        this.report = response.data
        this.loadingReports = false
        return { data: response.data, error: response.error };
      } catch (error) {
        this.loadingReports = false
        return { data: null, error: "Unknown error" }
      }
    },

  },
});