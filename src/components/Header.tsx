import Menu from "../assets/images/menu.svg"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import LogoIcon from "./LogoIcon";

type MenuItem = { label: string; to?: string; href?: string }

const baseItems: MenuItem[] = [
    { label: "Como doar", href: "#doar" },
    { label: "Ser voluntário", href: "#voluntario" },
    { label: "Endereço", href: "#endereco" },
    { label: "Dúvidas frequentes", href: "#faq" },
    { label: "Contato", href: "#contato" }
];

type MenuLinkProps = {
    item: MenuItem
    className?: string
    onClick?: () => void
}

// Renderiza <Link> (troca de página) quando o item tem "to", e <a> (âncora) quando tem "href"
function MenuLink({ item, className, onClick }: MenuLinkProps) {
    if (item.to) {
        return <Link to={item.to} className={className} onClick={onClick}>{item.label}</Link>
    }

    return <a href={item.href} className={className} onClick={onClick}>{item.label}</a>
}

function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()

    const isHome = pathname === "/"
    const menuItems: MenuItem[] = [
        isHome ? { label: "Sobre", to: "/about" } : { label: "Home", to: "/" },
        ...baseItems
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)

        onScroll() // confere o estado inicial (ex.: página recarregada já rolada)
        window.addEventListener("scroll", onScroll, { passive: true })

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div
            className={`bleed-bg sticky top-4 z-50 mb-[16px]
                before:-top-16 before:-bottom-4
                before:bg-gradient-to-br before:from-primary/70 before:via-black/55 before:to-black/40
                before:backdrop-blur-[39px]
                before:transition-opacity before:duration-300
                lg:before:bg-none lg:before:bg-white lg:before:backdrop-blur-none lg:before:opacity-100
                ${scrolled ? "before:opacity-100" : "before:opacity-0"}`}
        >

            {/* Mobile: barra do header (fica sempre no mesmo lugar, acima do menu) */}
            <div className="relative z-40 mt-8 flex items-center justify-between text-offwhite lg:hidden [text-shadow:0_1px_8px_rgb(0_0_0/0.5)]">
                <Link to="/" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <div className="flex items-center gap-3">
                        <LogoIcon className="text-offwhite" />
                        <p className="font-heading font-bold text-[16px] leading-[19px]">
                            PANELÃO <br />
                            SOLIDÁRIO
                        </p>
                    </div>
                </Link>

                <button
                    type="button"
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    aria-controls="menu-mobile"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-7 w-7">
                            <path d="M5 5l14 14M19 5L5 19" />
                        </svg>
                    ) : (
                        <img src={Menu} alt="" />
                    )}
                </button>
            </div>

            {/* Mobile: fundo escurecido (clicar fecha o menu) */}
            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 lg:hidden
                    ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            {/* Mobile: menu lateral, desliza por baixo da barra do header */}
            <nav
                id="menu-mobile"
                className={`fixed -left-4 -top-4 z-30 h-[calc(100vh+2rem)] w-[calc(75%+1rem)] max-w-[21rem] pl-[calc(var(--page-margin)+1rem)] pr-6 pt-[9rem] text-offwhite lg:hidden
                    bg-gradient-to-br from-primary/70 via-black/55 to-black/40 backdrop-blur-[39px]
                    transition-all duration-300
                    ${open ? "visible translate-x-0" : "invisible -translate-x-full"}`}
            >
                <ul className="flex flex-col gap-6 body-text font-bold">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <MenuLink item={item} onClick={() => setOpen(false)} />
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Mobile */}

            {/* Desktop: fundo branco, texto preto e logo vermelha */}
            <div className="relative hidden text-black lg:block xl:mx-[149px]">
                <nav>
                    <ul className="flex items-center justify-between">
                        {menuItems.slice(0, 3).map((item) => (
                            <li key={item.label} className="font-body font-bold">
                                <MenuLink item={item} className="transition-opacity hover:opacity-80" />
                            </li>
                        ))}

                        <li>
                            <Link to="/" className="flex items-center" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                                <LogoIcon className="text-primary" />
                                <span className="ml-4 font-heading leading-[19px] font-bold text-[16px] text-primary">
                                    PANELÃO <br />
                                    SOLIDÁRIO
                                </span>
                            </Link>
                        </li>

                        {menuItems.slice(3).map((item) => (
                            <li key={item.label} className="font-body font-bold">
                                <MenuLink item={item} className="transition-opacity hover:opacity-80" />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Desktop */}
        </div>
    )
}

export default Header;