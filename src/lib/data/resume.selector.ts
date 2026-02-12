import resumeVisibleData from "./resume.visible"

const sectionOrder = ['personal', 'contact', 'summary', 'education'] as const;

export const ResumeSectionBuilder = (): ResumeVisibleSectionMeta[] => {
    const data: ResumeVisibleSectionMeta[] = []
    sectionOrder.map((key) => {
        const section = resumeVisibleData[key]
        const sectionData: ResumeVisibleSectionMeta = {
            id: section.id,
            section_title: section.title,
            section_icon: section.icon,
            is_complete: section.complete,
            visible: section.visible,
        }
        data.push(sectionData)
    })

    return data
}

export const ResumeData = (): ResumeSectionMeta[] => {
    const data: ResumeSectionMeta[] = []
    sectionOrder.map((key) => {
        const section = resumeVisibleData[key]
        const sectionData: ResumeSectionMeta = {
            id: section.id,
            title: section.title,
            description: section.description,
            icon: section.icon,
            complete: section.complete,
            visible: section.visible,
        }
        data.push(sectionData)
    })

    return data
}

export const ResumeSectionFields = (): Field[] => {
    const data: Field[] = []
    sectionOrder.map((key) => {
        const section = resumeVisibleData[key]
        const sectionData: Field[] | undefined = section?.fields?.map((field) => ({
            sectionId: section.id,
            id: field.id,
            name: field.name,
            label: field.label,
            placeholder: field.placeholder,
            type: field.type,
            required: field.required,
        }))
        if (sectionData) {
            data.push(...sectionData)
        }
    })

    return data
}
