'use client';
import { FaArrowLeft } from "react-icons/fa";
import { ImUndo, ImRedo } from "react-icons/im";
import { HiDownload } from "react-icons/hi";
import EditableGhostText from "./file-save";
import { useState } from "react";

const Navbar = () => {
    const [name, setName] = useState('Untitled');

    return (
        <nav className="navbar justify-between bg-base-100 p-7">
            <button className="btn btn-neutral">
                <FaArrowLeft />
                Resume
            </button>
            <EditableGhostText
                value={name}
                onChange={setName}
                textClassName="font-medium"
                className="text-center ml-10"
            />
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