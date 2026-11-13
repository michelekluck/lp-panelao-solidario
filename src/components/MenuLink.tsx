import { Link } from "react-router-dom"

export type MenuItem = { label: string; to?: string; href?: string }

type MenuLinkProps = {
    item: MenuItem
    className?: string
    onClick?: () => void
}

// "/lp-panelao-solidario/" no site publicado, "/" no desenvolvimento local
const base = import.meta.env.BASE_URL

// Coloca o "base" na frente de caminhos internos (ex.: "/#faq").
// Links externos, âncoras simples (#faq) e caminhos que já têm o base passam direto.
function resolverHref(href: string) {
    if (/^(https?:|mailto:|tel:)/.test(href)) return href
    if (href.startsWith("#")) return href
    if (href.startsWith(base)) return href
    if (href.startsWith("/")) return `${base}${href.slice(1)}`
    return href
}

function MenuLink({ item, className, onClick }: MenuLinkProps) {
    if (item.to) {
        return <Link to={item.to} className={className} onClick={onClick}>{item.label}</Link>
    }

    return <a href={item.href ? resolverHref(item.href) : undefined} className={className} onClick={onClick}>{item.label}</a>
}

export default MenuLink