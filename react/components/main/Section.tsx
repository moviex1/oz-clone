import React from "react"

type SectionProps = {
    children: React.ReactNode
}
const Section = ({ children }: SectionProps) => {
    return (
        <div className="bg-white shadow-[0_15px_80px_0_rgba(0,0,0,0.10)] overflow-hidden pr-12 p-20 rounded-l-2xl">
            {children}
        </div>
    )
}

export default Section
