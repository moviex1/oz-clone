import React from "react"
import Image from "next/image"
import Logo from "@/assets/oz_logo.png"
import { FiShoppingCart } from "react-icons/fi"
import Link from "next/link"
import Navbar from "@/components/common/Navbar"

const Header = () => {
    return (
        <header className="flex justify-between h-[110px] items-center overflow-hidden w-4/5 m-auto py-6">
            <div className="absolute top-0 right-0 h-full -z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="863"
                    height="100%"
                    viewBox="0 0 664 613"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M94.1837 414.532C31.9823 508.827 37.7751 588.038 159.457 613H664.931V0H47.1093C-128.228 169.823 258.575 165.322 94.1837 414.532Z"
                        fill="#FF971D"
                    />
                </svg>
            </div>
            <div className={"flex gap-8"}>
                <Link href={"/"}>
                    <Image
                        src={Logo}
                        alt={"logo"}
                        width={60}
                        height={60}
                        priority={true}
                    />
                </Link>
                <Link href={"/cart"} className="flex gap-8 items-center">
                    <FiShoppingCart className="text-xl" />
                </Link>
            </div>
            <Navbar>
                <Link
                    href={"/signin"}
                    className="px-[58px] py-3.5 bg-neutral-100 text-black text-xl rounded-[30px]"
                >
                    Log in
                </Link>
            </Navbar>
        </header>
    )
}

export default Header
