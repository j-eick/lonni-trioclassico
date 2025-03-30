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
            <div className="absolute inset-0">
                {/* Base Layer */}
                <div className="absolute inset-0 bg-rich-black/70 backdrop-blur-[2px]" />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-deep-black/40 to-matte-black/20" />
                {/* Subtle Gold Accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-luxury-gold/[0.05]" />
                {/* Top Border */}
                <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-luxury-gold/30" />
            </div>
            {/* Nav Content */}
            <div className="max-w-7xl mx-auto flex justify-end items-center relative z-10 px-8 py-6 ">
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
                <button className="md:hidden text-cream">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
