import { defineStore } from "pinia";
import { toast } from 'vue-sonner';
import type { Programme, ProgrammeDetails } from "~/types";

export const useProgrammeStore = defineStore("programme", {
    state: () => ({
        programme: {
            "title": "",
            "description": "",
            "brief_details": "",
            "program_image": '',
            "sectors": [],
            "financial_supports": [],
            "non_financial_supports": [],
            "target_audience": [],
        } as Programme,
        programme_details: {
            "number_of_participants": '',
            "amount": '',
            "start_date": "",
            "end_date": "",
            "application_deadline": "",
            "program_mode": "HYBRID",
            "registration_required": false,
            "registration_link": "",
            "website_link": "",
            "location": [],
            "program": ''
        } as ProgrammeDetails,
        image: null,
        loading: false,
        error: null,
        program:{}
    }),
    getters: {
        getCreateProgramme(state) {
            return state.programme
        },
        getCreateProgrammeDetails(state) {
            return state.programme_details
        },
        getLoading(state) {
            return state.loading
        },
        getError(state) {
            return state.error
        },
        getProgrammeImage(state) {
            return state.image
        }
    },
    actions: {
        STORE_PROGRAMME(programme: Programme) {
            this.programme = programme
        },
        STORE_PROGRAMME_DETAILS(programme_details: ProgrammeDetails) {
            this.programme_details = programme_details
        },
        RESET_PROGRAMME(state: any) {
            this.programme = {
                title: '',
                description: '',
                program_image: '',
                brief_details: '',
                sectors: [],
                financial_supports: [],
                non_financial_supports: [],
                target_audience: [],
            }
            this.programme_details = {
                number_of_participants: 0,
                amount: 0,
                start_date: '',
                end_date: '',
                application_deadline: '',
                program_mode: 'HYBRID',
                registration_required: false,
                registration_link: '',
                website_link: '',
                location: [],
                program: 0
            }
        },
        SET_LOADING(loading: boolean) {
            this.loading = loading
        },
        SET_PROGRAMME_IMAGE(image: any) {
            this.image = image
        },
        async CREATE_PROGRAMME(body: any) {
            try {
                const response = await apiPostRequestForFormData(`/api/programs/`, body);
                if (response.error) {
                    toast.error(response?.error?.error || "Unable to create programme, please try again")
                }
                return { data: response, error: response.error };
            } catch (error: any) {
                toast.error(error?.response?.data?.error?.[0] || "Unable to create programme, please try again")
                return { data: null, error: error ?? "Unknown error" };
            }
        },
        async CREATE_PROGRAMME_DETAILS(body: any) {
            try {
                const response = await apiPostFormRequest(`/api/programdetails/`, body);
                if (response.error) {
                    toast.error(response?.error?.error?.[0] || "Unable to create programme details, please try again")
                }
                return { data: response, error: response.error };
            } catch (error: any) {
                toast.error(error?.response?.data?.error?.[0] || "Unable to create programme details, please try again")
                return { data: null, error: error ?? "Unknown error" };
            }
        },
        async GET_PROGRAMMES() {
            try {
                const response = await apiGetRequest(`/api/programs/`);
                return { data: response, error: response.error };
            } catch (error) {
                return { data: null, error: "Unknown error" }
            }
        },
        async getProgramme(id: any){
            try {
                const response = await apiGetRequest(`/api/programs/${id}`);
                this.program = response.data
                return { data: response, error: response.error };
            } catch (error) {
                return { data: null, error: "Unknown error" }
            }
        },
        async updateProgramme(id: any, body: object){
            try {
                const response = await apiPutRequest(`/api/programs/${id}/`, body);
                return { data: response, error: response.error };
            } catch (error) {
                return { data: null, error: "Unknown error" }
            }
        }
    },
});
