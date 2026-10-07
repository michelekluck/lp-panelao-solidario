import Menu from "../assets/images/menu.svg"
import { useState } from 'react'
import LogoIcon from "./LogoIcon";

const menuItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Como doar", href: "#doar" },
    { label: "Ser voluntário", href: "#voluntario" },
    { label: "Endereço", href: "#endereco" },
    { label: "Dúvidas frequentes", href: "#faq" },
    { label: "Contato", href: "#contato" }
];

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="mb-[16px]">

            {/* Mobile */}
            <div className="lg:z-0 relative flex justify-between lg:hidden mt-8">
                <button
                    type="button"
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    onClick={() => setOpen!(!open)}
                    className="relative z-40"
                >
                    <img src={Menu} alt="" />
                </button>

                <div className="z-30">
                    <h1 className="tracking-normal font-heading font-bold text-offwhite border-2 border-offwhite rounded-full px-4 py-1">PANELÃO SOLIDÁRIO</h1>
                </div>

                <div className="z-30">
                    <LogoIcon className="text-offwhite" />
                </div>
            </div>

            <nav className="lg:hidden z-30 relative">
                <ul className={`${open ? "flex" : "hidden"} gap-12 py-20 lg:flex text-offwhite w-[60%] fixed left-0 top-0 h-screen flex-col gap-6 p-6 body-text font-bold
                               bg-gradient-to-br from-white/30 via-white/15 to-white/5 backdrop-blur-[39px] border-r border-white/0 `}>
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Mobile */}

            {/* Desktop */}
            <div className="text-black hidden lg:block lg:bg-white xl:mx-[149px]">
                <nav>
                    <ul className="flex justify-between items-center">
                        {menuItems.slice(0, 3).map((item) => (
                            <li key={item.href} className="font-body font-bold">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}

                        <li className="flex text-primary">
                            <LogoIcon />
                            <h1 className="ml-4 font-heading leading-[19px] font-bold text-[16px]">
                                PANELÃO <br />
                                SOLIDÁRIO
                            </h1>
                        </li>

                        {menuItems.slice(3).map((item) => (
                            <li key={item.href} className="font-body font-bold">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Desktop */}
        </header>
    )
}

export default Header;