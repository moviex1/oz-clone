import BookPoster from "@/assets/bookPoster.png"
import CustomImage from "@/components/common/CustomImage"
import React from "react"
import Link from "next/link"
import Stars from "@/components/common/Stars"
import Votes from "@/components/common/Votes"

type Props = {
    title: string
    descr: string
    votes: number | null
    author: string
    src: string
    alt?: string
    className?: string
    children?: React.ReactNode
    id: number
    imgWidth?: number
}

const ShopItem = ({
    votes = 0,
    descr,
    author,
    title,
    className,
    src,
    alt,
    children,
    id,
    imgWidth,
}: Props) => {
    return (
        <Link href={`/${id}`} className={"flex w-2/5 gap-8" + " " + className}>
            <CustomImage
                width={imgWidth ? imgWidth : 188}
                src={BookPoster.src}
                alt="poster"
            />
            <div className="flex flex-col w-4/5 justify-center gap-4">
                <h2 className="capitalize font-medium w-3/5 text-2xl">
                    {title}
                </h2>
                <span className="capitalize opacity-60">by {author}</span>
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
