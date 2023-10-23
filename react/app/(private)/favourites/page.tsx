import React from "react"
import EmptyList from "@/components/common/EmptyList"
import { Book } from "@/types/Book"
import { fetchBooks } from "@/services/books"
import ShopItem from "@/components/common/ShopItem"
import AddToCart from "@/components/common/AddToCart"
import { ToastContainer } from "react-toastify"

export default async function Favourites() {
    const favourites: Book[] | null = await fetchBooks()

    return (
        <>
            {favourites ? (
                <div className={"flex flex-wrap w-full gap-8 justify-center"}>
                    {favourites.map((item) => (
                        <ShopItem
                            title={item.title}
                            className={"bg-white p-8 w-2/5"}
                            descr={item.description}
                            votes={item.reviews?.length}
                            authors={item.authors}
                            src={item.photos[0].url}
                            isDeletable
                            id={item.id}
                            key={`favourite-${item.id}`}
                        >
                            <div className="flex items-center text-2xl gap-2">
                                <span className="opacity-60">Price:</span>
                                <span className="opacity-60">
                                    {item.price}$
                                </span>
                            </div>
                            <AddToCart />
                        </ShopItem>
                    ))}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            ) : (
                <EmptyList page={"favourites"} />
            )}
        </>
    )
}
