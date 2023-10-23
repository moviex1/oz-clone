import CustomImage from "@/components/common/CustomImage"
import React from "react"
import Link from "next/link"
import Stars from "@/components/common/Stars"
import Votes from "@/components/common/Votes"
import { Author } from "@/types/Author"
import { ImCross } from "react-icons/im"

type Props = {
    title: string
    descr: string
    votes: number | undefined
    authors: Author[]
    src: string
    className?: string
    children?: React.ReactNode
    id: number
    imgWidth?: number
    isDeletable?: boolean
}

const ShopItem = ({
    votes = 0,
    descr,
    authors,
    title,
    className,
    src,
    children,
    id,
    imgWidth,
    isDeletable,
}: Props) => {
    return (
        <Link
            href={`/${id}`}
            className={"flex relative overflow-clip gap-8" + " " + className}
        >
            {isDeletable && (
                <button className="absolute top-6 right-6 z-10 duration-300 p-2 hover:text-red-600 hover:rotate-180">
                    <ImCross className={"opacity-80 text-sm"} />
                </button>
            )}
            <CustomImage
                width={imgWidth ? imgWidth : 188}
                src={src}
                alt="poster"
            />
            <div className="flex flex-col w-4/5 justify-center gap-4">
                <h2 className="capitalize font-medium w-3/5 text-2xl">
                    {title}
                </h2>
                <div className="capitalize flex flex-wrap gap-x-2 opacity-60">
                    by{" "}
                    {authors.map((a, index) =>
                        index === authors.length - 1 ? (
                            <span>{a.firstName + " " + a.lastName}</span>
                        ) : (
                            <span>{a.firstName + " " + a.lastName + ","}</span>
                        )
                    )}
                </div>
                <div className="flex gap-4 items-center">
                    <Stars />
                    <Votes votes={votes} className={"opacity-30"} />
                </div>
                <p className="opacity-30 w-4/5">{descr}</p>
                {children}
            </div>
        </Link>
    )
}

export default ShopItem
