import Text from "./Text.tsx"
import Card from "./Card.tsx"

function Numbers() {
    return (
        <>
            <Text
                title="Uma história feita por muitas mãos"
                titleClassName="mb-6 mt-6"
                textClassName="text-justify"
            >
                Cada marmita, cada ação e cada pessoa envolvida faz parte de uma mesma história: a de uma comunidade que escolheu transformar solidariedade em atitude.
            </Text>

            <div className="md:flex md:gap-4 mt-24">
                <Card variant="red" title="+600" className="mt-16 md:mt-0">
                    Marmitas distribuidas em 2026
                </Card>

                <Card variant="yellow" title="+60">
                    Ações realizadas desde 2021
                </Card>

                <Card variant="yellow" title="+100">
                    Voluntários envolvidos
                </Card>
            </div>



        </>
    )
}

export default Numbers; 