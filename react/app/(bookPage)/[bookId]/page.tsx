import React from "react"
import BackBtn from "@/components/auth/BackBtn"
import CustomImage from "@/components/common/CustomImage"
import BookPoster from "@/assets/bookPoster.png"
import Stars from "@/components/common/Stars"
import Votes from "@/components/common/Votes"
import { BsBookmarkDash } from "react-icons/bs"
import Link from "next/link"
import ShopItem from "@/components/common/ShopItem"
import Category from "@/components/bookPage/Category"
import AddInfo from "@/components/bookPage/AddInfo"

export default function BookPage({ params }: { params: { bookId: string } }) {
    return (
        <>
            <div className={"w-4/5 m-auto flex flex-col "}>
                <div className="py-12">
                    <BackBtn className="text-white text-4xl" />
                </div>
                <div className={"flex gap-12"}>
                    <div className="flex flex-col h-fit gap-8 bg-white w-5/6">
                        <div className={"flex gap-8"}>
                            <CustomImage
                                src={BookPoster.src}
                                alt="poster"
                                width={300}
                                className="shadow-[0_10px_40px_0_rgba(0,0,0,0.20)]"
                            />
                            <div className="flex-col flex gap-6 justify-center">
                                <h1 className="text-6xl py-4 font-bold capitalize">
                                    Garis Waktu
                                </h1>
                                <div className="flex justify-between">
                                    <span className="capitalize opacity-80">
                                        By Fiera Bisary
                                    </span>
                                    <span className="opacity-80">
                                        1 July 2016
                                    </span>
                                </div>
                                <Stars />
                                <Votes votes={1988288} className="opacity-80" />
                                <div className="flex gap-6">
                                    <Link
                                        href={`/1`}
                                        className="btn py-4 px-16 rounded-lg"
                                    >
                                        Get Book
                                    </Link>
                                    <button className="btn p-5 rounded-lg">
                                        <BsBookmarkDash />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 mx-auto">
                            <h3 className="text-2xl py-3 font-medium">
                                Description
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab aliquid architecto
                                consequuntur culpa distinctio dolorum, eligendi
                                est et eveniet expedita in iure, laborum
                                molestiae molestias nemo obcaecati pariatur quia
                                quidem quisquam repudiandae sed sit vel vero
                                voluptas voluptatibus? Aspernatur dolorem eaque
                                illo laudantium modi, molestiae quam qui quis
                                sint ullam. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Adipisci animi
                                architecto autem consequatur, deserunt
                                dignissimos eaque exercitationem facilis illo
                                inventore ipsa molestias nesciunt quasi,
                                quibusdam, quidem quos sint tempore voluptas.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-8 px-8">
                            <Category text="Biography" />
                            <Category text="Thriller" />
                            <Category text="Science" />
                        </div>
                        <div className="px-8 flex flex-col ">
                            <h2 className="text-2xl py-4 font-medium">
                                Additional information
                            </h2>
                            <div className="w-3/5 flex gap-x-12 gap-y-6 justify-between flex-wrap">
                                <AddInfo type="Publisher" value="mediakita" />
                                <AddInfo type="weight" value="410g" />
                                <AddInfo type="language" value="Indonesian" />
                                <AddInfo type="Binding" value="Solid" />
                                <AddInfo type="Pages" value="210" />
                                <AddInfo type="Age restrictions" value="16+" />
                            </div>
                        </div>
                        <div className="px-8 pb-8 justify-center flex">
                            <button className="btn rounded-lg p-3 w-3/5">
                                See comments
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className="text-white text-3xl">Recommendations</h1>
                        <ShopItem
                            imgWidth={160}
                            className="bg-white w-full p-4"
                            id={1}
                            src={""}
                            title="all the light we cannot see"
                            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                            author="anthony doerr"
                            votes={1988288}
                        />
                        <ShopItem
                            imgWidth={160}
                            className="bg-white w-full p-4"
                            id={1}
                            src={""}
                            title="all the light we cannot see"
                            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                            author="anthony doerr"
                            votes={1988288}
                        />
                        <ShopItem
                            imgWidth={160}
                            className="bg-white w-full p-4"
                            id={1}
                            src={""}
                            title="all the light we cannot see"
                            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                            author="anthony doerr"
                            votes={1988288}
                        />
                        <ShopItem
                            imgWidth={160}
                            className="bg-white w-full p-4"
                            id={1}
                            src={""}
                            title="all the light we cannot see"
                            descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                            author="anthony doerr"
                            votes={1988288}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
