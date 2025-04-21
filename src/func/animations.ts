type AnimationConfig = {
    speed: number;
    range: { x: number; y: number };
    pulseSpeed: number;
    pulseRange: number;
};

export const getAnimationConfigs = (): AnimationConfig[] => [
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
];

export const gradientClasses = [
    "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_15%,_transparent_35%)]",
    "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_5%,_transparent_25%)]",
    "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_8%,_transparent_20%)]",
    "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.13)_12%,_transparent_28%)]",
    "bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_10%,_transparent_20%)]",
];
