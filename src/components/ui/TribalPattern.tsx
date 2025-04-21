import { memo } from "react";
import tribalImage from "../../assets/tribal.png";

type TribalPatternProps = {
    className?: string;
    size?: number;
};

const TribalPattern = memo(function TribalPattern({ className, size = 50 }: TribalPatternProps) {
    return (
        <div className={`pointer-events-none select-none ${className}`}>
            <img
                src={tribalImage}
                alt="Decorative tribal pattern"
                style={{ width: `${size}vw`, height: "auto", objectFit: "contain" }}
            />
        </div>
    );
});

export default TribalPattern;
