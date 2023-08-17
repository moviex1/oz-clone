import React from "react"

type Props = {
    text: string
}

const Category = ({ text }: Props) => {
    return (
        <span className="px-6 py-3 rounded-lg bg-[#DEDEDE] text-opacity-30">
            {text}
        </span>
    )
}

export default Category
