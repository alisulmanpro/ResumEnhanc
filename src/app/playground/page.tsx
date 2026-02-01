import { menudata } from "@/data/resume"
import { Fragment } from "react/jsx-runtime"

const Page = () => {
    return(
        <Fragment>
            {menudata?.map(items => (
                <h1 key={items.id}>{items.title}</h1>
            ))}
        </Fragment>
    )
}

export default Page