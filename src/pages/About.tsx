
import { Link } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header"
import HeroAbout from "../components/HeroAbout";

function About() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <HeroAbout />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;