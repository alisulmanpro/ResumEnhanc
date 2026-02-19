import Image from "next/image"

const Avatar = () => {
    return (
        <div className="avatar-group -space-x-6">
            <div className="avatar">
                <div className="w-12">
                    <Image src="/avatar-1.jpg" width={1000} height={1000} alt="avatar-1" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <Image src="/avatar-2.jpg" width={1000} height={1000} alt="avatar-2" />
                </div>
            </div>
            <div className="avatar">
                <div className="w-12">
                    <Image src="/avatar-3.jpg" width={1000} height={1000} alt="avatar-3" />
                </div>
            </div>
            <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                </div>
            </div>
        </div>
    )
}

export default Avatar