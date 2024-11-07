import { defineStore } from "pinia";
import { toast } from 'vue-sonner';

enum ApplicationStatus {
    ONGOING = 'ONGOING',
    CLOSED = 'CLOSED'
}

interface Programme {
    title: string;
    description: string;
    program_image: string;
    brief_details: string;
    sectors: number[];
    financial_supports: number[];
    non_financial_supports: number[];
    target_audience: number[];
    application_status?: ApplicationStatus;
}

interface ProgrammeDetails {
    number_of_participants: number | string;
    amount: number | string;
    start_date: string;
    end_date: string;
    application_deadline: string;
    city: string;
    country: string;
    program_mode: 'ONLINE' | 'INPERSON' | 'HYBRID';
    registration_required: boolean;
    registration_link: string;
    website_link: string;
    application_status?: ApplicationStatus;
    program: number | string;
}

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
            "city": "",
            "country": "",
            "program_mode": "HYBRID",
            "registration_required": false,
            "registration_link": "",
            "website_link": "",
            "program": ''
        } as ProgrammeDetails,
        image: null,
        loading: false,
        error: null
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
                city: '',
                country: '',
                program_mode: 'HYBRID',
                registration_required: false,
                registration_link: '',
                website_link: '',
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
                const payload = body
                delete payload?.program_image // TODO: Remove this later
                const response = await apiPostRequest(`/api/programs/`, payload);
                if (response.error) {
                    toast.error(response?.error?.error?.[0] || "Unable to create programme, please try again")
                }
                return { data: response, error: response.error };
            } catch (error: any) {
                toast.error(error?.response?.data?.error?.[0] || "Unable to create programme, please try again")
                return { data: null, error: error ?? "Unknown error" };
            }
        },
        async CREATE_PROGRAMME_DETAILS(body: any) {
            try {
                const response = await apiPostRequest(`/api/programdetails/`, body);
                if (response.error) {
                    toast.error(response?.error?.error?.[0] || "Unable to create programme details, please try again")
                }
                return { data: response, error: response.error };
            } catch (error: any) {
                toast.error(error?.response?.data?.error?.[0] || "Unable to create programme details, please try again")
                return { data: null, error: error ?? "Unknown error" };
            }
        }
    },
});
