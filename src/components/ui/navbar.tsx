"use client"

import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";
import { MdLabelOutline } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonGroup } from "./button-group";
import ResumeTitle from "./custom-file-button";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
    return (
        <nav className="border-black flex justify-between items-center p-7">
            <Button variant="outline" >
                <FaArrowLeft />
                <span className="hidden sm:inline-block">Resume</span>
            </Button>

            <ResumeTitle
                initialTitle="Untitled"
                onSave={(newTitle) => {
                    console.log("Saved title:", newTitle);
                }}
                isSaving={false}
            />

            <div className="flex items-center gap-2 lg:gap-5">

                <ButtonGroup
                    orientation="horizontal"
                    aria-label="Media controls"
                    className="h-fit hidden sm:inline-block"
                >
                    <Button variant="outline" size="icon">
                        <LuUndo2 />
                    </Button>
                    <Button variant="outline" size="icon">
                        <LuRedo2 />
                    </Button>
                </ButtonGroup>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline"><SlOptionsVertical /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-7 mt-3">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <MdLabelOutline />
                                Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <IoShareSocialOutline />
                                Share
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuGroup className="inline-block sm:hidden">
                            <DropdownMenuSeparator className="bg-secondary h-0.5 my-3" />
                            <ButtonGroup
                                orientation="horizontal"
                                aria-label="Media controls"
                                className="h-fit"
                            >
                                <Button variant="outline" >
                                    <LuUndo2 />
                                    Undo
                                </Button>
                                <Button variant="outline">
                                    <LuRedo2 />
                                    Redo
                                </Button>
                            </ButtonGroup>
                            <Button variant="outline" className="flex items-center w-full">
                                <MdOutlineFileDownload className="text-xl" />
                                <span className="mt-1">Download</span>
                            </Button>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="outline" className="hidden sm:flex items-center">
                    <MdOutlineFileDownload className="text-xl" />
                    <span className="mt-1 hidden md:block">Download</span>
                </Button>

            </div>
        </nav >
    )
}

export default Navbar;