import { AiFillStar } from "react-icons/ai"
import React from "react"

const Stars = () => {
    return (
        <div className={"flex gap-1"}>
            <AiFillStar className="text-[#FF971D]" />
            <AiFillStar className="text-[#FF971D]" />
            <AiFillStar className="text-[#FF971D]" />
            <AiFillStar className="text-[#FF971D]" />
            <AiFillStar className="text-[#dedede]" />
        </div>
    )
}

export default Stars
