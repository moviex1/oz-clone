import NavItem from "@/components/nav/NavItem"
import React from "react"

const Navbar = () => {
    return (
        <nav className="w-[15%] h-full sticky top-8 flex flex-col gap-3 ">
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
