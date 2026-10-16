import { useState } from "react"
import Text from "../components/Text"
import PixIcon from "../assets/images/pix.svg"
import Copiar from "../assets/images/copiar.svg"
import Vaquinha from "../assets/images/vaquinha.svg"

const CHAVE_PIX = "panelaosolidario2019@gmail.com"

function Pix() {
    const [copiado, setCopiado] = useState(false)

    async function copiar() {
        try {
            await navigator.clipboard.writeText(CHAVE_PIX)
            setCopiado(true)
            setTimeout(() => setCopiado(false), 2000)
        } catch {
            alert("Não foi possivel copiar. Copie manualmente")
        }
    }

    return (
        <div className="flex flex-col items-center mt-12">
            <Text title="Vaquinha do Panelão" titleClassName="text-center">
            </Text>

            <div className="relative w-full xl:w-[1000px] mt-12">
                <div className="bg-lightYellow rounded-2xl shadow-[-8px_-10px_0px_0px_var(--color-primary)] pt-6 px-6 pb-12 lg:px-12 lg:pt-12">
                    <p className="body-text">
                        Sua contribuição pode fazer parte de uma grande corrente de solidariedade. Ao participar da nossa vaquinha por meio do PIX abaixo, você ajuda o Panelão Solidário a adquirir alimentos e manter as ações de preparação e distribuição de marmitas para pessoas em situação de vulnerabilidade social.
                        <br /> <br />
                        Doe o quanto puder. Cada contribuição faz a diferença e ajuda essa iniciativa a continuar acontecendo.
                    </p>

                    <div className="flex flex-col items-center mt-12">
                        <img src={PixIcon} alt="PIX" className="mb-6" />

                        <div className="relative flex gap-4">
                            <p className="body-text font-bold">{CHAVE_PIX}</p>

                            <button onClick={copiar} aria-label="Copiar chave PIX" className="cursor-pointer">
                                <img src={Copiar} alt="" className="md:w-[30px]" />
                            </button>

                            <span
                                className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-xl p-2 body-text font-bold bg-aqua transition-opacity ${copiado ? "opacity-100" : "opacity-0 pointer-events-none"
                                    }`}
                            >
                                Chave copiada!
                            </span>
                        </div>
                    </div>
                </div>

                <img
                    src={Vaquinha}
                    alt=""
                    className="hidden lg:block absolute -bottom-10 -right-10 w-40"
                />
            </div>
        </div>
    )
}

export default Pix;