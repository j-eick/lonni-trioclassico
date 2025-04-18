import Logo from "./components/ui/logo/Logo";
import TribalPattern from "./components/ui/TribalPattern";
import Navigation from "./components/Navigation";
import trioImg from "./assets/trio.jpg";
import Image from "./components/ui/Image";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import { useEffect, useRef, useState } from "react";

type GradientData = {
    top: number;
    left: number;
    width: number;
    height: number;
};

function App() {
    // Create a ref to hold our gradient elements.
    const gradientsRef = useRef<(HTMLDivElement | null)[]>([]);
    // State to hold the random starting positions and sizes.
    const [gradientsData, setGradientsData] = useState<GradientData[]>([]);

    // Generate unique random positions and sizes on mount.
    useEffect(() => {
        const generateUniqueData = (count: number, minDistance: number) => {
            const data: GradientData[] = [];
            for (let i = 0; i < count; i++) {
                let newItem: GradientData;
                // Force first 2 gradients to be on the left half of the viewport.
                if (i < 2) {
                    newItem = {
                        top: Math.random() * window.innerHeight,
                        left: Math.random() * (window.innerWidth / 2),
                        width: 150 + Math.random() * (450 - 150), // random between 150 and 450
                        height: 150 + Math.random() * (450 - 150),
                    };
                } else {
                    newItem = {
                        top: Math.random() * window.innerHeight,
                        left: Math.random() * window.innerWidth,
                        width: 150 + Math.random() * (450 - 150),
                        height: 150 + Math.random() * (450 - 150),
                    };
                }

                // Check that newItem is at least minDistance from all existing items.
                const isUnique = data.every(item => {
                    const dx = item.left - newItem.left;
                    const dy = item.top - newItem.top;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    return distance >= minDistance;
                });
                if (isUnique) {
                    data.push(newItem);
                } else {
                    // Retry by decrementing i to generate a valid item for this slot.
                    i--;
                }
            }
            return data;
        };

        // For example, enforce a 50px minimum distance between positions.
        const uniqueData = generateUniqueData(4, 50);
        setGradientsData(uniqueData);
    }, []);

    // Animation effect: apply floating and pulse animation to each gradient.
    useEffect(() => {
        if (gradientsData.length !== 4) return;
        // Get the gradient elements.
        const gradients = gradientsRef.current.filter(Boolean) as HTMLDivElement[];

        // Record base positions (and current opacity) from inline styles.
        const basePositions = gradients.map(gradient => {
            const style = window.getComputedStyle(gradient);
            return {
                top: parseFloat(style.top),
                left: parseFloat(style.left),
                opacity: parseFloat(style.opacity || "1"),
            };
        });

        // Animation parameters for each gradient.
        const animations = [
            {
                speed: 0.09,
                range: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                pulseSpeed: 0.5,
                pulseRange: 0.05,
            },
            {
                speed: 0.08,
                range: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                pulseSpeed: 0.3,
                pulseRange: 0.03,
            },
            {
                speed: 0.1,
                range: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                pulseSpeed: 0.4,
                pulseRange: 0.07,
            },
            {
                speed: 0.12,
                range: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                pulseSpeed: 0.2,
                pulseRange: 0.04,
            },
            {
                speed: 0.2,
                range: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
                pulseSpeed: 0.8,
                pulseRange: 0.04,
            },
        ];

        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = (timestamp - startTime) / 1000; // seconds

            gradients.forEach((gradient, index) => {
                const anim = animations[index];
                const base = basePositions[index];

                // Calculate offsets for a smooth floating effect.
                const xOffset = Math.sin(elapsed * anim.speed) * anim.range.x;
                const yOffset = Math.cos(elapsed * anim.speed * 0.7) * anim.range.y;
                // Calculate a pulse effect on opacity.
                const pulse = Math.sin(elapsed * anim.pulseSpeed) * anim.pulseRange;
                const currentOpacity = base.opacity + pulse;

                gradient.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
                gradient.style.opacity = currentOpacity.toString();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [gradientsData]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const navItems = [
        { id: "willkommen", label: "Willkommen" },
        { id: "kunstlerinnen", label: "Die Künstlerinnen" },
        { id: "gaste", label: "Gäste" },
        { id: "programm", label: "Unser Programm" },
    ];

    // Define the gradient background classes for each gradient.
    const gradientClasses = [
        "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_15%,_transparent_35%)]",
        "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_5%,_transparent_25%)]",
        "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_8%,_transparent_20%)]",
        "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.13)_12%,_transparent_28%)]",
        "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_10%,_transparent_20%)]",
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* <div className="fixed -z-10 top-[15%] left-[60%] right-[10%] bottom-[-15rem] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.0)_20%,_transparent_50%)] " /> */}

            {/* Gradient Variations */}
            {/* Gradient Variations */}
            {gradientsData.length === 4 && (
                <>
                    {gradientsData.map((data, i) => (
                        <div
                            key={i}
                            ref={el => {
                                gradientsRef.current[i] = el;
                            }}
                            style={{
                                top: data.top,
                                left: data.left,
                                width: data.width,
                                height: data.height,
                                position: "fixed",
                            }}
                            className={`fixed -z-10 ${gradientClasses[i]}`}
                        />
                    ))}
                </>
            )}

            {/* Corner Logo */}
            <div className="fixed top-0 left-0 z-50">
                {/* Logo Background */}
                <div className="absolute top-0 left-0 w-[400px] h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/[0.05] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
                </div>

                {/* Logo Container */}
                <div className="relative pl-12 pt-8 group">
                    <Logo
                        href="/"
                        height="h-20"
                    />
                </div>
            </div>

            {/* Navigation */}
            <Navigation
                scrollToSection={scrollToSection}
                items={navItems}
            />

            {/* Main Content */}
            <main className="relative">
                <TribalPattern
                    size={15}
                    className="fixed z-10 -bottom-20 -right-32 top-32 opacity-[.045]"
                />
                <HeroSection id="willkommen">
                    {/* Welcome Text */}
                    <div className="text-center mb-12 ">
                        <h2 className="font-display text-luxury-gold tracking-[0.3em] uppercase mb-4 text-[clamp(0.875rem,2vw,1.125rem)]">
                            Willkommen
                        </h2>
                        <div className="h-px w-full bg-luxury-gold/30 mx-auto mb-6" />
                    </div>

                    {/* Main Content Layout */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        {/* Image Container */}
                        <div
                            className={`relative w-48 flex-shrink-0 
                                        md:w-64`}
                        >
                            <Image
                                src={trioImg}
                                alt="Trio Classico"
                                className="rounded-lg shadow-lg border-[1px] border-luxury-gold/30"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left flex-1">
                            <h1
                                className={`relative h-[calc(2_*_clamp(2rem,5vw,4.5rem))] mb-6 
                                            flex flex-col elegant-heading text-center
                                            text-hero_title text-cream`}
                            >
                                <span className="absolute w-full -top-4 text-cream text-center md:text-left">Trio</span>
                                <span className="absolute w-full -bottom-4 text-luxury-gold text-center md:text-left">
                                    Classico
                                </span>
                            </h1>

                            <p className={`classic-text text-hero_text text-cream/90 mb-8`}>
                                Klassik auf historischen Instrumenten
                            </p>
                            <p className={`text-hero_subText text-cream/80`}>
                                Entdecken Sie die Magie der klassischen Musik, interpretiert auf historischen
                                Instrumenten
                            </p>
                        </div>
                    </div>
                </HeroSection>

                {/* Die Künstlerinnen Section */}
                <ContentSection id="kunstlerinnen">
                    <h2 className="font-display text-4xl md:text-5xl mb-12 text-cream text-center">
                        Die Künstlerinnen
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Placeholder for artist cards */}
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Künstlerin 1</h3>
                            <p className="text-cream/90">Beschreibung der ersten Künstlerin...</p>
                        </div>
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Künstlerin 2</h3>
                            <p className="text-cream/90">Beschreibung der zweiten Künstlerin...</p>
                        </div>
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Künstlerin 3</h3>
                            <p className="text-cream/90">Beschreibung der dritten Künstlerin...</p>
                        </div>
                    </div>
                </ContentSection>

                {/* Die Gäste Section */}
                <ContentSection id="gaste">
                    <h2 className="font-display text-4xl md:text-5xl mb-12 text-cream text-center">Die Gäste</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Placeholder for guest cards */}
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Gast 1</h3>
                            <p className="text-cream/90">Beschreibung des ersten Gastes...</p>
                        </div>
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Gast 2</h3>
                            <p className="text-cream/90">Beschreibung des zweiten Gastes...</p>
                        </div>
                    </div>
                </ContentSection>

                <ContentSection id="programm">
                    <h2 className="font-display text-4xl md:text-5xl mb-12 text-cream text-center">Das Programm</h2>
                    <div className="space-y-8">
                        {/* Placeholder for program items */}
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Programm 1</h3>
                            <p className="text-cream/90">Beschreibung des ersten Programmpunkts...</p>
                        </div>
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Programm 2</h3>
                            <p className="text-cream/90">Beschreibung des zweiten Programmpunkts...</p>
                        </div>
                        <div className="bg-white/[0.01] p-6 rounded-lg border border-white/[0.02]">
                            <h3 className="text-xl text-luxury-gold mb-4">Programm 3</h3>
                            <p className="text-cream/90">Beschreibung des dritten Programmpunkts...</p>
                        </div>
                    </div>
                </ContentSection>
            </main>
        </div>
    );
}

export default App;
