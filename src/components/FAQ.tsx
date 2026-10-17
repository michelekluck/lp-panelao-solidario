import { useState } from "react";

const perguntas = [
    { question: "Como posso me tornar voluntário?", answer: "Para se tornar voluntário, basta comparecer ao local no horário da ação e informar que deseja participar como voluntário. Se tiver alguma dúvida, entre em contato conosco pelo WhatsApp: [número de contato]." },
    { question: "Preciso ter experiência na cozinha para participar?", answer: "Não! Você não precisa ter experiência na cozinha para participar. Toda ajuda é bem-vinda e você pode contribuir de diferentes formas durante as ações." },
    { question: "Como posso fazer uma doação em dinheiro?", answer: "Você pode contribuir com o Panelão Solidário por meio de uma doação via PIX! Basta utilizar a nossa chave PIX: panelaosolidario2019@gmail.com. Toda contribuição faz a diferença e nos ajuda a continuar esse trabalho." },
    { question: "Quais alimentos e produtos posso doar?", answer: "Para saber quais alimentos e produtos estamos precisando no momento, entre em contato conosco pelo WhatsApp: [número de contato]. Assim, podemos orientar você sobre as principais necessidades da ONG e como sua doação pode contribuir com nossas ações." },
    { question: "Como faço para entregar uma doação?", answer: "Para combinar a entrega da sua doação, entre em contato conosco pelo WhatsApp: [número de contato]. Assim, podemos orientar você sobre a melhor forma de realizar a entrega" },
    { question: "Como posso acompanhar as próximas ações?", answer: "Você pode acompanhar as próximas ações pelas publicações no nosso Instagram, [@instagram]. Se quiser receber as informações diretamente, entre em contato pelo WhatsApp: [número de contato], para solicitar sua entrada no grupo de voluntários, onde compartilhamos os detalhes das próximas ações" },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="mt-24 relative">
            <h2 className="body-title mb-12 text-center">Dúvidas frequentes</h2>

            {perguntas.map((item, index) => {
                const open = openIndex === index

                return (
                    <div key={item.question} className="border-b border-gray-300 body-text bg-white px-6 rounded-2xl">
                        <button
                            type="button"
                            onClick={() => setOpenIndex(open ? null : index)}
                            aria-expanded={open}
                            className="flex w-full items-center justify-between py-4 text-left font-semibold"
                        >
                            {item.question}
                            <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
                        </button>

                        <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                            <div className="overflow-hidden">
                                <p className="pb-4">{item.answer}</p>
                            </div>
                        </div>
                    </div>

                )
            })}
        </section>
    )
}

export default FAQ;