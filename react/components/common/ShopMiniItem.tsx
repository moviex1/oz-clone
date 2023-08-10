import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import BookPoster from "@/assets/bookPoster.png"

type StoreMiniItemProps = {
    title: string
    author: string
    src: string
    alt?: string
    width?: string
}

const StoreMiniItem = ({
    title,
    author,
    src,
    alt,
    width = "100%",
}: StoreMiniItemProps) => {
    return (
        <div className={"flex flex-col gap-4"} style={{ width: width }}>
            <Image src={BookPoster} alt={"poster"} width={200} />
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
        </div>
    )
}

export default StoreMiniItem
