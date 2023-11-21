"use client"
import React from "react"
import { FcGoogle } from "react-icons/fc"
import JoinWith from "@/components/auth/JoinWith"
import { AiFillApple } from "react-icons/ai"
import Link from "next/link"
import OrLine from "@/components/auth/OrLine"
import { useForm } from "react-hook-form"
import Input from "@/components/auth/Input"

type FormValues = {
    email: string
    password: string
}

const SignIn = () => {
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
                You must Sign In to join
            </h1>
            <div className="flex flex-col gap-4 w-full">
                <JoinWith icon={<FcGoogle />} name="Google" method="Sign in" />
                <JoinWith
                    icon={<AiFillApple />}
                    name="Apple Id"
                    method="Sign in"
                />
            </div>
            <OrLine />
            <form
                onSubmit={handleSubmit(submitAction)}
                className="flex flex-col gap-4 w-full"
            >
                <Input
                    keyName={"email"}
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
                <Input
                    keyName={"password"}
                    placeholder={"Password"}
                    type={"password"}
                    register={register}
                    required={"This field is required"}
                    minLength={{
                        value: 6,
                        message:
                            "Password must consists of 6 or more characters",
                    }}
                />
                {errors.password && (
                    <p role="alert" className={"text-red-500"}>
                        {errors.password.message}
                    </p>
                )}
                <div>
                    <Link
                        href={"/signin/forgot-pass"}
                        className={"float-right text-blue-500"}
                    >
                        Forgot password?
                    </Link>
                </div>
                <button className="bg-amber-500 text-xl rounded-lg p-4 text-white">
                    Sign In
                </button>
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

export default SignIn
