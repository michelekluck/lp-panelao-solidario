import Menu from "../assets/images/menu.svg"
import { useState } from 'react'
import LogoIcon from "./LogoIcon";

const menuItems = [
    {label: "Sobre", href: "#sobre"},
    {label: "Como doar", href: "#doar"},
    {label: "Ser voluntário", href: "#voluntario"},
    {label: "Endereço", href: "#endereco"},
    {label: "Dúvidas frequentes", href: "#faq"},
    {label: "Contato", href: "#contato"}
];

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="">

        {/* Mobile */}
           <div className="flex justify-between md:hidden bg-black">
                <button 
                    type="button" 
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    onClick={() => setOpen!(!open)}
                    className="relative z-50"
                    >
                    <img src={Menu} alt=""/>
                </button>

                <div>
                    <h1 className="tracking-normal font-heading font-bold text-offwhite border-2 border-offwhite rounded-full px-4 py-1">PANELÃO SOLIDÁRIO</h1>
                </div>
                
                <div>
                    <LogoIcon className="text-offwhite"/>
                </div>
           </div>

           <nav className="md:hidden">
                <ul className={`${open ? "flex" : "hidden"} md:flex text-offwhite bg-black w-1/2 fixed left-0 top-0 h-screen flex-col gap-6 p-6 mt-10 font-body font-bold`}>
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
           </nav>
        {/* Mobile */}

        {/* Desktop */}
           <div className="text-black hidden md:block md:bg-white">
            <nav>
                <ul className="flex justify-between items-center">
                   {menuItems.slice(0,3).map((item) =>(
                        <li key={item.href} className="font-body font-bold">
                            <a href={item.href}>{item.label}</a>
                        </li>
                   ))}

                   <li className="flex text-primary">
                        <LogoIcon/>
                        <h1 className="ml-4 font-heading leading-[19px] font-bold text-[16px]">
                            PANELÃO <br/> 
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