import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import BookPoster from "@/assets/bookPoster.png"

type StoreItemProps = {
    title: string
    descr: string
    votes: number | null
    author: string
    src: string
    alt?: string
}

const StoreItem = ({
    votes = 0,
    descr,
    author,
    title,
    src,
    alt,
}: StoreItemProps) => {
    const formattedNumber = String(votes).replace(
        /(\d)(?=(\d{3})+(\D|$))/g,
        "$1,"
    )

    return (
        <div className={"flex w-[45%] gap-4"}>
            <Image
                src={BookPoster}
                alt={"poster"}
                width={188}
                height={245}
                className={"shadow-[0_10px_60px_0_rgba(0,0,0,0.20)]"}
            />
            <div className={"flex flex-col gap-4"}>
                <h2 className={"capitalize font-medium text-2xl"}>{title}</h2>
                <span className={"capitalize opacity-60"}>by {author}</span>
                <div className={"flex gap-4"}>
                    <div className={"flex gap-1"}>
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#FF971D]"} />
                        <AiFillStar className={"text-[#dedede]"} />
                    </div>
                    <span className={"opacity-30"}>
                        {formattedNumber} votes
                    </span>
                </div>
                <p className={"opacity-30 w-1/2"}>{descr}</p>
            </div>
        </div>
    )
}

export default StoreItem
