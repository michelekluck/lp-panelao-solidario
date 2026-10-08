import Garfo from "../assets/images/garfo.svg"

interface CardProps {
    title: React.ReactNode;
    children: React.ReactNode;
    variant: "red" | "yellow";
    className?: string;
}

function Card({ className = "", children, variant, title }: CardProps) {
    const colors = {
        red: "bg-primary text-white",
        yellow: "bg-lightYellow text-primary"
    }

    return (
        <div className={`relative md:w-[500px] w-full mx-auto ${className}`}>
            {variant === "red" && (
                <div
                    className={`${colors[variant]}
                        p-4
                        rounded-full
                        h-[77px]
                        w-[77px]
                        md:h-[119px]
                        md:w-[119px]
                        absolute
                        z-10
                        top-[-50px]
                        md:top-[-60px]
                        items-center
                        justify-center
                        left-1/2
                        -translate-x-1/2
                        flex
                        `
                    }
                >
                    <img src={Garfo} alt="" className="h-[62px] w-[79px]" />
                </div>
            )}

            <div className={`${colors[variant]} font-heading p-4 md:h-[300px] h-[170px] md:rounded-3xl rounded-lg text-center mt-4`} >
                <div className="h-full flex flex-col justify-center text-center">
                    <h2 className="md:text-[64px] text-[36px] font-bold mb-2">
                        {title}
                    </h2>

                    <p className="md:text-[32px] text-[20px]">
                        {children}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Card;