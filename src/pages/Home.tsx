import { useLayoutEffect } from "react"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Numbers from "../components/Numbers"
import About from "../components/About"
import Donations from "../components/Donations"
import Pix from "../components/Pix"
import Voluntary from "../components/Voluntary"
import Event from "../components/EventDay"
import FAQ from "../components/FAQ"
import News from "../components/NewsSection"
import Instagram from "../components/Instagram"
import Footer from "../components/Footer"

function Home() {
    useLayoutEffect(() => {
        const hash = window.location.hash

        // Sem âncora na URL: abre no topo
        if (!hash) {
            window.scrollTo({ top: 0, behavior: "instant" })
            return
        }

        // Com âncora (/#doar): rola até a seção
        const irParaSecao = () =>
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" })

        irParaSecao()

        // Repete uma vez logo depois, porque imagens que ainda carregam mudam a altura da página
        const timer = setTimeout(irParaSecao, 300)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Header />
            <main className="page-in">
                <Hero />
                <section id="numeros">
                    <Numbers />
                </section>
                <section>
                    <About />
                </section>
                <section id="doar">
                    <Donations />
                </section>
                <section>
                    <Pix />
                </section>
                <section id="voluntario">
                    <Voluntary />
                </section>
                <section id="endereco">
                    <Event />
                </section>
                <section id="faq">
                    <FAQ />
                </section>
                <section>
                    <News />
                </section>
                <section>
                    <Instagram />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;