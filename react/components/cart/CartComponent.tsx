import React from "react"
import ShopItem from "@/components/common/ShopItem"
import { Book } from "@/types/Book"

type Props = {
    shopItems: Book[]
}

const CartComponent = ({ shopItems }: Props) => {
    const totalPrice: number = shopItems.reduce(
        (a, b) => a + Number(b.price),
        0
    )

    return (
        <div className="flex gap-12 justify-between w-4/5 mx-auto">
            <div className="flex flex-wrap gap-y-12 w-4/6 gap-x-8 rounded-2xl">
                {shopItems.map((item, idx) => (
                    <ShopItem
                        descr={""}
                        votes={null}
                        title={item.title}
                        id={item.id}
                        src={item.src}
                        author={item.author}
                        key={`cart-item-${idx}`}
                        className={"w-2/5 bg-white p-8 rounded-xl grow"}
                    >
                        <div className="flex text-2xl gap-2">
                            <span className="opacity-60">Price:</span>
                            <span className="opacity-60">{item.price}$</span>
                        </div>
                    </ShopItem>
                ))}
            </div>
            <div className="flex flex-col bg-white p-8 rounded-xl gap-8 w-2/6 h-fit">
                <h1 className="w-full text-5xl text-semibold">Cart</h1>
                {shopItems.map((item, idx) => (
                    <div
                        key={`price-${idx}`}
                        className="flex gap-2 justify-between"
                    >
                        <span className="capitalize">{item.title}</span>
                        <span>{item.price}$</span>
                    </div>
                ))}
                <div className="flex gap-2 justify-between">
                    <span className="text-3xl">Total:</span>
                    <span className="text-3xl">{totalPrice}$</span>
                </div>
                <button className="w-full p-3 text-white bg-amber-500 rounded-lg font-medium">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default CartComponent
