"use client"

import ResumeIcon from "@/lib/icons/resume.icons"
import useResumeStore from "@/lib/store/resume_info.store"
import { useSectionsStore } from "@/lib/store/resume_visible.store"
import { FC, useEffect, useState } from "react"
import { Fragment } from "react/jsx-runtime"

const Input: FC<InputProps> = ({ field, value, onChange }) => {
    return (
        <fieldset className="fieldset -space-y-2">
            <legend className="fieldset-legend">{field.label}{field.required && <span className="text-red-500">*</span>}</legend>
            <input
                type={field.type}
                className="input"
                placeholder={field.placeholder}
                value={value}
                onChange={e => onChange(field.name, e.target.value)}
            />
        </fieldset>
    )
}

const Page = () => {
    const { resumeSectionFields, sectionData, activeId, hydrated, setCompletedId, setActiveId } = useSectionsStore()
    const { resumeInfo, activeResumeId, resume_title, createResume, upsertSection } = useResumeStore()
    const [fields, setFields] = useState<Record<string, any>>({})


    useEffect(() => {
        if (!hydrated) return

        const currentResume = resumeInfo.find(r => r.id === activeResumeId)

        const currentFields = resumeSectionFields
            .filter(f => f.sectionId === activeId)
            .reduce((acc, field) => {
                acc[field.name] =
                    currentResume?.resume_data?.[sectionData.find(s => s.id === activeId)?.title ?? ""]?.[field.name] ?? ""
                return acc
            }, {} as Record<string, any>)

        setFields(currentFields)
    }, [activeId, resumeSectionFields, resumeInfo, activeResumeId])


    const handleFieldChange = (name: string, value: string) => {
        setFields((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const activeSection = sectionData.find(
        (section) => section.id === activeId
    )

    const isSectionComplete =
        activeSection?.complete === true ||
        resumeSectionFields
            .filter(
                (field) =>
                    field.sectionId === activeId &&
                    field.required === true)
            .every(
                (field) =>
                    fields[field.name] !== undefined &&
                    String(fields[field.name]).trim() !== ""
            )

    const handleNextClick = (id: string, index: number) => {
        setCompletedId(id)

        let currentResumeId = activeResumeId;

        if (index === 0 && !currentResumeId) {
            currentResumeId = createResume(resume_title);
        }

        const currentSectionTitle = sectionData[index].title

        if (currentResumeId) {
            upsertSection(currentResumeId, currentSectionTitle, fields);
        }

        if (index < sectionData.length - 1) {
            setActiveId(sectionData[index + 1].id)
        }
    }

    if (!hydrated) {
        return (
            <div className="container flex flex-col gap-3 mx-auto">
                <h1 className="flex items-center text-3xl font-bold gap-5">
                    <span className="skeleton shrink-0 size-7.5"></span>
                    <span className="skeleton w-full h-14 rounded-lg"></span>

                </h1>
                <p className="flex flex-col items-center justify-center gap-3 w-full">
                    <span className="skeleton w-full h-3 rounded"></span>
                    <span className="skeleton w-full h-3 rounded"></span>
                </p>
                <div className="divider"></div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="skeleton w-full h-10 rounded"></div>
                    <div className="skeleton w-full h-10 rounded"></div>
                    <div className="skeleton w-full h-10 rounded"></div>
                    <div className="skeleton w-full h-10 rounded"></div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {sectionData && sectionData.map((data, index) => {
                const Icon = ResumeIcon[data.icon as ResumeIconKey]
                if (activeId === data.id) {
                    return (
                        <div className="container mx-auto" key={data.id}>
                            <h1 className="flex items-center text-3xl font-bold gap-5">
                                {Icon && <Icon className="text-3xl" />}
                                {data.title}
                            </h1>
                            <p>{data.description}</p>
                            <div className="divider"></div>
                            <form className="grid grid-cols-2 gap-x-5 gap-y-2">
                                {resumeSectionFields
                                    .filter((field) => field.sectionId === data.id)
                                    .map((field) => {
                                        const currentResume = resumeInfo.find(r => r.id === activeResumeId)
                                        const fieldValue = currentResume?.resume_data?.[data.title]?.[field.name] ?? ""
                                        return (
                                            <Input
                                                key={field.id}
                                                field={field}
                                                value={fields[field.name] ?? ""}
                                                onChange={handleFieldChange}
                                            />
                                        )
                                    })}

                                <div className="col-span-2 flex justify-end items-center mt-10">
                                    <button
                                        type="button"
                                        className="btn btn-wide btn-neutral"
                                        disabled={!isSectionComplete}
                                        onClick={() => handleNextClick(data.id, index)}
                                    >
                                        {
                                            index < sectionData.length - 1 ? "Next" : "Submit"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>

                    )
                }
            })}
        </Fragment>
    )
}

export default Page