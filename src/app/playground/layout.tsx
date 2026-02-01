import Navbar from "@/components/ui/Navbar"
import { Fragment } from "react/jsx-runtime"

const Layout = ({
    children
}: Readonly<RootLayoutProps>) => {
    return(
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <article>{children}</article>
            </main>
        </Fragment>
    )
}

export default Layout
