import Text from "../components/Text";
import Voluntarios from "../assets/images/voluntarios-panelao-about.jpeg";

function About() {
    return (
        <div className="relative mt-12 md:py-20 py-12">

            {/* Camada de fundo: ocupa a seção + a margem do body dos dois lados */}
            <div
                aria-hidden="true"
                className="bleed-x inset-y-0 overflow-hidden"
            >
                {/* Elipse */}
                <div
                    className="absolute left-1/2 top-0 h-full w-[220%]
                               -translate-x-1/2 rounded-[50%] bg-lightYellow
                               sm:w-[170%] lg:w-[125%]"
                />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 px-4">

                {/* Título centralizado acima */}
                <Text
                    title="Nossa história, nossa causa"
                    titleClassName="mb-8 text-center"
                    textClassName="hidden"
                >
                    {""}
                </Text>

                {/* Texto e imagem */}
                <div className="flex flex-col gap-6 xl:flex-row-reverse xl:items-center xl:gap-12">

                    {/* Texto e botão */}
                    <div className="min-w-0 xl:flex-1">
                        <Text
                            title=""
                            textClassName="text-justify"
                        >
                            O Panelão Solidário surgiu por volta de 2016 com o intuito de levar comida gostosa e nutritiva para quem precisa. Antes mesmo da fundação dos Mesas Solidárias, o Panelão já estava na ativa distribuindo sopa na Praça Tiradentes. Desde então, o trabalho seguiu ininterrupto, nem a pandemia de COVID-19 foi capaz de nos parar!

                            <br /><br />

                            Em 2022, começamos a cozinhar e servir no Mesa Solidária Patricia Castilho, além das nossas tradicionais marmitas no Mesa Solidária Luz dos Pinhais, que hoje migrou para o BASE.

                            Nosso grupo de voluntários é sempre dos mais divertidos e acolhedores! O Panelão é um grupo de voluntários independente, sem fins lucrativos e sempre pronto para receber todo mundo!
                        </Text>

                        <button
                            type="button"
                            className="body-text mt-6 rounded-md bg-primary p-2 text-white cursor-pointer"
                        >
                            Saiba mais
                        </button>
                    </div>

                    {/* Imagem */}
                    <div className="flex justify-center ">
                        <img
                            src={Voluntarios}
                            alt="Várias pessoas voluntárias do Panelão Solidário usando camiseta vermelha da ONG"
                            className="h-[300px] w-[300px] rounded-full object-cover sm:h-[370px] sm:w-[370px] md:h-[450px] md:w-[450px] lg:w-[500px] lg:h-[500px]"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;