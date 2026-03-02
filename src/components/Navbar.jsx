import { useEffect, useState } from "react";
import Themeswitch from "./Themeswitch";

const sections = ["about", "skills", "projects", "contact"];

export default function Navbar({ setIsChecked, isChecked }) {
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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-3 sm:px-0 flex justify-center">
      
     <div className="
        navbar
        bg-base-100/50
        backdrop-blur-md
        shadow-lg
        rounded-full
        border border-base-300
        max-w-max
        overflow-x-auto
        scrollbar-hide
      ">
        
        <div className="flex items-center gap-1 sm:gap-3 px-2 py-2 whitespace-nowrap">

          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`
                btn btn-ghost btn-sm sm:btn-md
                rounded-full
                flex-shrink-0
                transition-all duration-300
                ${active === id ? "btn-active" : ""}
              `}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          <div className="flex-shrink-0 ml-1">
            <Themeswitch
              setIsChecked={setIsChecked}
              isChecked={isChecked}
            />
          </div>

        </div>
      </div>
    </div>
  );
}