import React from "react"
import Navbar from "@/components/nav/Navbar"
import ShopItem from "@/components/common/ShopItem"
import CustomSelect from "@/components/select/CustomSelect"
import { Book } from "@/types/Book"
import ShopComponent from "@/components/shop/ShopComponent"
import { fetchBooks } from "@/services/books"

export default async function Shop() {
    const books: Book[] = await fetchBooks(50)

    return <ShopComponent books={books} />
}
