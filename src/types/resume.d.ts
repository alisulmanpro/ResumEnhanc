export { }

declare global {

    interface FieldData {
        id: string | number;
        title: string;
        type?: string;
        placeholder?: string;
        slug?: string;
        mandatory?: boolean;
        divider?: boolean;
        m_show?: boolean;
        current?: boolean;
        prefixIcon?: import("react-icons").IconType;
    }

    interface AddMore {
        title: string;
        fields: FieldData[];
    }


    interface MenuData {
        id: number;
        title: string;
        icon:string;
        description: string;
        completed: boolean;
        addsec: boolean;
        addmore?: AddMore[];
        fields?: FieldData[];
    }

    // interface ResumeData {
    //     title: string;

    //     personal: {
    //         first_name: string;
    //         last_name: string;
    //         headline: string;
    //         summary?: string;
    //     };

    //     contact: {
    //         phone_number: string;
    //         email_address: string;
    //         city: string;
    //         country: string;
    //         linkedin_url?: string;
    //         github_url?: string;
    //         portfolio_url?: string;
    //     };

    //     workExperience: Array<{
    //         job_title: string;
    //         company: string;
    //         location?: string;
    //         start_date: string;
    //         end_date?: string;
    //         description?: string;
    //     }>;

    //     education: Array<{
    //         degree: string;
    //         institution: string;
    //         location?: string;
    //         start_year?: string;
    //         graduation_year: string;
    //         gpa?: string;
    //     }>;

    //     skills: Array<{
    //         skill: string;
    //         proficiency?: string;
    //     }>;

    //     projects: Array<{
    //         project_title: string;
    //         description: string;
    //         technologies_used?: string;
    //         live_link?: string;
    //         source_code?: string;
    //     }>;
    // }
}