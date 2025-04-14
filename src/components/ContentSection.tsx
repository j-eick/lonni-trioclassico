import { ReactNode } from "react";

interface ContentSectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export default function ContentSection({ id, className = "", children }: ContentSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen flex items-center justify-center px-4  py-20 ${className}`}
        >
            <div className="relative z-10 max-w-6xl w-full mx-auto">
                {/* <div className="absolute -z-10 inset-0 bg-gradient-to-br from-white/[0.06] to-transparent rounded-lg" /> */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-luxury-gold/[0.15] to-transparent rounded-lg" />
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-luxury-gold/[0.09] to-transparent rounded-lg" />
                {/* Main Content */}
                <div className="relative bg-white/[0.02] backdrop-blur-lg p-8 md:p-16 shadow-elegant border border-white/[0.06] rounded-lg group">
                    {/* Inner Glow */}
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-luxury-gold/[0.06] to-transparent rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                    {children}
                </div>

                {/* <div className="relative bg-white/[0.01] backdrop-blur-lg p-16 shadow-elegant border border-white/[0.02] rounded-lg">
                    {children}
                </div> */}
            </div>
        </section>
    );
}
