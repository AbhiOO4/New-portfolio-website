import { useEffect, useState } from "react";

import Themeswitch from "./Themeswitch";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar({setIsChecked, isChecked}) {
    const [active, setActive] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;

                const { offsetTop, offsetHeight } = el;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActive(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="navbar bg-base-100/70 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-base-300">
                <div className="flex gap-3">
                    {sections.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`btn btn-ghost rounded-full transition-all duration-300 ${active === id ? "btn-active " : ""
                                }`}
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    ))}
                    <Themeswitch setIsChecked={setIsChecked} isChecked={isChecked}/>
                </div>
            </div>
        </div>
    );
}