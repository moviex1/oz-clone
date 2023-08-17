import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import BookPoster from "@/assets/bookPoster.png"
import React from "react"
import Link from "next/link"
import CustomImage from "@/components/common/CustomImage"

type StoreMiniItemProps = {
    title: string
    author: string
    src: string
    alt?: string
    width?: string
    id: number
}

const StoreMiniItem = ({
    title,
    author,
    src,
    alt,
    width = "100%",
    id,
}: StoreMiniItemProps) => {
    return (
        <Link
            href={`/${id}`}
            className={"flex flex-col gap-4"}
            style={{ width: width }}
        >
            <CustomImage src={BookPoster.src} alt={"poster"} width={200} />
            <div className={"flex flex-col gap-4"}>
                <h2 className={"capitalize w-[90%] font-medium text-2xl"}>
                    {title}
                </h2>
                <span className={"capitalize opacity-60"}>by {author}</span>
                <div className={"flex gap-4"}>
                    <div className={"flex gap-1"}>
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#dedede]"} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default StoreMiniItem
