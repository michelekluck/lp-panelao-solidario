import Text from "../components/Text.tsx"
import Button from "../components/Button.tsx"
import Voluntarios from "../assets/images/voluntarios.png"

function Voluntary() {
    return (
        <div className="relative">
            <div className="bg-lightPink bleed-bg mt-12 py-12">
                <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-4">

                    {/* Texto: primeiro no HTML (em cima no mobile), à direita no desktop */}
                    <div className="flex flex-col xl:order-2 xl:w-1/2 xl:p-4">
                        <Text title="Seja voluntário" titleClassName="mb-6 text-left" textClassName="mb-6">
                            Mais do que doar, você também pode doar o seu tempo e fazer parte das ações do Panelão Solidário. Nossos voluntários ajudam na preparação dos alimentos, montagem das marmitas, organização e distribuição das refeições.
                            <br /><br />
                            Não é preciso ter experiência, apenas vontade de ajudar e fazer a diferença. Clique no botão abaixo para entrar em contato conosco, tirar suas dúvidas e receber mais informações sobre como participar das próximas ações.
                            <br /><br />
                            Junte-se a nós e venha transformar solidariedade em ação!
                        </Text>

                        {/* Botão desktop: abaixo do texto */}
                        <div className="hidden xl:flex justify-center mt-12">
                            <Button variant="green">QUERO SER VOLUNTARIO</Button>
                        </div>
                    </div>

                    {/* Imagem: embaixo no mobile, à esquerda no desktop */}
                    <div className="flex justify-center xl:order-1 xl:w-1/2 xl:p-4">
                        <img
                            src={Voluntarios}
                            alt="Voluntária distribuindo marmitas"
                            className="rounded-2xl"
                        />
                    </div>
                </div>

                {/* Botão mobile: abaixo da imagem */}
                <div className="mt-8 flex justify-center xl:hidden">
                    <Button variant="green">QUERO SER VOLUNTARIO</Button>
                </div>
            </div>
        </div>
    )
}

export default Voluntary;