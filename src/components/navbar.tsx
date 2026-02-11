'use client';
import { FaArrowLeft } from "react-icons/fa";
import { ImUndo, ImRedo } from "react-icons/im";
import { HiDownload } from "react-icons/hi";
import EditableGhostText from "./file-save";
import useResumeStore from "@/lib/store/resume_info.store";
import { useSectionsStore } from "@/lib/store/resume_visible.store";

const Navbar = () => {
    const { resume_title, setResumeName } = useResumeStore()
    const { hydrated } = useSectionsStore()


    return (
        <nav className="navbar justify-between bg-base-100 p-7">
            <button className="btn btn-neutral">
                <FaArrowLeft />
                Resume
            </button>
            {hydrated ? (
                <EditableGhostText
                    value={resume_title}
                    onChange={setResumeName}
                    textClassName="font-medium"
                    className="text-center ml-10"
                />
            ) : (
                <div className="skeleton h-6 w-30 rounded-md ml-10"></div>
            )}
            <div className="flex items-center gap-5">
                <div>
                    <button className="btn btn-neutral rounded-r-none">
                        <ImUndo />
                    </button>
                    <button className="btn btn-neutral rounded-l-none">
                        <ImRedo />
                    </button>
                </div>
                <button className="btn btn-neutral">
                    <HiDownload className="text-lg" />
                    Download
                </button>
            </div>
        </nav>
    )
}

export default Navbar