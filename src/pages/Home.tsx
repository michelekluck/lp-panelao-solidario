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

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <section>
                    <Numbers />
                </section>
                <section>
                    <About />
                </section>
                <section>
                    <Donations />
                </section>
                <section>
                    <Pix />
                </section>
                <section>
                    <Voluntary />
                </section>
                <section>
                    <Event />
                </section>
                <section>
                    <FAQ />
                </section>
                <section>
                    <News />
                </section>
            </main>
        </>
    )
}

export default Home;