"use client"
import { BsSearch } from "react-icons/bs"
import React, { useState } from "react"

const Searchbar = () => {
    const [value, setValue] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={"w-fit bg-neutral-100 flex items-center"}
        >
            <button className={"p-4 text-xl"}>
                <BsSearch />
            </button>
            <input
                type="text"
                className="w-96 placeholder:text-[#0000004D] h-14 bg-neutral-100"
                placeholder="search book..."
                value={value}
                onChange={(e) => handleInput(e)}
            />
        </form>
    )
}

export default Searchbar
