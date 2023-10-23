import React from "react"

type Props = {
    votes: number | undefined
    className?: string
}

const Votes = ({ votes, className }: Props) => {
    const formattedNumber = String(votes).replace(
        /(\d)(?=(\d{3})+(\D|$))/g,
        "$1,"
    )

    return (
        <>
            {votes ? (
                <span className={className}>
                    {formattedNumber} {votes === 1 ? "vote" : "votes"}
                </span>
            ) : (
                <span className={className}>No reviews</span>
            )}
        </>
    )
}

export default Votes
