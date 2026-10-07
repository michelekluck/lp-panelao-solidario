import Voluntarios from "../assets/images/voluntarios-panelao-solidario.jpeg"
import Button from "../components/Button.tsx"

function Hero() {
    return (
        <div>
            <section className="z-10 -mt-21 relative lg:z-0 lg:mt-0 md:h-[100vh] overflow-hidden -mx-4 lg:-mx-[89px]">
                <img
                    src={Voluntarios}
                    alt="Voluntários do Panelão Solidário"
                    className=" 
                                opacity-70 
                                w-full 
                                h-[650px]
                                md:h-full
                                block 
                                object-cover 
                                object-[40%_30%] 
                                lg:object-[center_30%] 
                                "
                ></img>

                <div className="
                                h-[650px]
                                md:h-full 
                                z-20 
                                absolute 
                                inset-0 
                                bg-image"
                >
                </div>

                <div className="
                            text-center 
                            flex 
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
                    <h2 className="
                        text-white
                        mb-12 
                        leading-9 
                        md:leading-[80px]
                        mt-70 
                        md:mt-90
                        font-heading 
                        text-[36px] 
                        md:text-[64px]
                        font-bold
                        "

                    >
                        O futuro começa <br className="md:block lg:hidden" />
                        com um
                        <br className="lg:block" />
                        prato cheio.
                    </h2>

                    <h3 className=" 
                        text-white 
                        text-justify
                        body-text 
                        font-bold
                        md:w-[700px]
                        lg:w-[900px]
                        xl:w-[1054px]
                        md:text-center
                        md:text-justify
                        "
                    >
                        Todos os meses, voluntários se unem para preparar e distribuir refeições para pessoas em situação de vulnerabilidade social. Você também pode fazer parte dessa ação.
                    </h3>

                    <div className="flex gap-12 mt-12">
                        <Button variant="yellow">QUERO DOAR</Button>
                        <Button variant="green">QUERO SER VOLUNTÁRIO</Button>
                    </div>
                </div>

                <div className="md:absolute md:bottom-0 md:left-0 md:z-40 bg-darkYellow w-full h-[18px] lg:h-[58px]"></div>
            </section>
        </div>

    )
}

export default Hero;