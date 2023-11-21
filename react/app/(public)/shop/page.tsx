import React from "react"
import Navbar from "@/components/nav/Navbar"
import ShopItem from "@/components/common/ShopItem"
import CustomSelect from "@/components/select/CustomSelect"

export default function Shop() {
    return (
        <>
            <section className="bg-[#F5F6F8] flex relative gap-20 py-20">
                <Navbar />
                <div className={"flex w-full flex-wrap gap-8 justify-center"}>
                    <CustomSelect />
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        }
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        }
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        }
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        }
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <ShopItem
                        id={1}
                        className={"bg-white rounded-xl p-8"}
                        title={"All The Light We Cannot See"}
                        descr={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                        }
                        votes={1994153}
                        author={"Author"}
                        src={""}
                    >
                        <button className={"btn p-2 rounded-xl w-4/5"}>
                            Buy Now
                        </button>
                    </ShopItem>
                    <div className={"flex justify-center w-full"}>
                        <button className="bg-amber-500 py-3 rounded-xl px-16 text-white">
                            Show more
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
