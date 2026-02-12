export { }

declare global {
    type FieldType =
        | "text"
        | "email"
        | "textarea"
        | "date"
        | "number"
        | "url"
        | "tags"

    type ResumeIconKey =
        | "FaUserGraduate"
        | "MdPermContactCalendar"
        | "MdBusinessCenter"
        | "FaGraduationCap"
        | "FaCogs"
        | "BsKanbanFill"
        | "LuLanguages"
        | "MdBuild"
        | "MdVerified"

    interface Field {
        sectionId?: string
        id: string
        name: string
        label: string
        placeholder?: string
        type: FieldType
        required?: boolean
        icon?: string
    }

    interface ResumeSectionMeta {
        id: string
        title: string
        description: string
        icon: string
        complete: boolean
        visible: boolean
        fields?: Field[]
    }

    interface ResumeVisibleSectionMeta {
        id: string
        section_title: string
        section_icon: string
        is_complete: boolean
        visible: boolean
    }

    interface ResumeVisibleStoreProps {
        sections: ResumeVisibleSectionMeta[]
        sectionData: ResumeSectionMeta[]
        resumeSectionFields: Field[]
        completedSectionIds: string[]
        activeId: string
        preActiveId: string | null
        hydrated: boolean
        setCompletedId: (id: string) => void
        setActiveId: (id: string) => void
        setHydrated: (hydrated: boolean) => void
        setPreActiveId: (id: string | null) => void
    }

    interface ResumeInfo {
        id: string
        resume_title: string
        resume_data: Record<string, any>
    }

    interface ResumeInfoProps {
        resumeInfo: ResumeInfo[] | []
        activeResumeId: string | null
        resume_title: string | "untitled"
        createResume: (title: string) => string
        updateResumeTitle: (id: string, title: string) => void
        setResumeName: (name: string) => void
        setActiveResume: (id: string) => void
        upsertSection: (resumeId: string, sectionKey: string, data: any) => void
    }
}