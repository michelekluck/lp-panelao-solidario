import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type Slide = {
    src: string
    srcSet?: string // ex: "foto-400.webp 400w, foto-800.webp 800w, foto-1200.webp 1200w"
    alt: string
}

type CarouselProps = {
    images: Slide[]
    bleed?: boolean // quando true, a faixa vaza até as bordas da tela
    interval?: number // tempo entre as trocas (ms)
}

// Quanto da tela cada slide ocupa (precisa bater com as classes basis-* do slide)
const SIZES = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"

// Quantas fotos ficam visíveis no início (3 no desktop) + 1 de folga para o autoplay
const EAGER_COUNT = 4

// Duração da troca automática/setas (ms)
const SLIDE_DURATION = 650

const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function Carousel({ images, bleed = false, interval = 3000 }: CarouselProps) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const settleTimer = useRef<number | undefined>(undefined)
    const timerRef = useRef<number | undefined>(undefined)
    const rafRef = useRef<number>(0)
    const animRef = useRef<{ to: number } | null>(null) // animação em andamento (destino)
    const stepRef = useRef(0) // largura de um slide (guardada, para não medir a cada scroll)
    const indexRef = useRef(0)
    // Cada fonte de pausa é guardada separadamente
    const pauseRef = useRef({ hover: false, touch: false, focus: false })

    const n = images.length
    const [index, setIndex] = useState(0) // posição "real" (0 até n-1), usada nos pontinhos
    const [edges, setEdges] = useState({ left: 0, right: 0 })

    // 3 cópias da lista: [antes][meio][depois]. A gente vive sempre na do meio.
    // useMemo: os slides não são recriados quando só o "index" muda (re-render barato)
    const slideElements = useMemo(() => {
        const slides = [...images, ...images, ...images]

        return slides.map((image, i) => {
            // As fotos visíveis no início são as da cópia do meio (índices n, n+1, n+2...)
            const isInitial = i >= n && i < n + EAGER_COUNT

            return (
                <div
                    key={`${i}-${image.src}`}
                    aria-hidden={i < n || i >= 2 * n}
                    className="shrink-0 basis-[85%] snap-start px-2 md:basis-1/2 lg:basis-1/3"
                >
                    <img
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes={image.srcSet ? SIZES : undefined}
                        alt={image.alt}
                        loading={isInitial ? "eager" : "lazy"}
                        decoding="async"
                        fetchPriority={i === n ? "high" : "auto"}
                        className="aspect-[4/3] w-full rounded-2xl object-cover"
                    />
                </div>
            )
        })
    }, [images, n])

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

    // Interrompe a animação (usada quando a pessoa toca/rola, ou no resize)
    const cancelAnim = useCallback(() => {
        window.cancelAnimationFrame(rafRef.current)
        animRef.current = null
        if (trackRef.current) trackRef.current.style.scrollSnapType = ""
    }, [])

    // Se o scroll saiu da cópia do meio, volta para a posição equivalente nela (sem animação)
    const normalize = useCallback(() => {
        const track = trackRef.current
        const step = stepRef.current
        if (!track || !step) return

        const setWidth = n * step
        const abs = Math.round(track.scrollLeft / step)

        if (abs >= 2 * n) track.scrollLeft -= setWidth
        else if (abs < n) track.scrollLeft += setWidth
    }, [n])

    const onScroll = () => {
        const track = trackRef.current
        const step = stepRef.current
        if (!track || !step) return

        const abs = Math.round(track.scrollLeft / step)
        const real = ((abs % n) + n) % n

        // Só atualiza o estado quando a foto realmente mudou (evita re-render a cada frame)
        if (real !== indexRef.current) {
            indexRef.current = real
            setIndex(real)
        }

        // Só "teleporta" quando o scroll parou (para o caso de arrastar com o dedo)
        window.clearTimeout(settleTimer.current)
        settleTimer.current = window.setTimeout(normalize, 120)
    }

    // Animação própria (requestAnimationFrame) em vez do scroll "smooth" do navegador.
    // Durante a animação o snap é desligado, senão ele briga com o movimento e dá o "tranco".
    const animateTo = useCallback(
        (target: number) => {
            const track = trackRef.current
            if (!track) return

            window.cancelAnimationFrame(rafRef.current)

            const from = track.scrollLeft
            const distance = target - from
            if (Math.abs(distance) < 1) return

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            const duration = reduceMotion ? 0 : SLIDE_DURATION
            const startTime = performance.now()

            track.style.scrollSnapType = "none"
            animRef.current = { to: target }

            const tick = (now: number) => {
                const t = duration ? Math.min(1, (now - startTime) / duration) : 1
                track.scrollLeft = from + distance * easeInOutCubic(t)

                if (t < 1) {
                    rafRef.current = window.requestAnimationFrame(tick)
                } else {
                    animRef.current = null
                    normalize() // volta para a cópia do meio no mesmo instante, sem esperar
                    track.style.scrollSnapType = "" // devolve o snap (já está num ponto exato)
                }
            }

            rafRef.current = window.requestAnimationFrame(tick)
        },
        [normalize]
    )

    // Vai para uma posição relativa à atual (+1 = próxima, -1 = anterior)
    const goBy = useCallback(
        (delta: number) => {
            const track = trackRef.current
            const step = stepRef.current
            if (!track || !step) return

            // Se já está animando, conta a partir do destino (cliques rápidos não se perdem)
            const base = animRef.current ? animRef.current.to : track.scrollLeft
            const abs = Math.round(base / step)
            animateTo((abs + delta) * step)
        },
        [animateTo]
    )

    // Vai para uma foto específica (pontinhos), pelo caminho mais curto
    const goTo = (i: number) => {
        let delta = i - indexRef.current
        if (delta > n / 2) delta -= n
        else if (delta < -n / 2) delta += n
        goBy(delta)
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

    // Mede os slides e mantém a posição sempre que o tamanho mudar (resize, bleed, etc.)
    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const sync = () => {
            const slide = track.firstElementChild as HTMLElement | null
            if (!slide) return

            cancelAnim()
            stepRef.current = slide.getBoundingClientRect().width
            track.scrollLeft = (n + indexRef.current) * stepRef.current
        }

        const observer = new ResizeObserver(sync)
        observer.observe(track)
        if (track.firstElementChild) observer.observe(track.firstElementChild)

        return () => observer.disconnect()
    }, [n, cancelAnim])

    // Margens do modo "bleed"
    useEffect(() => {
        measureEdges()
        window.addEventListener("resize", measureEdges)
        return () => window.removeEventListener("resize", measureEdges)
    }, [measureEdges])

    useEffect(() => {
        startAutoplay()
        return () => window.clearInterval(timerRef.current)
    }, [startAutoplay])

    useEffect(
        () => () => {
            window.clearTimeout(settleTimer.current)
            window.cancelAnimationFrame(rafRef.current)
        },
        []
    )

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
            onTouchStart={() => { pauseRef.current.touch = true; cancelAnim() }}
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
                onWheel={cancelAnim}
                style={trackStyle}
                className={`flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${bleed ? "" : "-mx-2"}`}
            >
                {slideElements}
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