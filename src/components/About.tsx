
import Text from "../components/Text"
import Voluntarios from "../assets/images/voluntarios-panelao-about.jpeg"

function About() {
    return (
        <div className="relative py-20 mt-12">

            {/* Fundo arredondado que ultrapassa as margens */}
            <div className="absolute top-0 bottom-0 left-1/2 w-screen -translate-x-1/2 overflow-x-clip pointer-events-none">
                <div
                    aria-hidden="true"
                    className="absolute top-0 left-1/2 -translate-x-1/2
                                w-[180vw] h-[1100px] rounded-[50%] bg-lightYellow md:h-[1350px]"
                />
            </div>

            {/* Conteúdo preserva o alinhamento da página */}
            <div className="relative z-10 px-4">
                <Text
                    title="Nossa história, nossa causa"
                    titleClassName="mb-6 mt-4 text-center"
                    textClassName="text-justify"
                >
                    O Panelão Solidário surgiu por volta de 2016 com o intuito de levar comida gostosa e nutritiva para quem precisa. Antes mesmo da fundação dos Mesas Solidárias, o Panelão já estava na ativa distribuindo sopa na Praça Tiradentes. Desde então, o trabalho seguiu ininterrupto, nem a pandemia de COVID-19 foi capaz de nos parar!

                    <br /><br />

                    Em 2022, começamos a cozinhar e servir no Mesa Solidária Patricia Castilho, além das nossas tradicionais marmitas no Mesa Solidária Luz dos Pinhais, que hoje migrou para o BASE.

                    Nosso grupo de voluntários é sempre dos mais divertidos e acolhedores! O Panelão é um grupo de voluntários independente, sem fins lucrativos e sempre pronto para receber todo mundo!

                    <br /><br />
                </Text>

                <button
                    type="button"
                    className="body-text rounded-md bg-primary p-2 text-white"
                >
                    Saiba mais
                </button>

                <div className="flex items-center justify-center">
                    <img
                        src={Voluntarios}
                        alt="Várias pessoas voluntárias do Panelão Solidário usando camiseta vermelha da ONG"
                        className=" md:w-[500px] md:h-[500px] mt-6 h-[370px] w-[370px] rounded-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}

export default About
