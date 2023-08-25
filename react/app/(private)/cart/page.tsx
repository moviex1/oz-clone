"use client"
import React, { useEffect } from "react"
import { fetchBooks } from "@/redux/booksSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Book } from "@/types/Book"
import CartComponent from "@/components/cart/CartComponent"

export default function Cart() {
    const dispatch = useAppDispatch()
    const status = useAppSelector((state) => state.books.status)
    useEffect(() => {
        dispatch(fetchBooks())
    }, [])
    const shopItems: Book[] = [
        {
            title: "all the light we cannot see",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
            author: "Author",
            src: "",
            votes: 1988288,
            id: 1,
            price: "10",
        },
        {
            title: "all the light we cannot see",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
            author: "Author",
            src: "",
            votes: 1988288,
            id: 1,
            price: "10",
        },
    ]

    if (shopItems[0]) {
        return <CartComponent shopItems={shopItems} />
    } else return <div>Cart is empty</div>
}
