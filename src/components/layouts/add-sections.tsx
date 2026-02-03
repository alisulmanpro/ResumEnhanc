import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useResumeStore from "@/lib/store/resume.store"
import { FC } from "react"
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { FaCheck } from "react-icons/fa6"
import iconMap from "@/lib/icons/resume.icons"

const AddSections: FC<AddSectionsProps> = ({
    open, setOpenChange
}) => {

    const { items, setAddSection } = useResumeStore()

    const handleActiveClick = (id: number | string) => {
        setAddSection(id, false)
    }

    return (
        <DropdownMenu open={open} onOpenChange={setOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute top-20 left-50 w-60" align="start">
                {items?.map((item) => {
                    const Icon = iconMap[item.icon]
                    if (item.addsec) return (
                        <SidebarMenuItem key={item.id} className="cursor-pointer w-full">
                            <SidebarMenuButton
                                asChild
                                className="text-md font-medium px-3 py-6 w-full group hover:bg-hwbtheme/30"
                                onClick={() => handleActiveClick(item.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        {Icon && <Icon className="text-wbtheme group-hover:text-hwbtheme mb-0.5" style={{ width: "1.5rem", height: "1.5rem" }} />}
                                        <span>{item.title}</span>
                                    </div>
                                    {item.completed && <FaCheck className="text-hwbtheme ml-2" />}
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AddSections
