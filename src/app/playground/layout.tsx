import Navbar from "@/components/ui/navbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Fragment } from "react/jsx-runtime"

const Layout = ({
    children,
    menu
}: Readonly<PlaygroundLayoutProps>) => {
    return (
        <Fragment>
            <header className="h-1.5/12 shrink-0">
                <Navbar />
            </header>

            <main className="flex justify-center items-start px-7 gap-5">
                <SidebarProvider>
                    <aside className="w-2/3">
                        {menu}
                    </aside>
                </SidebarProvider>

                <article className="w-full border border-black">
                    {children}
                </article>

                <aside className="border border-black w-full"></aside>
            </main>
        </Fragment>
    )
}

export default Layout