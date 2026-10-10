import Header from "../components/Header"
import Hero from "../components/Hero"
import Numbers from "../components/Numbers"
import About from "../components/About"

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
            </main>
        </>
    )
}

export default Home;