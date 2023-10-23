"use client"
import React, { useState } from "react"
import Navbar from "@/components/nav/Navbar"
import CustomSelect from "@/components/select/CustomSelect"
import ShopItem from "@/components/common/ShopItem"
import { Book } from "@/types/Book"
import { RiMenuUnfoldLine } from "react-icons/ri"

type Props = {
    books: Book[]
}

const ShopComponent = ({ books }: Props) => {
    const [perPage, setPerPage] = useState(20)
    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            <section className="bg-[#F5F6F8] flex relative gap-10 py-20">
                <Navbar isOpen={isOpen} />
                <div className="flex w-full flex-wrap gap-8 pr-10 justify-center">
                    <div className="flex items-center justify-between w-full">
                        <button
                            className="text-2xl opacity-80 border-[2px] border-white duration-300 hover:border-amber-500 bg-white rounded-lg p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <RiMenuUnfoldLine
                                className={`duration-300 ${
                                    isOpen && "rotate-180"
                                }`}
                            />
                        </button>
                        <CustomSelect />
                    </div>
                    {books.slice(0, perPage).map((item, idx) => (
                        <ShopItem
                            descr={""}
                            votes={undefined}
                            title={item.title}
                            id={item.id}
                            src={item.photos[0].url}
                            authors={item.authors}
                            key={`shop-item-${idx}`}
                            className="w-1/2 xl:w-2/5 bg-white gap-2 p-8 rounded-xl grow"
                        >
                            <div className="flex text-2xl gap-2">
                                <span className="opacity-60">Price:</span>
                                <span className="opacity-60">
                                    {item.price}$
                                </span>
                            </div>
                        </ShopItem>
                    ))}
                    <div className={"flex justify-center w-full"}>
                        {perPage < books.length - 1 && (
                            <button
                                onClick={() => setPerPage((old) => old + 20)}
                                className="bg-amber-500 py-3 rounded-xl px-16 text-white"
                            >
                                Show more
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopComponent
