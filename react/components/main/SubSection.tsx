import React from "react"

type SubSectionProps = {
    children: React.ReactNode
    title: string
}

const SubSection = ({ children, title }: SubSectionProps) => {
    return (
        <>
            <h1 className={"text-4xl pt-6 font-bold"}>{title}</h1>
            {children}
        </>
    )
}

export default SubSection
