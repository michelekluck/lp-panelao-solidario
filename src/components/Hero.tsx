// import Voluntarios from "../assets/images/voluntarios-panelao-solidario.jpeg"
import Button from "../components/Button.tsx"
import Panelao from "../assets/images/servindo-bolo.webp"

function Hero() {
    return (
        <div>
            {/* A section cresce junto com o conteúdo (min-h em vez de h fixa),
                então em telas baixas nada é cortado pelo overflow-hidden */}
            <section className="
                relative
                z-10
                -mt-22
                lg:z-0
                lg:mt-4
                flex
                flex-col
                min-h-162.5
                md:min-h-screen
                overflow-hidden
                -mx-4
                lg:-mx-22.25"
            >
                {/* Foto de fundo: preenche a section, qualquer que seja a altura */}
                <img
                    src={Panelao}
                    alt="Voluntário servindo bolo."
                    fetchPriority="high"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        opacity-90
                        object-cover
                        object-[70%_10%]
                        lg:object-[center_40%]
                    "
                />

                <div aria-hidden="true" className="absolute inset-0 z-20 bg-image" />

                {/* Degradê escuro no topo: garante leitura do header sobre a foto */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 bg-linear-to-b from-black/60 to-transparent"
                />

                {/* Conteúdo no fluxo normal: fica colado embaixo e empurra a section
                    para cima quando falta espaço. O pt-32 reserva a área do header. */}
                <div className="
                    relative
                    z-30
                    flex
                    flex-1
                    flex-col
                    items-center
                    justify-center
                    text-center
                    mx-4
                    pt-28
                    pb-12
                    md:pt-32
                    md:pb-16"
                >
                    {/* Wrapper: no mobile, o parágrafo segue a largura do título */}
                    <div className="w-fit max-w-full md:w-auto">
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

                    <div className="flex flex-wrap justify-center gap-12 mt-12">
                        <Button variant="yellow" whatsapp="Oi! Gostaria de saber como doar para o Panelão Solidário">QUERO DOAR</Button>
                        <Button variant="green" whatsapp="Oi! Gostaria de saber como faço para ser voluntário no Panelão Solidário">QUERO SER VOLUNTÁRIO</Button>
                    </div>
                </div>

                {/* Faixa amarela: sempre no fim da section */}
                <div className="relative z-40 bg-darkYellow w-full h-[18px] lg:h-[58px]"></div>
            </section>
        </div>
    )
}

export default Hero;