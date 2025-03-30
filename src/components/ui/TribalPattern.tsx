import tribalImage from "../../assets/tribal.png"; // adjust the path if needed

type TribalPatternProps = {
    className?: string;
    size?: number;
};

function TribalPattern({ className, size = 50 }: TribalPatternProps) {
    return (
        <div className={`pointer-events-none select-none ${className}`}>
            <img
                src={tribalImage}
                alt="Decorative tribal pattern"
                className={`w-[${size}vw] h-auto`}
                style={{ objectFit: "contain" }}
            />
        </div>
    );
}

export default TribalPattern;
