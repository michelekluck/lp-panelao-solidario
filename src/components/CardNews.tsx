import type { ReactNode } from "react"

type CardProps = {
    image: string
    alt: string
    title: string
    href?: string
    children: ReactNode
}

function CardNews({ image, alt, title, href, children }: CardProps) {
    const conteudo = (
        <>
            <img src={image} alt={alt} className="h-[260px] w-full rounded-2xl object-cover" />

            <div className="font-body flex flex-col gap-2">
                <h3 className="text-[18px] font-bold">{title}</h3>
                <div className="line-clamp-3">{children}</div>
            </div>
        </>
    )

    if (href) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className="flex flex-col gap-4">
                {conteudo}
            </a>
        )
    }

    return <div className="flex flex-col gap-4">{conteudo}</div>
}

export default CardNews