
import Text from "../components/Text"
import Ju from "../assets/images/voluntaria-chef.jpeg"
import Duda from "../assets/images/voluntaria-duda.jpeg"
import Marmita from "../assets/images/marmita.jpeg"
import Carousel from "./Carousel"
import Teste from "../assets/images/voluntaria-distribuindo-marmita.png"

const missionPhotos = [
    { src: Ju, alt: "Voluntária cozinhando" },
    { src: Duda, alt: "Voluntária distribuindo bolos" },
    { src: Marmita, alt: "Marmita sendo montada" },
    { src: Teste, alt: "Marmita sendo montada" },
]

function Mission() {
    return (
        <div className="mt-[80px]">
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