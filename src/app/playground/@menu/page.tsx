"use client"
import { Button } from "@/components/ui/button"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { FaCheck } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import useResumeStore from "@/lib/store/resume.store";
import clsx from "clsx";
import AddSections from "@/components/layouts/add-sections";
import { useEffect, useState } from "react";
import iconMap from "@/lib/icons/resume.icons";
import { Skeleton } from "@/components/ui/skeleton"

const Page = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [hydrated, setHydrated] = useState<boolean>(false)
    const [count, setCount] = useState<number>(4)

    const { items, activeId, setActiveId } = useResumeStore()

    useEffect(() => {
        setHydrated(true)
    }, [])

    const handleActiveClick = (id: number | string) => {
        setActiveId(id)
    }

    const handleOpenClick = () => {
        setOpen(true)
    }

    if (!hydrated) {
        return (
            <div className="space-y-1">
                {
                    Array.from({ length: count }, (_, i) => (
                        <Skeleton key={i} className="h-15 w-full rounded-md" />
                    ))
                }
            </div>
        )
    }

    return (
        <SidebarMenu className="w-full h-full">
            {items?.map((item) => {
                const Icon = iconMap[item.icon]
                if (!item.addsec) return (
                    <SidebarMenuItem key={item.id} className="cursor-pointer w-full">
                        <SidebarMenuButton
                            asChild
                            className={clsx("text-md font-medium px-3 py-6 w-full group hover:bg-hwbtheme/30", { "bg-hwbtheme/30": item.id == activeId })}
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
            <SidebarMenuItem className="cursor-pointer w-full">
                <SidebarMenuButton asChild className="text-md font-medium  select-none px-3 py-6 w-full group hover:bg-hwbtheme/30" onClick={handleOpenClick}>
                    <div className="flex items-center gap-3">
                        <Button variant="default" size="icon-sm" className="flex justify-center items-center cursor-pointer rounded-sm bg-wbtheme hover:bg-hwbtheme group-hover:bg-hwbtheme">
                            <IoMdAdd className="text-white" />
                        </Button>
                        <span>Add Sections</span>
                        <AddSections open={open} setOpenChange={setOpen}/>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>

        </SidebarMenu>
    )
}

export default Page