"use client"
import React from "react"
import JoinWith from "@/components/auth/JoinWith"
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"
import OrLine from "@/components/auth/OrLine"
import Link from "next/link"
import Input from "@/components/auth/Input"
import { useForm } from "react-hook-form"

type FormValues = {
    email: string
    password: string
    cpassword: string
}

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
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
                You must Sign Up to join
            </h1>
            <div className="flex flex-col gap-4 w-full">
                <JoinWith icon={<FcGoogle />} name="Google" method="Sign up" />
                <JoinWith
                    icon={<AiFillApple />}
                    name="Apple Id"
                    method="Sign up"
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
                <Input
                    label={"Repeat password"}
                    keyName={"cpassword"}
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
                {watch("cpassword") !== watch("password") &&
                getValues("cpassword") ? (
                    <p role="alert" className={"text-red-500"}>
                        password not match
                    </p>
                ) : null}
                <button className="bg-amber-500 text-xl rounded-lg p-4 text-white">
                    Sign Up
                </button>
            </form>
            <div className={"flex gap-1"}>
                <span>Already have account?</span>
                <Link href={"/signin"} className={"font-semibold"}>
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default SignUp
