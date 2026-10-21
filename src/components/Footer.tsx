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
        <div className="md:mx-30">
            <div className="mt-12 md:flex">
                <div>
                    <div className="flex gap-2">
                        <Icon className="text-primary w-[50px]"></Icon>
                        <p className="text-heading text-primary font-bold mt-8 text-[24px]">Panelão Solidário</p>
                    </div>
                    <p className="font-body text-fontGrey mt-4 text-left md:w-[298px] md:text-justify">
                        Coletivo voluntário que leva alimentação e roupas para a população em situação de rua.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <img src={FacebookIcon} alt="Facebook" />
                        <img src={InstagramIcon} alt="Instagram" />
                    </div>
                </div>

                <div className="font-body mt-10 md:ml-50 md:mt-8">
                    <nav className="flex flex-col gap-8 md:flex-row md:gap-0">
                        <ul>
                            <p className="font-bold text-[20px] mb-4">Conheça o Panelão</p>
                            {footerItems.slice(0, 4).map((item) =>
                                <li key={item.href} className="mt-4 text-fontGrey">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            )}
                        </ul>

                        <ul className=" md:ml-40 ">
                            <p className="font-bold text-[20px] mb-4">Participe</p>
                            {footerItems.slice(4).map((item) =>
                                <li key={item.href} className="mt-4 text-fontGrey">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            )}
                        </ul>

                        <ul className="md:ml-40">
                            <p className="font-bold text-[20px] mb-4">Contato</p>

                            <li className="flex">
                                <img src={Email} alt="E-mail" />
                                <p className="text-fontGrey ml-4 break-words">email@teste.com.br</p>
                            </li>

                            <li className="flex mt-8">
                                <img src={Telefone} alt="Telefone" />
                                <p className="text-fontGrey ml-4">(41) 0000-0000</p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="border-t mt-12"></div>

            <p className="text-center mt-8 pb-8 text-sm text-fontGrey font-body md:text-base">
                © 2026 Panelão Solidário, Todos os direitos reservados.
            </p>
        </div>
    )
}

export default Footer;