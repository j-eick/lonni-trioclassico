import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface NavItem {
    id: string;
    label: string;
}

interface VerticalNavProps {
    items: NavItem[];
    scrollToSection: (sectionId: string) => void;
}

const VerticalNav = ({ items, scrollToSection }: VerticalNavProps) => {
    const activeSection = useIntersectionObserver();

    return (
        <nav className="fixed right-12 top-1/2 w-[215px] -translate-y-1/2 z-50 py-10">
            <ul className="flex flex-col gap-16 items-left">
                {items.map(item => (
                    <li
                        key={item.id}
                        className="transform -rotate-[20deg]"
                    >
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                relative group
                                text-cream/80 tracking-widest uppercase text-sm
                                transition-all duration-500 ease-out
                                hover:text-luxury-gold hover:-translate-y-1
                                ${
                                    activeSection === item.id
                                        ? "text-luxury-gold !text-base font-medium translate-x-2"
                                        : "hover:scale-105"
                                }
                            `}
                        >
                            <span className="relative whitespace-nowrap">
                                {item.label}
                                <span
                                    className={`
                                        absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold/60
                                        transition-all duration-500 ease-out group-hover:w-full
                                        ${activeSection === item.id ? "!w-full !bg-luxury-gold" : ""}
                                    `}
                                />
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default VerticalNav;
