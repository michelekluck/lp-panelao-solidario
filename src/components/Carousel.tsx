import { useCallback, useEffect, useRef, useState } from "react"

type Slide = {
    src: string
    alt: string
}

type CarouselProps = {
    images: Slide[]
    bleed?: boolean // quando true, a faixa vaza até as bordas da tela
    interval?: number // tempo entre as trocas (ms)
}

function Carousel({ images, bleed = false, interval = 3000 }: CarouselProps) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const settleTimer = useRef<number | undefined>(undefined)
    const timerRef = useRef<number | undefined>(undefined)
    const indexRef = useRef(0)
    // Cada fonte de pausa é guardada separadamente
    const pauseRef = useRef({ hover: false, touch: false, focus: false })

    const n = images.length
    const [index, setIndex] = useState(0) // posição "real" (0 até n-1), usada nos pontinhos
    const [edges, setEdges] = useState({ left: 0, right: 0 })

    // 3 cópias da lista: [antes][meio][depois]. A gente vive sempre na do meio.
    const slides = [...images, ...images, ...images]

    const isPaused = () => {
        const p = pauseRef.current
        return p.hover || p.touch || p.focus
    }

    const measureEdges = useCallback(() => {
        const wrapper = wrapperRef.current
        if (!wrapper || !bleed) return

        const rect = wrapper.getBoundingClientRect()
        setEdges({
            left: Math.max(0, rect.left),
            right: Math.max(0, document.documentElement.clientWidth - rect.right),
        })
    }, [bleed])

    const getStep = () => {
        const slide = trackRef.current?.firstElementChild as HTMLElement | undefined
        return slide?.offsetWidth ?? 0
    }

    // Se o scroll saiu da cópia do meio, volta para a posição equivalente nela (sem animação)
    const normalize = useCallback(() => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        const setWidth = n * step
        const abs = Math.round(track.scrollLeft / step)

        if (abs >= 2 * n) track.scrollLeft -= setWidth
        else if (abs < n) track.scrollLeft += setWidth
    }, [n])

    const onScroll = () => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        const abs = Math.round(track.scrollLeft / step)
        const real = ((abs % n) + n) % n
        indexRef.current = real
        setIndex(real)

        // Só "teleporta" quando o scroll parou, para não cortar a animação suave
        window.clearTimeout(settleTimer.current)
        settleTimer.current = window.setTimeout(normalize, 120)
    }

    // Vai para uma posição relativa à atual (+1 = próxima, -1 = anterior)
    const goBy = useCallback((delta: number) => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        const abs = Math.round(track.scrollLeft / step)
        track.scrollTo({ left: (abs + delta) * step, behavior: "smooth" })
    }, [])

    // Vai para uma foto específica (pontinhos), na cópia do meio
    const goTo = (i: number) => {
        const track = trackRef.current
        const step = getStep()
        if (!track || !step) return

        track.scrollTo({ left: (n + i) * step, behavior: "smooth" })
    }

    // Autoplay: pode ser chamado de novo para reiniciar a contagem
    const startAutoplay = useCallback(() => {
        window.clearInterval(timerRef.current)

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (reduceMotion || n < 2) return

        timerRef.current = window.setInterval(() => {
            if (!isPaused() && !document.hidden) goBy(1)
        }, interval)
    }, [goBy, interval, n])

    // Navegação manual: anda e reinicia a contagem
    const manualGoBy = (delta: number) => {
        goBy(delta)
        startAutoplay()
    }

    const manualGoTo = (i: number) => {
        goTo(i)
        startAutoplay()
    }

    // Posição inicial e ajuste no resize
    useEffect(() => {
        const onResize = () => {
            measureEdges()
            const track = trackRef.current
            const step = getStep()
            if (track && step) track.scrollLeft = (n + indexRef.current) * step
        }

        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [measureEdges, n])

    useEffect(() => {
        startAutoplay()
        return () => window.clearInterval(timerRef.current)
    }, [startAutoplay])

    useEffect(() => () => window.clearTimeout(settleTimer.current), [])

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
            // Hover só conta para mouse real (ignora o mouse emulado do toque)
            onPointerEnter={(e) => { if (e.pointerType === "mouse") pauseRef.current.hover = true }}
            onPointerLeave={(e) => { if (e.pointerType === "mouse") pauseRef.current.hover = false }}
            onTouchStart={() => { pauseRef.current.touch = true }}
            onTouchEnd={() => { pauseRef.current.touch = false }}
            onTouchCancel={() => { pauseRef.current.touch = false }}
            // Foco só pausa se veio do teclado, não de um clique
            onFocus={(e) => {
                if (e.target.matches(":focus-visible")) pauseRef.current.focus = true
            }}
            onBlur={() => { pauseRef.current.focus = false }}
        >
            {/* Faixa: 1 foto no celular, 2 no tablet (md), 3 no desktop (lg) */}
            <div
                ref={trackRef}
                onScroll={onScroll}
                style={trackStyle}
                className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${bleed ? "" : "-mx-2"}`}
            >
                {slides.map((image, i) => (
                    <div
                        key={`${i}-${image.src}`}
                        aria-hidden={i < n || i >= 2 * n}
                        className="shrink-0 basis-[85%] snap-start px-2 md:basis-1/2 lg:basis-1/3"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading={i < n + 3 ? "eager" : "lazy"}
                            className="aspect-[4/3] w-full rounded-2xl object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Seta anterior (sempre ativa, já que não tem começo) */}
            <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => manualGoBy(-1)}
                className="absolute left-2 top-[calc(50%-1rem)] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Seta seguinte */}
            <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => manualGoBy(1)}
                className="absolute right-2 top-[calc(50%-1rem)] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow transition hover:bg-white"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            {/* Pontinhos (um por foto) */}
            {n > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Ir para a foto ${i + 1}`}
                            aria-current={i === index}
                            onClick={() => manualGoTo(i)}
                            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2.5 bg-fontGrey/30"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Carousel