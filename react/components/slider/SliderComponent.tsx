"use client"
import BookPoster from "@/assets/bookPoster.png"
import ShopMiniItem from "@/components/common/ShopMiniItem"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    }

    return (
        <div className={"py-12"}>
            <Slider {...settings}>
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
                <ShopMiniItem
                    title={"Book"}
                    author={"Author"}
                    src={BookPoster.src}
                />
            </Slider>
        </div>
    )
}

export default SliderComponent
