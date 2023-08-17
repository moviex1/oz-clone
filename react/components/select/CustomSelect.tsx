"use client"
import React from "react"
import Select, { SingleValue, StylesConfig } from "react-select"

const CustomSelect = () => {
    const options = [
        { value: "popular", label: "Popular" },
        { value: "cheap", label: "Cheap" },
        { value: "expensive", label: "Expensive" },
        { value: "new", label: "New" },
    ]

    const handleChange = (
        selectedOption: SingleValue<{ value: string; label: string }>
    ) => {
        console.log(`Option selected:`, selectedOption?.value)
    }

    return (
        <div className="flex justify-end gap-8 pr-36 w-full p-6">
            <Select
                onChange={handleChange}
                className={"w-52"}
                options={options}
                placeholder={"Sort by"}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: "#FF971D",
                    },
                })}
            />
        </div>
    )
}

export default CustomSelect
