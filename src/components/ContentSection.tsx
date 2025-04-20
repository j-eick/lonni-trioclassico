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
            className={`min-h-screen flex items-center justify-center px-24 py-20 ${className}`}
        >
            <div className="relative z-10 max-w-5xl w-full mx-auto">
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-luxury-gold/[0.18] via-luxury-gold/[0.05] to-transparent via-40% to-80% rounded-lg" />
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-luxury-gold/[0.05] to-transparent to-50% rounded-lg" />
                {/* Main Content */}
                <div className="relative bg-white/[0.05] backdrop-blur-[8px] p-8 md:p-16 shadow-elegant border border-white/[0.12] rounded-lg group">
                    {/* Inner Glow */}
                    <div
                        className={`absolute -z-10 inset-0 bg-gradient-to-br from-luxury-gold/[0.06] to-transparent to-50% rounded-lg opacity-0
                                    group-hover:opacity-80 transition-opacity duration-700
                                    `}
                    />
                    {children}
                </div>
            </div>
        </section>
    );
}
