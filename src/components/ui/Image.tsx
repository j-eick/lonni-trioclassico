interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    alt: string;
}

const Image = ({ className = "", alt, ...props }: ImageProps) => {
    return (
        <img
            alt={alt}
            className={`block w-full h-auto object-cover ${className}`}
            {...props}
        />
    );
};

export default Image;
