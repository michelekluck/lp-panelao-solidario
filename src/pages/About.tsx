
import { Link } from 'react-router-dom';

import Footer from "../components/Footer";
import Header from "../components/Header"
import HeroAbout from "../components/HeroAbout";
import Mission from '../components/Mission';
import WhatWeDo from '../components/WhatWeDo';

function About() {
    return (
        <>
            <Header />
            <main>
                <section>
                    <HeroAbout />
                </section>
                <section>
                    <Mission />
                </section>
                <section>
                    <WhatWeDo />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;