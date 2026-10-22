import Icon from "./Icon"
import FacebookIcon from "../assets/images/facebook.svg"
import InstagramIcon from "../assets/images/instagram.svg"
import Email from "../assets/images/email.svg"
import Telefone from "../assets/images/telefone.svg"

const footerItems = [
    { label: "Sobre o Panelão", href: "#sobre" },
    { label: "Nossas ações", href: "#acoes" },
    { label: "Números", href: "#numeros" },
    { label: "Dúvidas frequentes", href: "#faq" },
    { label: "Quero doar", href: "#doar" },
    { label: "Quero ser voluntário", href: "#voluntario" },
    { label: "Seja um parceiro", href: "#parceiro" },
    { label: "Endereço", href: "#endereco" }
]

function Footer() {
    return (
        <div className="xl:mx-10 2xl:mx-30" id="contato">
            {/* Abaixo de xl: tudo empilhado e centralizado. Em xl: logo à esquerda, links à direita */}
            <div className="mt-12 flex flex-col items-center gap-10 text-center xl:flex-row xl:items-start xl:justify-between xl:text-left">

                {/* Logo, descrição e redes sociais */}
                <div className="flex flex-col items-center xl:items-start">
                    <div className="flex gap-2">
                        <Icon className="text-primary w-[50px]"></Icon>
                        <p className="text-heading text-primary font-bold mt-8 text-[24px]">Panelão Solidário</p>
                    </div>
                    <p className="font-body text-fontGrey mt-4 max-w-md xl:w-[298px] xl:text-justify">
                        Coletivo voluntário que leva alimentação e roupas para a população em situação de rua.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <img src={FacebookIcon} alt="Facebook" className="w-[40px]" />
                        <img src={InstagramIcon} alt="Instagram" className="w-[40px]" />
                    </div>
                </div>

                {/* Links: 1 coluna (mobile), 3 colunas (md), linha com espaçamento (xl) */}
                <nav className="font-body grid w-full gap-10 md:grid-cols-3 md:gap-8 xl:mt-8 xl:flex xl:w-auto xl:gap-16 2xl:gap-24">
                    <div>
                        <h3 className="font-bold text-[20px] mb-4">Conheça o Panelão</h3>
                        <ul>
                            {footerItems.slice(0, 4).map((item) =>
                                <li key={item.href} className="mt-8 md:mt-4 text-fontGrey">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-[20px] mb-4">Participe</h3>
                        <ul>
                            {footerItems.slice(4).map((item) =>
                                <li key={item.href} className="mt-8 md:mt-4 text-fontGrey">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-[20px] mb-4">Contato</h3>
                        <ul>
                            <li className="flex items-center justify-center xl:justify-start">
                                <img src={Email} alt="E-mail" className="w-[20px] shrink-0" />
                                <p className="text-fontGrey ml-4 min-w-0 break-words">email@teste.com.br</p>
                            </li>

                            <li className="flex items-center justify-center mt-8 xl:justify-start">
                                <img src={Telefone} alt="Telefone" className="w-[20px] shrink-0" />
                                <p className="text-fontGrey ml-4">(41) 0000-0000</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="border-t mt-12"></div>

            <p className="text-center mt-8 pb-8 text-sm text-fontGrey font-body xl:text-base">
                © 2026 Panelão Solidário, Todos os direitos reservados.
            </p>
        </div>
    )
}

export default Footer;