import { useEffect, useState } from "react";

export const useIntersectionObserver = () => {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
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

        const sections = document.querySelectorAll("section[id]");
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return activeSection;
};
