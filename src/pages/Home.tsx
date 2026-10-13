import Header from "../components/Header"
import Hero from "../components/Hero"
import Numbers from "../components/Numbers"
import About from "../components/About"
import Donations from "../components/Donations"

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
            </main>
        </>
    )
}

export default Home;