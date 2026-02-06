import Navbar from "@/components/navbar"
import { Fragment } from "react/jsx-runtime"


const Layout = (
    {
        children,
        sidebar
    }: Readonly<PlaygroundLayoutProps>
) => {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main className="grid grid-cols-8 gap-7 px-7">
                <aside className="col-span-2">
                    {sidebar}
                </aside>
                <article className="bg-base-200 rounded-3xl col-span-4 p-10 select-none">{children}</article>
                <aside className="col-span-2">{sidebar}</aside>
            </main>
        </Fragment>
    )
}

export default Layout;