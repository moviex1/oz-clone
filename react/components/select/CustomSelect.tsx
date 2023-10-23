"use client"
import React from "react"
import Select, { SingleValue } from "react-select"

const CustomSelect = () => {
    const id = Date.now().toString()
    const options = [
        { value: "popular", label: "Popular" },
        { value: "cheap", label: "Cheap" },
        { value: "expensive", label: "Expensive" },
        { value: "new", label: "New" },
    ]
    const handleChange = (
        selectedOption: SingleValue<{ value: string; label: string }>
    ) => {
        console.log(selectedOption?.value)
    }

    return (
        <div className="flex justify-end gap-8 pr-0 w-full p-6">
            <Select
                onChange={handleChange}
                instanceId={"selectId"}
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
