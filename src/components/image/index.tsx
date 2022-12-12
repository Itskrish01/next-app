export function Image({
    src,
    alt,
    className
}: {
    src: string;
    alt: string;
    className: any
}): JSX.Element {
    return (
        <img
            height="100%"
            width="100%"
            className={className}
            src={src}
            alt={alt}
        />
    );
}
