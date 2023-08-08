type NavItemProps = {
    title: string
    isActive?: boolean
}

const NavItem = ({ title, isActive }: NavItemProps) => {
    return (
        <button
            className={
                isActive
                    ? "text-start pl-24 py-2" + " activeItem"
                    : "text-start pl-24 py-2"
            }
        >
            {title}
        </button>
    )
}

export default NavItem
