"use client"

import ResumeIcon from "@/lib/icons/resume.icons"
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
    const { resumeSectionFields, sectionData, activeId, hydrated } = useSectionsStore()
    const [fields, setFields] = useState<Record<string, any>>({})


    useEffect(() => {
        if (!hydrated) return

        const currentFields = resumeSectionFields
            .filter((f) => f.sectionId === activeId)
            .reduce((acc, field) => {
                acc[field.name] = ""
                return acc
            }, {} as Record<string, any>)

        setFields(currentFields)
    }, [activeId, hydrated, resumeSectionFields])

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
                    field.sectionId === activeId && field.required === true
            )
            .every(
                (field) =>
                    fields[field.name] !== undefined &&
                    String(fields[field.name]).trim() !== ""
            )

    const handleNextClick = () => {
        console.log(fields)
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
            {sectionData && sectionData.map((data) => {
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
                                    .map((field) => (
                                        <Input
                                            key={field.id}
                                            field={field}
                                            value={fields[field.name] ?? ""}
                                            onChange={handleFieldChange}
                                        />
                                    ))}

                                <div className="col-span-2 flex justify-end items-center mt-10">
                                    <button
                                        type="button"
                                        className="btn btn-wide btn-neutral"
                                        disabled={!isSectionComplete}
                                        onClick={() => handleNextClick()}
                                    >
                                        Next
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