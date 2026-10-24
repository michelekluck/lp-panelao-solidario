import { Link } from "react-router-dom"

export type MenuItem = { label: string; to?: string; href?: string }

type MenuLinkProps = {
    item: MenuItem
    className?: string
    onClick?: () => void
}

function MenuLink({ item, className, onClick }: MenuLinkProps) {
    if (item.to) {
        return <Link to={item.to} className={className} onClick={onClick}>{item.label}</Link>
    }

    return <a href={item.href} className={className} onClick={onClick}>{item.label}</a>
}

export default MenuLink