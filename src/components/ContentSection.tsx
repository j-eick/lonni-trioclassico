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
            className={`min-h-screen flex items-center justify-center px-4 py-20 ${className}`}
        >
            <div className="relative z-10 max-w-6xl w-full mx-auto">
                <div className="relative bg-white/[0.01] backdrop-blur-lg p-16 shadow-elegant border border-white/[0.02] rounded-lg">
                    {children}
                </div>
            </div>
        </section>
    );
}
