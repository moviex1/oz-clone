import React from "react"

type Props = {
    votes: number | null
    className?: string
}

const Votes = ({ votes, className }: Props) => {
    const formattedNumber = String(votes).replace(
        /(\d)(?=(\d{3})+(\D|$))/g,
        "$1,"
    )

    return (
        <>
            {votes && (
                <span className={className}>
                    {formattedNumber} {votes === 1 ? "vote" : "votes"}
                </span>
            )}
        </>
    )
}

export default Votes
