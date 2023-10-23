import React from "react"
import EmptyCart from "@/assets/empty_cart.png"
import CustomImage from "@/components/common/CustomImage"
import Link from "next/link"

type Props = {
    page: string
}

const EmptyList = ({ page }: Props) => {
    return (
        <div className="flex flex-col gap-8 justify-center items-center h-full">
            <CustomImage width={500} src={EmptyCart.src} alt="empty" />
            <span className="text-4xl opacity-70 font-semibold">
                {page === "cart" ? "Your cart is empty" : "No favourites?"}
            </span>
            <Link
                href={"/shop"}
                className="text-white font-medium rounded-md px-10 py-3 bg-amber-500"
            >
                Continue shopping
            </Link>
        </div>
    )
}

export default EmptyList
