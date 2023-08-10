"use client"
import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
import React from "react"

const BackBtn = () => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.back()}
            className={"p-4 text-2xl cursor-pointer"}
        >
            <BiArrowBack />
        </div>
    )
}

export default BackBtn
