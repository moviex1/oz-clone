import NavItem from "@/components/nav/NavItem"
import React from "react"

type Props = {
    isOpen: boolean
}

const Navbar = ({ isOpen }: Props) => {
    return (
        <nav
            className={`h-full sticky top-8 flex flex-col gap-3 ${
                isOpen ? "sm:max-xl:w-2/5 xl:w-1/5" : "w-0"
            } overflow-hidden duration-300`}
        >
            <h2 className={"font-semibold text-xl pl-20 py-2"}>
                Book by Genre
            </h2>
            <NavItem title={"All Genres"} isActive={true} />
            <NavItem title={"Science"} />
            <NavItem title={"Fantasy"} />
            <NavItem title={"Business"} />
            <NavItem title={"Philosophy"} />
            <NavItem title={"Biography"} />
        </nav>
    )
}

export default Navbar
