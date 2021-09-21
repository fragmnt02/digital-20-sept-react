export function Link({ label, className, path }) {
    return (
        <a href={path} className={className}>{label}</a>
    );
}