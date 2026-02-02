import Navbar from "@/components/ui/navbar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Fragment } from "react/jsx-runtime"

const Layout = ({
    children,
    menu
}: Readonly<PlaygroundLayoutProps>) => {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 border border-black p-7 gap-7">
                <SidebarProvider>
                    <aside className="hidden h-full w-full col-span-2 lg:col-span-1 md:block">{menu}</aside>
                </SidebarProvider>
                <article className="border border-black h-full md:col-span-3 lg:col-span-2">{children}</article>
                <aside className="hidden border border-black h-full lg:block"></aside>
            </main>
        </Fragment>
    )
}

export default Layout
