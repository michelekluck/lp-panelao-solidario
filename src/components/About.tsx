import Text from "../components/Text";
import Voluntarios from "../assets/images/montando-marmita2.webp";
import { Link } from "react-router-dom"

function About() {
    return (
        <div className="relative mt-20 md:py-20 py-12 page-in">

            <div
                aria-hidden="true"
                className="bleed-x inset-y-0 overflow-hidden"
            >
                {/* Elipse */}
                <div
                    className="absolute left-1/2 top-0 h-full w-[220%]
                               -translate-x-1/2 rounded-[50%] bg-lightYellow
                               sm:w-[170%] lg:w-[125%] z-10"
                />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 px-4 pt-6 md:pt-0">

                {/* Título centralizado acima */}
                <Text
                    title="Nossa história, nossa causa"
                    titleClassName="mb-8 text-center xl:mb-12 xl:text-[64px] xl:leading-tight"
                    textClassName="hidden"
                >
                    {""}
                </Text>

                {/* Texto e imagem: no xl ficam lado a lado e o conjunto é centralizado */}
                <div className="flex flex-col gap-6 xl:mx-auto xl:max-w-7xl xl:flex-row-reverse xl:items-center xl:justify-center xl:gap-16">

                    {/* Texto e botão */}
                    <div className="min-w-0 xl:max-w-2xl xl:flex-none">
                        <Text
                            title=""
                            textClassName="text-justify xl:text-[22px] xl:leading-relaxed"
                        >
                            O Panelão Solidário surgiu por volta de 2016 com o intuito de levar comida gostosa e nutritiva para quem precisa. Antes mesmo da fundação dos Mesas Solidárias, o Panelão já estava na ativa distribuindo sopa na Praça Tiradentes. Desde então, o trabalho seguiu ininterrupto, nem a pandemia de COVID-19 foi capaz de nos parar!

                            <br /><br />

                            Em 2022, começamos a cozinhar e servir no Mesa Solidária Patricia Castilho, além das nossas tradicionais marmitas no Mesa Solidária Luz dos Pinhais, que hoje migrou para o BASE.

                            Nosso grupo de voluntários é sempre dos mais divertidos e acolhedores! O Panelão é um grupo de voluntários independente, sem fins lucrativos e sempre pronto para receber todo mundo!
                        </Text>

                        <Link
                            to="/about"
                            className="body-text mt-6 inline-block rounded-md bg-primary p-2 text-white cursor-pointer"
                        >
                            SAIBA MAIS
                        </Link>
                    </div>

                    {/* Imagem */}
                    <div className="flex justify-center xl:flex-none">
                        <img
                            src={Voluntarios}
                            alt="Pessoas voluntárias do panelão solidário montando as marmitas que serão distribuidas."
                            className="grayscale h-75 w-75 rounded-full object-cover sm:h-92.5 sm:w-92.5 md:h-112.5 md:w-112.5 lg:w-125 lg:h-125"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;