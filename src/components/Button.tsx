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
            className={`${colors[variant]} 
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
                `}
        >
            {children}
        </button>
    );
}

export default Button;