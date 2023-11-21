import React from "react"

type Props = {
    type: string
    value: string
}

const AddInfo = ({ type, value }: Props) => {
    return (
        <div className={"flex flex-col gap-4 w-1/4"}>
            <span className={"opacity-60 capitalize"}>{type}</span>
            <span className={"opacity-30 capitalize"}>{value}</span>
        </div>
    )
}

export default AddInfo
