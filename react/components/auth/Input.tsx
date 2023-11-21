import React from "react"

const Input = ({
    register,
    required,
    minLength,
    type = "text",
    pattern,
    keyName,
    label = keyName,
    placeholder = label,
}: InputProps) => {
    return (
        <>
            <label className="font-medium text-xl capitalize">{label}</label>
            <input
                type={type}
                className="p-3 border-[2px] placeholder:font-normal placeholder:text-lg w-full justify-center text-xl font-semibold rounded-lg flex gap-2 items-center border-[rgb(222,222,222,0.6)]"
                placeholder={placeholder}
                {...register(keyName, {
                    required: required,
                    minLength: {
                        value: minLength?.value,
                        message: minLength?.message,
                    },
                    pattern: pattern,
                })}
            />
        </>
    )
}

type InputProps = {
    label?: string
    register: any
    placeholder?: string
    required: boolean | string
    minLength?: {
        value: number
        message?: string
    }
    type?: "text" | "email" | "password" | "tel"
    pattern?: { value: RegExp; message?: string }
    keyName: string
}

export default Input
