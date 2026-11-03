// import Voluntarios from "../assets/images/voluntarios-panelao-solidario.jpeg"
import Button from "../components/Button.tsx"
import Panelao from "../assets/images/ju-principal.jpeg"

function Hero() {
    return (
        <div>
            <section className="z-10 -mt-22 relative lg:z-0 lg:mt-4 md:h-screen overflow-hidden -mx-4 lg:-mx-22.25">
                <img
                    src={Panelao}
                    alt="Voluntários do Panelão Solidário"
                    className="
                        opacity-80
                        w-full
                        h-162.5
                        md:h-full
                        block
                        object-cover
                        object-[70%_10%]
                        lg:object-[center_40%]
                    "
                />

                <div className="
                    h-162.5
                    md:h-full
                    z-20
                    absolute
                    inset-0
                    bg-image"
                >
                </div>

                {/* Degradê escuro no topo: garante leitura do header sobre a foto */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 bg-linear-to-b from-black/60 to-transparent"
                />

                <div className="
                    text-center
                    flex-col
                    bottom-90
                    mx-4
                    z-30
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center"
                >
                    {/* Wrapper: no mobile, o parágrafo segue a largura do título */}
                    <div className="w-fit max-w-full mt-100 lg:mt-90 md:w-auto">
                        <h2 className="
                            text-white
                            mb-12
                            leading-10
                            md:leading-20
                            font-heading
                            text-[36px]
                            md:text-[64px]
                            font-bold
                            "
                        >
                            O FUTURO COMEÇA COM UM
                            <br className="lg:block" />
                            PRATO CHEIO.
                        </h2>

                        <h3 className="
                            text-white
                            text-justify
                            body-text
                            font-bold
                            w-0
                            min-w-full
                            mx-auto
                            md:w-175
                            md:min-w-0
                            md:text-center
                            lg:w-225
                            xl:w-263.5
                            "
                        >
                            Todos os meses, voluntários se unem para preparar e distribuir refeições para pessoas em situação de vulnerabilidade social. Você também pode fazer parte dessa ação.
                        </h3>
                    </div>

                    <div className="flex gap-12 mt-12">
                        <Button variant="yellow" whatsapp="Oi! Gostaria de saber como doar para o Panelão Solidário">QUERO DOAR</Button>
                        <Button variant="green" whatsapp="Oi! Gostaria de saber como faço para ser voluntário no Panelão Solidário">QUERO SER VOLUNTÁRIO</Button>
                    </div>
                </div>

                <div className="md:absolute md:bottom-0 md:left-0 md:z-40 bg-darkYellow w-full h-[18px] lg:h-[58px]"></div>
            </section>
        </div>
    )
}

export default Hero;