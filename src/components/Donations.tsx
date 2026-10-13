import Text from "../components/Text.tsx"
import Voluntaria from "../assets/images/voluntaria-distribuindo-marmita.png"
import Button from "../components/Button.tsx"

function Donations() {
    return (
        <div className="relative">
            <div className="bg-lightPurple bleed-bg -top-16 bottom-0 -z-10 lg:-top-32">
                <div className="relative z-10 pt-30 pb-10">
                    <Text title="Doações" titleClassName="mb-6 text-center" textClassName="mb-6">
                        Toda contribuição ajuda o Panelão Solidário a continuar levando refeições e cuidado a quem mais precisa. Você pode apoiar a ONG de diferentes formas: por meio de doações em dinheiro via PIX, alimentos para a preparação das marmitas ou produtos e kits de higiene.
                        <br />  <br />
                        Empresas, instituições e pessoas da comunidade também podem contribuir com doações ou parcerias. Cada gesto, independentemente do tamanho, ajuda a fortalecer nossas ações e ampliar o alcance da solidariedade.
                    </Text>

                    <div>
                        <img src={Voluntaria} alt="Voluntária distribuindo marmitas" className="rounded-2xl"></img>
                    </div>

                    <Button variant="yellow">
                        QUERO DOAR
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default Donations;