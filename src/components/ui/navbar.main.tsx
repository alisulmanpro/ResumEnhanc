import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
    const navLinks = [
        {
            item: "Home",
            link: "/"
        },
        {
            item: "About",
            link: "/"
        },
        {
            item: "Features",
            link: "/"
        },
        {
            item: "How it Works",
            link: "/"
        },
        {
            item: "Templates",
            link: "/"
        },
        {
            item: "Pricing",
            link: "/"
        },
        {
            item: "Contact us",
            link: "/"
        },
    ]
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RiMenu2Line className="size-5" />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1">
                        {navLinks?.map((nl, idx) => (
                            <li key={idx}>
                                <Link href={nl.link}>{nl.item}</Link>
                            </li>
                        ))}
                        <div className="divider my-1"></div>
                        <li>
                            <Link href="/" className="btn btn-neutral"><FaGithub className="text-lg" />Star</Link>
                        </li>
                        <li>
                            <Link href="/" className="btn btn-neutral">Login</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image src="/logo.svg" width={1000} height={1000} className="size-12" alt="ResumeEnhanc Logo" />
                    <span className="hidden md:inline-block">ResumeEnhanc</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks?.map((nl, idx) => (
                        <li key={idx}>
                            <Link href={nl.link}>{nl.item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <button className="btn btn-ghost hidden md:inline-flex"><FaGithub className="text-lg" /> Star</button>
                <button className="btn btn-ghost hidden md:inline-flex">Login</button>
                <button className="btn btn-wide max-w-56 btn-neutral">Get Started | Free</button>
            </div>
        </nav>
    )
}

export default Navbar;