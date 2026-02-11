"use client"

import useResumeStore from "@/lib/store/resume_info.store"

const Page = () => {
    const { resumeInfo } = useResumeStore()
    return (
        <pre className="p-4 bg-gray-100 rounded text-sm overflow-auto">
            {JSON.stringify(resumeInfo, null, 2)}
        </pre>
    )
}

export default Page