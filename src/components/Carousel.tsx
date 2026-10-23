import { useCallback, useEffect, useRef, useState } from "react"

type Slide = {
    src: string
    alt: string
}

type CarouselProps = {
    images: Slide[]
    bleed?: boolean // quando true, a faixa vaza até as bordas da tela
}

function Carousel({ images, bleed = false }: CarouselProps) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(images.length) // quantidade de posições (pontinhos)
    const [edges, setEdges] = useState({ left: 0, right: 0 }) // distância do conteúdo até as bordas da tela

    // Mede a distância entre o carrossel e as bordas da tela (para o modo bleed)
    const measureEdges = useCallback(() => {
        const wrapper = wrapperRef.current
        if (!wrapper || !bleed) return

        const rect = wrapper.getBoundingClientRect()
        setEdges({
            left: Math.max(0, rect.left),
            right: Math.max(0, document.documentElement.clientWidth - rect.right),
        })
    }, [bleed])

    // Largura de um passo = largura de um slide
    const getStep = () => {
        const slide = trackRef.current?.firstElementChild as HTMLElement | undefined
        return slide?.offsetWidth ?? 0
    }

    // Recalcula posição atual e quantidade de posições (muda conforme a largura da tela)
    const update = useCallback(() => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        // Largura útil da faixa, sem o padding
        const estilo = getComputedStyle(track)
        const largura = track.clientWidth - parseFloat(estilo.paddingLeft) - parseFloat(estilo.paddingRight)

        const visible = Math.max(1, Math.round(largura / step))
        const positions = Math.max(1, images.length - visible + 1)

        setCount(positions)
        setIndex(Math.min(positions - 1, Math.round(track.scrollLeft / step)))
    }, [images.length])

    useEffect(() => {
        const onResize = () => {
            measureEdges()
            update()
        }

        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [measureEdges, update])

    const goTo = (i: number) => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        const alvo = Math.max(0, Math.min(i, count - 1))
        track.scrollTo({ left: alvo * step, behavior: "smooth" })
    }

    // No modo bleed: a faixa sai das margens até a borda da tela, e o padding devolve o alinhamento
    // (descontando o px-2 de cada slide, para a primeira foto alinhar com o conteúdo)

    const trackStyle = bleed
        ? { marginLeft: -edges.left, marginRight: -edges.right }
        : undefined

    return (
        <div
            ref={wrapperRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Galeria de fotos"
            className="relative"
        >
            {/* Faixa: 1 foto no celular, 2 no tablet (md), 3 no desktop (lg) */}
            <div
                ref={trackRef}
                onScroll={update}
                style={trackStyle}
                className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${bleed ? "" : "-mx-2"}`}
            >
                {images.map((image, i) => (
                    <div
                        key={image.src}
                        className="shrink-0 basis-[85%] snap-start px-2 md:basis-1/2 lg:basis-1/3"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading={i < 3 ? "eager" : "lazy"}
                            className="aspect-[4/3] w-full rounded-2xl object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Seta anterior */}
            <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                className="absolute left-2 top-[calc(50%-1rem)] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-0"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Seta seguinte */}
            <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => goTo(index + 1)}
                disabled={index >= count - 1}
                className="absolute right-2 top-[calc(50%-1rem)] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white disabled:pointer-events-none disabled:opacity-0"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            {/* Pontinhos (um por posição possível) */}
            {count > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {Array.from({ length: count }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Ir para a posição ${i + 1}`}
                            aria-current={i === index}
                            onClick={() => goTo(i)}
                            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2.5 bg-fontGrey/30"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel