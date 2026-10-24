import Carousel from "./Carousel"
import Voluntarios from "../assets/images/voluntarios-entregando-marmita.jpeg"
import Voluntarias from "../assets/images/voluntarias-montando-caixas.jpeg"
import Bolo from "../assets/images/bolo.jpeg"
import Voluntario from "../assets/images/voluntario-cozinhando.jpeg"

const photos = [
    { src: Voluntarios, alt: "Voluntária distribuindo bolo" },
    { src: Voluntarias, alt: "Voluntária montando caixas de marmita" },
    { src: Bolo, alt: "Bolo" },
    { src: Voluntario, alt: "Voluntário cozinhando" }

]

function WhatWeDo() {
    return (
        <div className="lg:my-30 my-20">
            <div className="lg:flex">
                <div className="bleed-bg lg:flex lg:w-1/4 lg:shrink-0 items-center justify-center bg-lightYellow py-12 lg:mr-30">
                    <h2 className="body-title text-center">
                        O que fazemos?
                    </h2>
                </div>
                <div className="min-w-0 flex-1 py-12">
                    <p className="body-text">
                        Todo primeiro domingo do mês distribuímos, em média, 200 marmitas no jantar, no Mesa Solidária Patrícia Castilho e 200 no BASE, chegando a xxx marmitas distribuídas durante o ano todo.
                        <br /><br />
                        As marmitas são sempre acompanhadas de uma sobremesa. No Mesa Solidária Patrícia Castilho, tem sempre um bolo fresquinho perfumando o salão, no BASE distribuímos frutas e paçoquinhas.
                        <br /><br />
                        Tudo é pensado e organizado nos mínimos detalhes pela coordenação do projeto e preparado com muito carinho pelos voluntários, que trabalham animados ao som da nossa playlist colaborativa e muito eclética.
                    </p>
                </div>
            </div>

            <div className="lg:flex lg:mt-12 lg:mb-30">
                <div className="bleed-bg lg:flex lg:w-1/4 lg:shrink-0 items-center justify-center bg-primary py-12 lg:mr-30">
                    <h2 className="body-title [--title-color:#E8C841] text-center">
                        Como fazemos?
                    </h2>
                </div>
                <div className="min-w-0 flex-1 py-12">
                    <p className="body-text">
                        A ação começa muito antes das 12:30 do primeiro domingo de cada mês. Tudo precisa estar em ordem no estoque para a cozinha começar a funcionar: embalagens, guardanapos, copos, colheres, ingredientes não perecíveis, carne, vegetais.
                        <br /><br />
                        Os recursos para isso tudo vêm de doações via pix, de doações de parceiros e do Banco de Alimentos da Secretaria Municipal de Segurança Alimentar e Nutricional da Prefeitura de Curitiba.
                    </p>
                </div>
            </div>

            <Carousel images={photos} bleed />
        </div>
    )
}

export default WhatWeDo