export function Link({ children, className, href }: any): JSX.Element {
    return <a href={href} className={className}>{children}</a>;
}