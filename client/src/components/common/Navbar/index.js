import Link from "./Link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 flex w-full h-[50px] items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start" >
            <div className="px-6">

                {/* Hamburger menu button */}
                <button
                    className="border-0 bg-transparent px-2 py-1.5 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:hidden"
                    type="button"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* Hamburger menu icon */}
                    <span className="[&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/TR/SVG"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </span>
                </button>

                {/* Navigation links */}
                <div
                    className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
                    id="navbarSupportedContentE"
                >
                    <ul
                        className="mr-auto flex flex-col md:flex-row cursor-pointer"
                    >
                        <li >
                            <Link path={"home"} >Home</Link>
                        </li>
                        <li >
                            <Link path={"about"}>About Us</Link>
                        </li>
                        <li >
                            <Link path={"contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}