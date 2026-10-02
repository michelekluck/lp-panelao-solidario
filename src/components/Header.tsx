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
        <header className="bg-black">

        {/* Mobile */}
           <div className="flex justify-between md:hidden">
                <button 
                    type="button" 
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    onClick={() => setOpen!(!open)}
                    >
                    <img src={Menu} alt=""/>
                </button>
                
                <div>
                    <LogoIcon className="text-offwhite"/>
                </div>
           </div>

           <nav className="md:hidden">
                <ul className={`${open ? "" : "hidden"} md:flex text-white`}>
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
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                   ))}

                   <li>
                        <LogoIcon className="text-primary"/>
                   </li>

                   {menuItems.slice(3).map((item) => (
                        <li key={item.href}>
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