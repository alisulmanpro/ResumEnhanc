"use client"
import useResumeStore from "@/lib/store/resume.store"
import { Fragment } from "react/jsx-runtime"

const Page = () => {
    const {items} = useResumeStore()

    return(
        <Fragment>
            {items?.map(item => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </Fragment>
    )
}

export default Page