
import Text from "../components/Text"
import Voluntaria_Cozinhhando from "../assets/images/ju-cozinhando.webp"
import Voluntaria_Distribuindo_Bolo from "../assets/images/duda-distribuindo-bolo.webp"
import Marmita from "../assets/images/marmita.webp"
import Carousel from "./Carousel"
import Voluntaria_Distribuindo_marmita from "../assets/images/ju-distribuindo-marmita.webp"
import Montando_marmita from "../assets/images/ju-montando-marmita.webp"
import Servindo_bolo from "../assets/images/servindo-bolo.webp"

const missionPhotos = [
    { src: Voluntaria_Cozinhhando, alt: "Voluntária cozinhando" },
    { src: Voluntaria_Distribuindo_Bolo, alt: "Voluntária distribuindo bolos" },
    { src: Marmita, alt: "Marmita sendo montada" },
    { src: Voluntaria_Distribuindo_marmita, alt: "Marmita sendo distribuida" },
    { src: Montando_marmita, alt: "Marmita sendo montada." },
    { src: Servindo_bolo, alt: "Voluntário distribuindo bolo" }
]

function Mission() {
    return (
        <div className="my-20">
            <Text title="Nossa missão" titleClassName="text-center mb-12" textClassName="text-justify">
                O Panelão Solidário tem como objetivo levar comida de verdade, gostosa e nutritiva para quem precisa. Temos como valores a solidariedade, dignidade, respeito, acolhimento e cuidado.
                < br />< br />
                Acreditamos que o trabalho voluntário vai além da distribuição de marmitas. É um momento de acolhimento, escuta e reconhecimento da humanidade da população em situação de rua. Acreditamos na comida como um ponto de partida para novas possibilidades, como o início de uma construção coletiva de futuro.
            </Text>

            <div className=" mt-12">
                <Carousel images={missionPhotos} bleed></Carousel>
            </div>

        </div>
    )
}

export default Mission;