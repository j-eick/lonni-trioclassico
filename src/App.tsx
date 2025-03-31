import Logo from "./components/ui/logo/Logo";
import TribalPattern from "./components/ui/TribalPattern";
import Navigation from "./components/Navigation";
import trioImg from "./assets/trio.jpg";
import Image from "./components/ui/Image";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";

function App() {
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

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Base Background */}
            <div className="absolute inset-0 bg-rich-black" />

            {/* Subtle Accent Lines */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-luxury-gold/15" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-luxury-gold/15" />
                <div className="absolute left-0 top-0 h-full w-px bg-luxury-gold/15" />
                <div className="absolute right-0 top-0 h-full w-px bg-luxury-gold/15" />
            </div>

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
                        className="opacity-90 hover:opacity-100 transition-all duration-500"
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
                    <div className="text-center mb-12">
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
