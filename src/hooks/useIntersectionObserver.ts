import { useEffect, useState, useCallback } from "react";

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

export const useIntersectionObserver = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    const checkInitialSection = useCallback(() => {
        const sections = document.querySelectorAll("section[id]");
        const viewportHeight = window.innerHeight;

        Array.from(sections).some(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;

            if (isInView) {
                setActiveSection(section.id);
                return true;
            }
            return false;
        });
    }, []);

    useEffect(() => {
        const debouncedCheck = debounce(checkInitialSection, 100);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-45% 0px -45% 0px",
            }
        );

        checkInitialSection();
        const sections = document.querySelectorAll("section[id]");
        sections.forEach(section => observer.observe(section));

        window.addEventListener("scroll", debouncedCheck, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", debouncedCheck);
        };
    }, [checkInitialSection]);

    return activeSection;
};
