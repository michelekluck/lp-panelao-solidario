import Text from "./Text.tsx"

function EventDay() {
    return (
        <div className="bg-white relative bleed-bg pt-10 pb-30">
            <Text title="Nossos dias de ação" titleClassName="mb-12 text-center" textClassName="text-justify">
                As ações são realizadas no<strong> primeiro domingo de cada mês</strong>, com <strong>início por volta das 12h30 e encerramento às 19h</strong>. Nesse período, os voluntários se reúnem para preparar as marmitas e, posteriormente, realizar a distribuição das refeições.
                <br /><br />
                📍 <strong>LOCAL:</strong> Mesa Solidária Capanema.
                <br />
                <strong>Av. Dr. Dario Lopes dos Santos, 822 – Jardim Botânico, Curitiba – PR</strong>
            </Text>


            <div className="mt-8 w-full overflow-hidden rounded-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0581122417675!2d-49.25622142398349!3d-25.43632063314294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5000c36c2c7%3A0xddc4b4fb39fb70c7!2sMesa%20Solid%C3%A1ria%20Patr%C3%ADcia%20Casillo!5e0!3m2!1spt-BR!2sbr!4v1792260725411!5m2!1spt-BR!2sbr"
                    title="Localização da Mesa Solidária Capanema"
                    className="h-80 w-full border-0 md:h-96"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </div>
        </div>
    )
}

export default EventDay;