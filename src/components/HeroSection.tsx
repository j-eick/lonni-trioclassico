import { ReactNode } from "react";

interface HeroSectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export default function HeroSection({ id, className = "", children }: HeroSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen flex items-center justify-center px-4 ${className}`}
        >
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.2)_25%,_transparent_80%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-rich-black/20 via-transparent to-rich-black/30" />

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl w-full mx-auto">
                {/* Glass Effect Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/[0.02] to-transparent rounded-lg" />
                {/* Main Content */}
                <div className="relative bg-white/[0.01] backdrop-blur-lg p-8 md:p-16 shadow-elegant border border-white/[0.02] rounded-lg group">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.02] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {children}
                </div>
            </div>
        </section>
    );
}
