"use client"

import ResumeIcon from "@/lib/icons/resume.icons"
import { useSectionsStore } from "@/lib/store/resume_visible.store";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import clsx from "clsx"
import { FaCheck } from "react-icons/fa6";
import { useRef } from "react";

const Modal = () => {
    const { sections, completedSectionIds, addMoreSections, setAddSection, setActiveId } = useSectionsStore()

    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleAddSectionClick = (id: string): void => {
        if (sections.length === completedSectionIds.length) {
            setAddSection(id)
            setActiveId(id)
            setTimeout(() => {
                dialogRef.current?.close();
            }, 10);
        }
    }

    return (
        <dialog ref={dialogRef} className="modal text-base-content p-50" id="model_toggle">
            <div className="modal-box w-11/12 max-w-5xl p-10">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><MdClose /></button>
                </form>
                <div className="grid grid-cols-3 gap-5 container">
                    {addMoreSections && addMoreSections.map(section => {
                        const Icon = ResumeIcon[section.section_icon as ResumeIconKey]

                        return (
                            <div
                                key={section.id}
                                className="card card-border border-base-300 bg-base-200 w-full hover:scale-102 overflow-hidden"
                                onClick={() => handleAddSectionClick(section.id)}
                            >
                                <div className="relative card-body">
                                    <div className="bg-base-100 border border-neutral-content rounded-lg p-5 mb-2">
                                        <h2 className="flex justify-start items-center gap-3 text-xs">
                                            {Icon && <Icon className="text-lg" />}
                                            <span>{section.section_title}</span>
                                        </h2>
                                        <div className="divider h-1"></div>
                                        <div className="flex flex-col items-center justify-center gap-2">
                                            <span className="w-full h-2 bg-base-300 rounded-full"></span>
                                            <span className="w-full h-2 bg-base-300 rounded-full"></span>
                                            <span className="w-full h-2 bg-base-300 rounded-full"></span>
                                        </div>
                                    </div>
                                    <h2 className="card-title">
                                        {Icon && <Icon className="text-2xl" />}
                                        <span>{section.section_title}</span>
                                    </h2>
                                    <p className="text-xs">{section.section_description}</p>
                                    <div className="absolute inset-0 card-actions justify-center items-center">
                                        <div className="absolute hidden w-full h-full bg-black/20 backdrop-blur-xs z-0 group-hover:block"></div> <button className="hidden btn btn-neutral z-10 group-hover:flex"> <IoAddSharp /> Add Section </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </dialog>
    )
}

const Page = () => {

    const { sections, activeId, hydrated, preActiveId, completedSectionIds, setActiveId, setPreActiveId, addMoreSections } = useSectionsStore()

    const modelToggle = () => {
        const model = document.getElementById("model_toggle") as HTMLDialogElement
        if (model) {
            console.log("click")
            model.showModal()
        }

    }

    const handleActiveClick = (id: string): void => {
        if (completedSectionIds.includes(id)) {
            setPreActiveId(activeId)
            setActiveId(id)
        } else {
            setPreActiveId(null)
            setActiveId(id)
        }

    }

    if (!hydrated) {
        return (
            <div className="skeleton h-55 w-full"></div>
        )
    }

    return (
        <ul className="menu menu-lg bg-base-100 rounded-box p-0 w-full gap-1 [&>*>*]:flex [&>*>*]:gap-5">
            {sections?.map((section, index) => {
                const Icon = ResumeIcon[section.section_icon as ResumeIconKey]

                const isCompleted = completedSectionIds.includes(section.id)
                const activeIndex = sections.findIndex(s => s.id === preActiveId && preActiveId)
                const isClickable = isCompleted || index <= activeIndex

                return (
                    <li
                        key={section.id}
                        className={clsx(
                            "rounded-lg hover:rounded-lg!",
                            {
                                "menu-active": activeId === section.id,
                                "menu-disabled": !isClickable,
                            }
                        )}
                        onClick={() => {
                            if (!isClickable) return
                            if (activeId === section.id) return
                            handleActiveClick(section.id)
                        }}
                    >
                        <span className="flex justify-between items-center">
                            <span className="flex gap-5 items-center">
                                {Icon && <Icon className="text-xl" />}
                                {section.section_title}
                            </span>
                            {isCompleted && <FaCheck />}
                        </span>
                    </li>
                )
            })}
            {addMoreSections.length !== 0 && (
                <li onClick={() => modelToggle()}>
                    <Modal />
                    <span>
                        <BiSolidBookAdd />
                        Add Sections
                    </span>
                </li>
            )}
        </ul>
    )
}

export default Page