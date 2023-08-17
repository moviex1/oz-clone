import React from "react"
import NoPoster from "@/assets/not_found.jpg"
import Image from "next/image"

type Props = {
    src: string | null
    alt: string
    priority?: boolean
    responsive?: boolean
    width: number
    className?: string
}

const CustomImage = ({
    src,
    alt,
    priority = false,
    width,
    className,
}: Props) => {
    const defaultImg = NoPoster.src

    return (
        <Image
            src={src ? src : defaultImg}
            alt={alt}
            width={width}
            height={328}
            priority={priority}
            className={className}
        />
    )
}

export default CustomImage
