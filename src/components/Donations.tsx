import Text from "../components/Text.tsx"
import Voluntaria from "../assets/images/voluntaria-distribuindo-marmita.png"
import Button from "../components/Button.tsx"

function Donations() {
    return (
        <div className="relative">
            <div className="bg-lightPurple bleed-bg lg:-mt-70 md:-mt-30 -mt-20 bottom-0 -z-10 lg:-mt-32 pb-12">
                <div className="relative z-10 pt-30 lg:pt-80 md:pt-40 pb-10 xl:flex xl:gap-4 xl:pt-100 xl:items-center">
                    <div className="xl:w-1/2 xl:p-4 flex flex-col">
                        <Text title="Doações" titleClassName="mb-6 text-left" textClassName="mb-6 text-justify">
                            Toda contribuição ajuda o Panelão Solidário a continuar levando refeições e cuidado a quem mais precisa. Você pode apoiar a ONG de diferentes formas: por meio de doações em dinheiro via PIX, alimentos para a preparação das marmitas ou produtos e kits de higiene.
                            <br /> <br />
                            Empresas, instituições e pessoas da comunidade também podem contribuir com doações ou parcerias. Cada gesto, independentemente do tamanho, ajuda a fortalecer nossas ações e ampliar o alcance da solidariedade.
                        </Text>

                        {/* Só aparece no desktop (xl), abaixo do texto */}
                        <div className="hidden xl:flex justify-center mt-12">
                            <Button variant="yellow">QUERO DOAR</Button>
                        </div>
                    </div>

                    <div className="xl:w-1/2 xl:p-4 md:items-center md:flex md:justify-center md:mt-12">
                        <img src={Voluntaria} alt="Voluntária distribuindo marmitas" className="rounded-2xl " />
                    </div>
                </div>

                {/* Só aparece no mobile/tablet, abaixo da imagem */}
                <div className="flex justify-center xl:hidden">
                    <Button variant="yellow">QUERO DOAR</Button>
                </div>
            </div>
        </div>
    )
}

export default Donations;