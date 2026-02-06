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
        resumeSectionFields: ResumeSectionFields[]
        activeId: string
        hydrated: boolean
        setActiveId: (id: string) => void
        setHydrated: (hydrated: boolean) => void
    }


}