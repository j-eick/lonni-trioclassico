import { memo, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { NavigationProps } from "../types/navigation";

const VerticalNav = memo(({ scrollToSection, items }: NavigationProps) => {
    const activeSection = useIntersectionObserver();
    const [clickedItem, setClickedItem] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setClickedItem(id);
        scrollToSection(id);
    };

    return (
        <nav className="fixed right-vNav_to_r_viewPort top-1/2 w-[215px] -translate-y-1/2 z-50 py-10 pr-2 border-r-[.75px] border-r-luxury-gold">
            <ul className="flex flex-col gap-14">
                {items.map(item => (
                    <li
                        key={item.id}
                        className="transform -rotate-[20deg] origin-bottom text-right"
                    >
                        <button
                            onClick={() => handleClick(item.id)}
                            className={`
                                relative group/nav
                                text-cream/80 tracking-widest uppercase text-sm
                                transition-all duration-300 ease-out
                                hover:text-luxury-gold hover:-translate-y-1
                                ${
                                    activeSection === item.id || clickedItem === item.id
                                        ? "text-luxury-gold !text-base font-medium !opacity-100 scale-110"
                                        : "hover:scale-105 opacity-70"
                                }
                                focus:outline-none
                            `}
                        >
                            <span className="relative inline-block whitespace-nowrap text-right">
                                {item.label.includes(" ")
                                    ? item.label.split(" ").map((word, index) => (
                                          <span
                                              key={index}
                                              className="block"
                                          >
                                              {word}
                                          </span>
                                      ))
                                    : item.label}
                                <span
                                    className={`
                                        absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold/60
                                        transition-all duration-300 ease-out 
                                        group-hover/nav:w-full
                                        ${
                                            activeSection === item.id || clickedItem === item.id
                                                ? "!w-full !bg-luxury-gold"
                                                : ""
                                        }
                                    `}
                                />
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
});

export default VerticalNav;
