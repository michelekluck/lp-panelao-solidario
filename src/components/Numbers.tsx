import { useEffect, useRef, useState } from "react"
import Text from "./Text.tsx"
import Card from "./Card.tsx"

// Conta de 0 até "target" quando "start" vira true
function useCountUp(target: number, start: boolean, duration = 2000) {
    const [value, setValue] = useState(0)

    // Quem desativou animações no sistema vê o número final direto
    const reduzMovimento =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches

    useEffect(() => {
        if (!start || reduzMovimento) return

        let frame = 0
        const inicio = performance.now()

        const tick = (agora: number) => {
            const progresso = Math.min((agora - inicio) / duration, 1)
            const suavizado = 1 - Math.pow(1 - progresso, 3) // começa rápido e desacelera no fim
            setValue(Math.round(target * suavizado))

            if (progresso < 1) frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [target, start, duration, reduzMovimento])

    if (reduzMovimento) return start ? target : 0
    return value
}

function Numbers() {
    const cardsRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    // Dispara uma vez, quando os cards aparecem na tela
    useEffect(() => {
        const el = cardsRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const marmitas = useCountUp(600, visible, 4000)
    const acoes = useCountUp(60, visible, 3000)
    const voluntarios = useCountUp(100, visible, 3500)

    return (
        <>
            <Text
                title="Uma história feita por muitas mãos"
                titleClassName="mb-6 lg:mt-20 mt-12"
                textClassName="text-justify"
            >
                Cada marmita, cada ação e cada pessoa envolvida faz parte de uma mesma história: a de uma comunidade que escolheu transformar solidariedade em atitude.
            </Text>

            <div ref={cardsRef} className="md:flex md:gap-4 lg:mt-30 mt-24">
                <Card variant="red" title={`+${marmitas}`} className="mt-16 md:mt-0">
                    Marmitas distribuidas em 2026
                </Card>

                <Card variant="yellow" title={`+${acoes}`}>
                    Ações realizadas desde 2021
                </Card>

                <Card variant="yellow" title={`+${voluntarios}`}>
                    Voluntários envolvidos
                </Card>
            </div>
        </>
    )
}

export default Numbers;