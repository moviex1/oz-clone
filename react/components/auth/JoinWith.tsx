import React from "react"

type JoinWithProps = {
    icon: React.ReactNode
    name: string
    method: "Sign in" | "Sign up"
}

const JoinWith = ({ name, icon, method }: JoinWithProps) => {
    return (
        <button className="p-3 border-[2px] justify-center text-xl font-semibold rounded-lg flex gap-2 items-center border-[rgb(222,222,222,0.6)]">
            <span className={"text-3xl"}>{icon}</span> {method} with {name}
        </button>
    )
}

export default JoinWith
