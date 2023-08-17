"use client"
import React from "react"
import Input from "@/components/auth/Input"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"

type FormValues = {
    email: string
}

export default function ForgotPass() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onBlur",
    })
    const submitAction = (data: FormValues) => {
        console.log(data)
    }

    return (
        <div className="bg-white rounded-2xl gap-6 p-16 m-auto w-1/4 flex flex-col items-center">
            <h1 className="text-3xl opacity-70 font-semibold">
                Forgot Password?
            </h1>
            <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit(submitAction)}
            >
                <Input
                    keyName={"email"}
                    label={"Enter your email"}
                    placeholder={"Example@mail.com"}
                    register={register}
                    type={"email"}
                    pattern={{
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Your input doesn't look like email",
                    }}
                    required={"This field is required"}
                />
                {errors.email && (
                    <p role="alert" className={"text-red-500"}>
                        {errors.email.message}
                    </p>
                )}
                <div className={"flex flex-col gap-4 pt-4"}>
                    <button className="bg-amber-500 text-xl rounded-lg p-4 text-white">
                        Reset Password
                    </button>
                    <Link
                        href={"/signin"}
                        className="btn text-xl flex gap-2 justify-center items-center rounded-lg p-4 text-white"
                    >
                        <span className={"text-2xl"}>
                            <BiArrowBack />
                        </span>
                        Back to Login
                    </Link>
                </div>
            </form>
            <div className={"flex gap-1"}>
                <span>Don't have account?</span>
                <Link href={"/signup"} className={"font-semibold"}>
                    Sign up
                </Link>
            </div>
        </div>
    )
}
