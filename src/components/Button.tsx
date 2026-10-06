interface ButtonProps {
    children: React.ReactNode;
    variant: "yellow" | "green";
}

function Button({ children, variant }: ButtonProps) {
    const colors = {
        yellow: "bg-darkYellow",
        green: "bg-aqua"
    };

    return (
        <button
            type="button"
            className={`${colors[variant]} items-center justify-center flex text-center leading-4 w-[130px] h-[43px] rounded-lg py-2 px-4 font-body font-bold`}
        >
            {children}
        </button>
    );
}

export default Button;