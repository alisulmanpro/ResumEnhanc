import { Button } from "@/components/ui/button"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { menudata } from "@/data/resume"
import { Fragment } from "react/jsx-runtime"
import { FaCheck } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";


const Page = () => {
    return (
        <Fragment>
            <SidebarMenu className="space-y-1 w-full">
                {menudata?.map((items) => (
                    <SidebarMenuItem key={items.id} className="cursor-pointer w-full">
                        <SidebarMenuButton asChild className="text-lg px-5 py-7 w-full group hover:bg-hwbtheme/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {items.icon && <items.icon className="text-wbtheme group-hover:text-hwbtheme mb-0.5" style={{ width: "1.5rem", height: "1.5rem" }} />}
                                    <span>{items.title}</span>
                                </div>
                                {items.completed && <FaCheck className="text-hwbtheme ml-2" />}
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                <SidebarMenuItem className="cursor-pointer w-full">
                    <SidebarMenuButton asChild className="text-lg px-0! py-7 w-full hover:bg-hwbtheme/30">
                        <div>
                            <Button variant="default" size="icon-lg" className="flex justify-center items-center rounded-lg bg-hwbtheme/30">
                                <IoMdAdd className="text-wbtheme" />

                            </Button>
                            <span>Add Sections</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>

            </SidebarMenu>
        </Fragment>
    )
}

export default Page