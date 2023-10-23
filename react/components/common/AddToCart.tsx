"use client"
import { FiShoppingCart } from "react-icons/fi"
import React from "react"
import { toast, ToastContainer } from "react-toastify"

const AddToCart = () => {
    const notify = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        toast("🦄 Wow so easy!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <>
            <button
                onClick={(e) => notify(e)}
                className="btn p-3 text-xl w-fit rounded-lg"
            >
                <FiShoppingCart />
            </button>
        </>
    )
}

export default AddToCart
