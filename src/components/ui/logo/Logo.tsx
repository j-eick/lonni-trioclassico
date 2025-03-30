import React from "react";
import logo from "../../../assets/logo.png";

interface LogoProps {
    height?: string;
    className?: string;
    href?: string;
}

const Logo: React.FC<LogoProps> = ({ height = "h-12", className = "", href }) => {
    const logoImage = (
        <img
            src={logo}
            alt="Trio Classico"
            className={`${height} w-auto ${className} relative z-10`}
        />
    );

    if (href) {
        return (
            <a
                href={href}
                className="group relative flex items-center"
            >
                {logoImage}
                <div
                    className="absolute -bottom-3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent 
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                />
            </a>
        );
    }

    return <div className="flex items-center">{logoImage}</div>;
};

export default Logo;
