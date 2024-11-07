
export enum ApplicationStatus {
    ONGOING = 'ONGOING',
    CLOSED = 'CLOSED'
}

export interface Programme {
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

export interface ProgrammeDetails {
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
