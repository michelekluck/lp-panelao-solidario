import type { ReactNode, MouseEventHandler } from "react"

const WHATSAPP_NUMBER = "5541997199847" // 55 (Brasil) + 41 (DDD) + número

interface ButtonProps {
    children: ReactNode;
    variant: "yellow" | "green";
    className?: string;
    href?: string;
    whatsapp?: string;
    onClick?: MouseEventHandler<HTMLElement>;
}

function Button({ children, variant, className = "", href, whatsapp, onClick }: ButtonProps) {
    const colors = {
        yellow: "bg-darkYellow",
        green: "bg-aqua"
    };

    const classes = `${colors[variant]}
        ${className}
        items-center
        justify-center
        flex text-center
        leading-4
        w-[130px]
        md:w-[216px]
        h-[43px]
        md:h-[72px]
        rounded-lg
        py-2
        px-4
        body-text
        font-bold
        md:text-[24px]
        md:leading-[25px]
        md:rounded-2xl
        cursor-pointer
        `


    const link = whatsapp
        ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsapp)}`
        : href

    if (link) {
        const externo = /^https?:\/\//.test(link)

        return (
            <a
                href={link}
                className={classes}
                onClick={onClick}
                {...(externo ? { target: "_blank", rel: "noreferrer" } : {})}
            >
                {children}
            </a>
        )
    }

    return (
        <button type="button" className={classes} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;