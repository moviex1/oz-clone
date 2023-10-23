import React from "react"
import CartComponent from "@/components/cart/CartComponent"
import { Book } from "@/types/Book"
import { fetchBooks } from "@/services/books"

export default async function Cart() {
    const shopItems: Book[] | null = await fetchBooks()

    return <CartComponent shopItems={shopItems} />
}
