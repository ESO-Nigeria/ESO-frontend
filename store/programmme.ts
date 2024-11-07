import { defineStore } from "pinia";

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
    number_of_participants: number;
    amount: number;
    start_date: string;
    end_date: string;
    application_deadline: string;
    city: string;
    country: string;
    program_mode: 'HYBRID' // TODO: Add other options
    registration_required: boolean;
    registration_link: string;
    website_link: string;
    application_status?: ApplicationStatus;
    program: number;
}

export const useProgrammeStore = defineStore("programme", {
    persist: true,
    state: () => ({
        programme: {
            "title": "Youth Empowerment Program",
            "description": "A comprehensive program aimed at empowering youth through skills training.",
            "brief_details": "Skills training for unemployed youth in the local community.",
            "program_image": '',
            "sectors": [2, 4],
            "financial_supports": [1],
            "non_financial_supports": [2, 3],
            "target_audience": [1],  // List of IDs for related NonFinancialSupport instances
            "approval_status": "PENDING"
        } as Programme,
        programme_details: {
            "number_of_participants": 23,
            "amount": 1000.00,
            "start_date": "2024-12-01",
            "end_date": "2024-12-10",
            "application_deadline": "2024-11-25",
            "city": "New York",
            "country": "USA",
            "program_mode": "HYBRID",
            "registration_required": true,
            "registration_link": "http://example.com/register",
            "website_link": "http://example.com/program",
            "application_status": "ONGOING",
            "program": 4
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
                return { data: response, error: response.error };
            } catch (error) {
                return { data: null, error: error ?? "Unknown error" };
            }
        },
        async CREATE_PROGRAMME_DETAILS(body: any) {
            try {
                const response = await apiPostRequest(`/api/programdetails/`, body);
                return { data: response, error: response.error };
            } catch (error) {
                return { data: null, error: error ?? "Unknown error" };
            }
        }
    },
});
