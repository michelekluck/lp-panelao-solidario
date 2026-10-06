import Voluntarios from "../assets/images/voluntarios-panelao-solidario.jpeg"
import Button from "../components/Button.tsx"

function Hero() {
    return (
        <div>
            <section className="z-10 -mt-21 relative md:z-0 md:mt-0 h-[100vh] overflow-hidden -mx-4">
                <img
                    src={Voluntarios}
                    alt="Voluntários do Panelão Solidário"
                    className="opacity-70 w-full h-full block object-cover object-[40%_30%] md:object-[center_30%] "
                ></img>

                <div className="z-20 absolute inset-0 bg-image"></div>

                <div className="text-center not-visited:flex flex-col bottom-90 mx-4 z-30 absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white mb-12 leading-9 mt-70 font-heading text-[36px] font-bold">
                        O futuro começa com um prato cheio.
                    </h2>

                    <h3 className=" text-white not-odd:text-justify body-text font-bold">
                        Todos os meses, voluntários se unem para preparar e distribuir refeições para pessoas em situação de vulnerabilidade social. Você também pode fazer parte dessa ação.
                    </h3>

                    <div className="flex gap-4">
                        <Button variant="yellow">QUERO DOAR</Button>
                        <Button variant="green">QUERO SER VOLUNTÁRIO</Button>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Hero;