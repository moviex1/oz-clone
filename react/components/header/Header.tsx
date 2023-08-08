import React from "react"
import Image from "next/image"
import Logo from "@/assets/oz_logo.png"
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import Navbar from "@/components/common/Navbar"

const Header = () => {
    return (
        <header
            className={
                "flex justify-between items-center w-4/5 m-auto py-6 centerX"
            }
        >
            <Link href={"/cart"} className={"flex gap-8 items-center"}>
                <Image
                    src={Logo}
                    alt={"logo"}
                    width={60}
                    height={60}
                    priority={true}
                />
                <FiShoppingCart className={"text-xl"} />
            </Link>
            <Navbar>
                <Link
                    href={"/login"}
                    className={
                        "px-[58px] py-3.5 bg-neutral-100 text-black text-xl rounded-[30px]"
                    }
                >
                    Log in
                </Link>
            </Navbar>
        </header>
    )
}

export default Header
