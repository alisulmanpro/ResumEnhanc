"use client"

import ResumeIcon from "@/lib/icons/resume.icons"
import { useSectionsStore } from "@/lib/store/resume_visible.store";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import clsx from "clsx"
import { FaCheck } from "react-icons/fa6";

const Modal = () => {
    return (
        <dialog className="modal text-base-content" id="model_toggle">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><MdClose /></button>
                </form>
                <div className="container">
                    <div className="card card-border border-base-300 bg-base-200 w-96 hover:scale-102 overflow-hidden">
                        <div className="relative card-body">
                            <div>
                                
                            </div>
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="absolute inset-0 card-actions justify-center items-center">
                                <div className="absolute hidden w-full h-full bg-black/20 backdrop-blur-xs z-0 group-hover:block"></div> <button className="hidden btn btn-neutral z-10 group-hover:flex"> <IoAddSharp /> Add Section </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

const Page = () => {

    const { sections, activeId, hydrated, preActiveId, completedSectionIds, setActiveId, setPreActiveId } = useSectionsStore()

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
                const activeIndex = sections.findIndex(s => s.id === preActiveId&&preActiveId)
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

            <li onClick={() => modelToggle()}>
                <Modal />
                <span>
                    <BiSolidBookAdd />
                    Add Sections
                </span>
            </li>
        </ul>
    )
}

export default Page