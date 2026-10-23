import Voluntario from "../assets/images/voluntario.png"

function HeroAbout() {
    return (
        <div className="-mx-[var(--page-margin)] flex flex-col overflow-hidden lg:flex-row -mt-22 lg:mt-4">
            <div className="bg-lightYellow px-[var(--page-margin)] py-12 lg:w-1/2">
                <h1 className="hero-title text-primary ">
                    Nossa história, <br className="hidden lg:block" />nossa causa
                </h1>
                <p className="body-text mt-8 text-justify">
                    O Panelão Solidário surgiu por volta de 2016 com o intuito de levar comida gostosa e nutritiva para quem precisa. Antes mesmo da fundação dos Mesas Solidárias, o Panelão já estava na ativa distribuindo sopa na Praça Tiradentes. Desde então, o trabalho seguiu ininterrupto, nem a pandemia de COVID-19 foi capaz de nos parar!
                    <br /><br />
                    Em 2022, começamos a cozinhar e servir no Mesa Solidária Patricia Castilho, além das nossas tradicionais marmitas no Mesa Solidária Luz dos Pinhais, que hoje migrou para o BASE.
                    Nosso grupo de voluntários é sempre dos mais divertidos e acolhedores! O Panelão é um grupo de voluntários independente, sem fins lucrativos e sempre pronto para receber todo mundo!
                </p>
            </div>


            <div className="relative order-first min-h-[300px] lg:order-none lg:w-1/2">
                <img
                    src={Voluntario}
                    alt="Voluntários do Panelão Solidário"
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 z-20 bg-image" />
            </div>
        </div>
    )
}

export default HeroAbout;