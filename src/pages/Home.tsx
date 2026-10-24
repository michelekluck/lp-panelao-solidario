import { Link } from 'react-router-dom';

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
    return (
        <>
            <Header />
            <main>
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