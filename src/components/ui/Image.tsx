interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

const Image = ({ className = "", ...props }: ImageProps) => {
    return (
        <img
            className={`block w-full h-auto object-cover ${className}`}
            {...props}
        />
    );
};

export default Image;
