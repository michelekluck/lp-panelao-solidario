interface TextProps {
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    titleClassName?: string;
    textClassName?: String
}

function Text({
    className = "",
    titleClassName = "",
    textClassName = "",
    title,
    children
}: TextProps) {
    return (
        <div>
            <h2 className={`body-title ${titleClassName}`}>
                {title}
            </h2>

            <p className={`body-text text-black ${textClassName}`}>
                {children}
            </p>
        </div>
    )
}

export default Text;