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
import { Book } from "@/types/Book"
import { fetchBooks } from "@/services/books"
import { fetchSingleBook } from "@/services/singleBook"

export default async function BookPage({
    params,
}: {
    params: { bookId: string }
}) {
    const data: Book = await fetchSingleBook(params.bookId)
    const recommendations: Book[] = await fetchBooks()

    const date = new Date()
    date.setTime(Date.parse(data.releaseDate))
    const formattedDate = date.toDateString().slice(4)

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
                                src={data.photos[0].url}
                                alt="poster"
                                width={300}
                                className="shadow-[0_10px_40px_0_rgba(0,0,0,0.20)]"
                            />
                            <div className="flex-col flex gap-6 justify-center">
                                <h1 className="text-6xl py-6 font-bold capitalize">
                                    {data.title}
                                </h1>
                                <div className="flex justify-between">
                                    <span className="capitalize opacity-80 flex flex-wrap gap-x-2">
                                        by{" "}
                                        {data.authors.map((a, index) =>
                                            index ===
                                            data.authors.length - 1 ? (
                                                <span>
                                                    {a.firstName +
                                                        " " +
                                                        a.lastName}
                                                </span>
                                            ) : (
                                                <span>
                                                    {a.firstName +
                                                        " " +
                                                        a.lastName +
                                                        ","}
                                                </span>
                                            )
                                        )}
                                    </span>
                                    <span className="opacity-80">
                                        {formattedDate}
                                    </span>
                                </div>
                                <div className={"flex gap-8 items-center"}>
                                    <Stars />
                                    <Votes
                                        votes={data.reviews?.length}
                                        className="opacity-80"
                                    />
                                </div>
                                <span className={"opacity-70 text-xl"}>
                                    Price: {data.price}$
                                </span>
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
                        <div className="px-8">
                            <h3 className="text-2xl py-3 font-medium">
                                Description
                            </h3>
                            <p>{data.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-8 px-8">
                            {data.tags.map((t) => (
                                <Category
                                    text={t.name}
                                    key={`category-${t.id}`}
                                />
                            ))}
                        </div>
                        <div className="px-8 flex flex-col ">
                            <h2 className="text-2xl py-4 font-medium">
                                Additional information
                            </h2>
                            <div className="w-3/5 flex gap-x-12 gap-y-6 justify-between flex-wrap">
                                <AddInfo type="Publisher" value="mediakita" />
                                <AddInfo type="weight" value="410g" />
                                <AddInfo type="language" value="Indonesian" />
                                <AddInfo type="Binding" value="Hard" />
                                <AddInfo type="Pages" value={data.pages} />
                                <AddInfo type="Age restrictions" value="16+" />
                            </div>
                        </div>
                        <div className="px-8 pb-8 justify-center flex">
                            <button className="btn rounded-lg p-3 w-3/5">
                                See comments
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-3/6">
                        <h1 className="text-white text-3xl">Recommendations</h1>
                        {recommendations.slice(0, 4).map((item, idx) => (
                            <ShopItem
                                imgWidth={160}
                                descr={item.description}
                                votes={item.reviews?.length}
                                title={item.title}
                                id={item.id}
                                src={item.photos[0].url}
                                authors={item.authors}
                                key={`cart-item-${idx}`}
                                className="bg-white w-full p-4"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
