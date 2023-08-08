import Link from "next/link"
import React from "react"

type NavbarProps = {
    children?: React.ReactNode
}

function Navbar({ children }: NavbarProps) {
    return (
        <nav className={"flex gap-8 items-center text-white"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/userid/favourites"}>Favourites</Link>
            {children}
        </nav>
    )
}

export default Navbar
