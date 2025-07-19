import { memo, useState } from "react";
import { NavigationProps } from "../types/navigation";

const Navigation = memo(({ scrollToSection, items }: NavigationProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setModalOpen(false);
    };

    return (
        <>
            {/* Main nav bar, hidden below 960px */}
            <nav className="fixed top-0 left-0 right-0 z-40 bp1200_min:hidden bp960_max:hidden">
                <div className="absolute inset-0 bg-rich-black/70 backdrop-blur-[2px]" />
                <div className="max-w-7xl mx-auto relative z-10 px-16 py-12 flex justify-end items-center">
                    <div className="md:flex items-center space-x-8 text-sm uppercase tracking-widest">
                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="elegant-link text-cream/95 hover:text-luxury-gold"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Burger menu for <= 960px */}
            <button
                className="bp960_max:flex fixed top-6 right-8 z-50 w-10 h-10 flex-col items-center justify-center rounded-lg bg-rich-black/80 backdrop-blur-md border border-luxury-gold"
                aria-label="Open navigation menu"
                onClick={() => setModalOpen(true)}
            >
                <span className="block w-6 h-0.5 bg-luxury-gold mb-1 rounded transition-all" />
                <span className="block w-6 h-0.5 bg-luxury-gold mb-1 rounded transition-all" />
                <span className="block w-6 h-0.5 bg-luxury-gold rounded transition-all" />
            </button>

            {/* Modal for navigation links */}
            {modalOpen && (
                <div className="bp960_max:flex fixed inset-0 z-[999] bg-rich-black/90 backdrop-blur-xl flex-col items-center justify-center">
                    <button
                        className="absolute top-8 right-8 text-cream text-3xl font-bold"
                        aria-label="Close navigation menu"
                        onClick={() => setModalOpen(false)}
                    >
                        &times;
                    </button>
                    <nav className="flex flex-col gap-8 text-xl uppercase tracking-widest">
                        {items.map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="elegant-link text-cream/95 hover:text-luxury-gold py-2"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
});

export default Navigation;
