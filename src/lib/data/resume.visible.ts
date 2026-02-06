import { v4 as uuidv4 } from "uuid";

const resumeVisibleData: Record<string, ResumeSectionMeta> = {
    personal: {
        id: uuidv4(),
        title: "Personal Info",
        description:
            "Basic personal details including your name and professional headline that define your identity and first impression.",
        icon: "FaUserGraduate",
        complete: false,
        visible: true,
        fields: [
            {
                id: uuidv4(),
                name: "first_name",
                label: "First Name",
                placeholder: "Type Here",
                type: "text",
                required: true,
                icon: "TiHome",
            },
            {
                id: uuidv4(),
                name: "last_name",
                label: "Last Name",
                placeholder: "Type Here",
                type: "text",
                required: true,
                icon: "TiHome",
            },
            {
                id: uuidv4(),
                name: "middle_name",
                label: "Middle Name",
                placeholder: "Type Here",
                type: "text",
                required: false,
                icon: "TiHome",
            },
            {
                id: uuidv4(),
                name: "headline",
                label: "Professional Headline",
                placeholder: "Frontend Developer | React | Next.js",
                type: "text",
                required: false,
                icon: "TiHome",
            },
        ],
    },

    contact: {
        id: uuidv4(),
        title: "Contact Info",
        description:
            "Communication details such as email, phone number, and location used by recruiters to reach you.",
        icon: "MdPermContactCalendar",
        complete: false,
        visible: true,
        fields: [
            {
                id: uuidv4(),
                name: "email",
                label: "Email",
                placeholder: "someone@email.com",
                type: "email",
                required: true,
                icon: "MdPermContactCalendar",
            },
            {
                id: uuidv4(),
                name: "phone",
                label: "Phone Number",
                placeholder: "Type Here",
                type: "text",
                required: false,
                icon: "MdPermContactCalendar",
            },
            {
                id: uuidv4(),
                name: "location",
                label: "Location",
                placeholder: "City, Country",
                type: "text",
                required: false,
                icon: "MdPermContactCalendar",
            },
        ],
    },

    summary: {
        id: uuidv4(),
        title: "Professional Summary",
        description:
            "A short overview highlighting your experience, strengths, and career goals in a concise narrative.",
        icon: "MdBusinessCenter",
        complete: false,
        visible: true,
        fields: [
            {
                id: uuidv4(),
                name: "summary",
                label: "Summary",
                placeholder: "Brief overview of your professional background",
                type: "textarea",
                icon: "MdBusinessCenter",
            },
        ],
    },

    education: {
        id: uuidv4(),
        title: "Education",
        description:
            "Academic background including degrees, institutions, and graduation dates that support your qualifications.",
        icon: "FaGraduationCap",
        complete: false,
        visible: true,
        fields: [
            {
                id: uuidv4(),
                name: "degree",
                label: "Degree",
                placeholder: "Type Here",
                type: "text",
                icon: "FaGraduationCap",
            },
            {
                id: uuidv4(),
                name: "institution",
                label: "Institution",
                placeholder: "Type Here",
                type: "text",
                icon: "FaGraduationCap",
            },
            {
                id: uuidv4(),
                name: "graduation_date",
                label: "Graduation Date",
                type: "date",
                icon: "FaGraduationCap",
            },
        ],
    },

    experience: {
        id: uuidv4(),
        title: "Work Experience",
        description:
            "Details of your previous roles, responsibilities, and accomplishments in different companies.",
        icon: "MdWork",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "job_title",
                label: "Job Title",
                placeholder: "Frontend Developer",
                type: "text",
                icon: "MdWork",
            },
            {
                id: uuidv4(),
                name: "company",
                label: "Company Name",
                placeholder: "Company Name",
                type: "text",
                icon: "MdWork",
            },
            {
                id: uuidv4(),
                name: "start_date",
                label: "Start Date",
                type: "date",
                icon: "MdWork",
            },
            {
                id: uuidv4(),
                name: "end_date",
                label: "End Date",
                type: "date",
                icon: "MdWork",
            },
            {
                id: uuidv4(),
                name: "responsibilities",
                label: "Responsibilities",
                placeholder: "Describe your key responsibilities",
                type: "textarea",
                icon: "MdWork",
            },
        ],
    },

    skills: {
        id: uuidv4(),
        title: "Skills",
        description:
            "Key professional skills and technical expertise relevant to your career.",
        icon: "FaTools",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "skills",
                label: "Skills",
                placeholder: "e.g., React, Node.js, Tailwind CSS",
                type: "tags",
                icon: "FaTools",
            },
        ],
    },

    projects: {
        id: uuidv4(),
        title: "Projects",
        description:
            "Important projects demonstrating your abilities, contributions, and impact.",
        icon: "FaProjectDiagram",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "project_name",
                label: "Project Name",
                placeholder: "Project Name",
                type: "text",
                icon: "FaProjectDiagram",
            },
            {
                id: uuidv4(),
                name: "project_desc",
                label: "Project Description",
                placeholder: "Describe the project briefly",
                type: "textarea",
                icon: "FaProjectDiagram",
            },
            {
                id: uuidv4(),
                name: "project_link",
                label: "Project Link",
                placeholder: "GitHub or live link",
                type: "text",
                icon: "FaProjectDiagram",
            },
        ],
    },

    certificates: {
        id: uuidv4(),
        title: "Certificates",
        description: "Professional certifications or courses you have completed.",
        icon: "FaCertificate",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "certificate_name",
                label: "Certificate Name",
                placeholder: "Certificate Name",
                type: "text",
                icon: "FaCertificate",
            },
            {
                id: uuidv4(),
                name: "certificate_issuer",
                label: "Issuer",
                placeholder: "Issuer Name",
                type: "text",
                icon: "FaCertificate",
            },
            {
                id: uuidv4(),
                name: "certificate_date",
                label: "Date",
                type: "date",
                icon: "FaCertificate",
            },
        ],
    },

    languages: {
        id: uuidv4(),
        title: "Languages",
        description: "Languages you are proficient in and your level of expertise.",
        icon: "FaLanguage",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "language_name",
                label: "Language",
                placeholder: "Language Name",
                type: "text",
                icon: "FaLanguage",
            },
            {
                id: uuidv4(),
                name: "proficiency",
                label: "Proficiency",
                placeholder: "e.g., Beginner, Intermediate, Fluent",
                type: "text",
                icon: "FaLanguage",
            },
        ],
    },

    custom: {
        id: uuidv4(),
        title: "Custom Section",
        description:
            "Any additional information or personalized section you want to include in your resume.",
        icon: "FaRegEdit",
        complete: false,
        visible: false,
        fields: [
            {
                id: uuidv4(),
                name: "custom_title",
                label: "Title",
                placeholder: "Section Title",
                type: "text",
                icon: "FaRegEdit",
            },
            {
                id: uuidv4(),
                name: "custom_desc",
                label: "Description",
                placeholder: "Section Description",
                type: "textarea",
                icon: "FaRegEdit",
            },
        ],
    },
};

export default resumeVisibleData;
