import Logo from "./components/ui/logo/Logo";
import TribalPattern from "./components/ui/TribalPattern";
import Navigation from "./components/Navigation";
import trioImg from "./assets/trio.jpg";
import Image from "./components/ui/Image";

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
                {/* Willkommen Section */}
                <section
                    id="willkommen"
                    className="min-h-screen flex items-center justify-center px-4"
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

                            {/* Content Layout */}
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                {/* Image Container */}
                                <div className="relative w-48 md:w-64 flex-shrink-0">
                                    <Image
                                        src={trioImg}
                                        alt="Trio Classico"
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="text-center md:text-left flex-1">
                                    <h2 className="font-display text-luxury-gold text-sm tracking-[0.3em] uppercase mb-4">
                                        Willkommen
                                    </h2>
                                    <h1 className="elegant-heading text-4xl md:text-6xl lg:text-7xl mb-6 text-cream">
                                        Trio <span className="text-luxury-gold">Classico</span>
                                    </h1>
                                    <p className="classic-text text-lg md:text-xl lg:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto md:mx-0">
                                        Klassik auf historischen Instrumenten
                                    </p>
                                    <div className="h-px w-24 bg-luxury-gold/30 mx-auto md:mx-0 mb-6" />
                                    <p className="text-cream/80 text-sm md:text-base max-w-xl mx-auto md:mx-0">
                                        Entdecken Sie die Magie der klassischen Musik, interpretiert auf historischen
                                        Instrumenten
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Die Künstlerinnen Section */}
                <section
                    id="kunstlerinnen"
                    className="min-h-screen flex items-center justify-center px-4 py-20"
                >
                    <div className="relative z-10 max-w-6xl w-full mx-auto">
                        <div className="relative bg-white/[0.01] backdrop-blur-lg p-16 shadow-elegant border border-white/[0.02] rounded-lg">
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
                        </div>
                    </div>
                </section>

                {/* Die Gäste Section */}
                <section
                    id="gaste"
                    className="min-h-screen flex items-center justify-center px-4 py-20"
                >
                    <div className="relative z-10 max-w-6xl w-full mx-auto">
                        <div className="relative bg-white/[0.01] backdrop-blur-lg p-16 shadow-elegant border border-white/[0.02] rounded-lg">
                            <h2 className="font-display text-4xl md:text-5xl mb-12 text-cream text-center">
                                Die Gäste
                            </h2>
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
                        </div>
                    </div>
                </section>

                {/* Das Programm Section */}
                <section
                    id="programm"
                    className="min-h-screen flex items-center justify-center px-4 py-20"
                >
                    <div className="relative z-10 max-w-6xl w-full mx-auto">
                        <div className="relative bg-white/[0.01] backdrop-blur-lg p-16 shadow-elegant border border-white/[0.02] rounded-lg">
                            <h2 className="font-display text-4xl md:text-5xl mb-12 text-cream text-center">
                                Das Programm
                            </h2>
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
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
