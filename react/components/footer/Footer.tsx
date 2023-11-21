import React from "react"
import Navbar from "@/components/common/Navbar"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full flex py-6 px-20 justify-between bg-amber-500">
            <div className={"text-white"}>
                <span>2023</span>
                <Link href={"/"}>Logo</Link>
            </div>
            <Navbar />
        </footer>
    )
}

export default Footer
