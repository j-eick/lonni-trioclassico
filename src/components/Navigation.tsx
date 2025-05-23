interface NavItem {
    id: string;
    label: string;
}

interface NavigationProps {
    scrollToSection: (sectionId: string) => void;
    items: NavItem[];
}

const Navigation = ({ scrollToSection, items }: NavigationProps) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40">
            {/* Nav Background Layers */}
            <div className="absolute inset-0 bg-rich-black/70 backdrop-blur-[2px]" />
            {/* Nav Content */}
            <div className="max-w-7xl mx-auto flex justify-end items-center relative z-10 px-8 py-12">
                <div className="hidden md:flex items-center space-x-16 text-sm uppercase tracking-widest">
                    {items.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="elegant-link text-cream/95 hover:text-luxury-gold"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
