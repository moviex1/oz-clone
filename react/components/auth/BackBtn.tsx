"use client"
import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"
import React from "react"

type Props = {
    className?: string
}

const BackBtn = ({ className }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.back()}
            className={"cursor-pointer" + " " + className}
        >
            <BiArrowBack />
        </div>
    )
}

export default BackBtn
