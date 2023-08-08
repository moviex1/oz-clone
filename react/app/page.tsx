import { BsBookmarkDash } from "react-icons/bs"
import NavItem from "@/components/nav/NavItem"
import StoreItem from "@/components/store/ShopItem"
import React from "react"
import StoreMiniItem from "@/components/store/ShopMiniItem"
import BookPoster from "@/assets/bookPoster.png"
import Image from "next/image"
import Link from "next/link"
import Section from "@/components/main/Section"
import SubSection from "@/components/main/SubSection"
import StartWindow from "@/components/main/StartWindow"
import SliderComponent from "@/components/slider/SliderComponent"

export default function Home() {
    return (
        <>
            <StartWindow />
            <section className="bg-[#F5F6F8] flex relative gap-16 py-20">
                <nav className="w-[15%] h-full sticky top-8 flex flex-col gap-3 ">
                    <h2 className={"font-semibold text-xl pl-24 py-2"}>
                        Book by Genre
                    </h2>
                    <NavItem title={"All Genres"} isActive={true} />
                    <NavItem title={"Science"} />
                    <NavItem title={"Fantasy"} />
                    <NavItem title={"Business"} />
                    <NavItem title={"Philosophy"} />
                    <NavItem title={"Biography"} />
                </nav>
                <div className={"flex flex-col gap-20 w-[85%]"}>
                    <Section>
                        <SubSection title={"Recommended"}>
                            <div className={"flex flex-wrap gap-20 py-16"}>
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                                <StoreItem
                                    src={""}
                                    title="all the light we cannot see"
                                    descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
                                    author="anthony doerr"
                                    votes={1988288}
                                />
                            </div>
                        </SubSection>
                        <SubSection title={"New Arrivals"}>
                            <div className="flex flex-wrap gap-20 justify-between py-16">
                                <StoreMiniItem
                                    src={""}
                                    title="all the light we cannot see"
                                    author="anthony doerr"
                                    width={"20%"}
                                />
                                <StoreMiniItem
                                    src={""}
                                    title="all the light we cannot see"
                                    author="anthony doerr"
                                    width={"20%"}
                                />
                                <StoreMiniItem
                                    src={""}
                                    title="all the light we cannot see"
                                    width={"20%"}
                                    author="anthony doerr"
                                />
                                <StoreMiniItem
                                    src={""}
                                    title="all the light we cannot see"
                                    width={"20%"}
                                    author="anthony doerr"
                                />
                            </div>
                        </SubSection>
                    </Section>
                    <Section>
                        <SubSection title={"Book of this week"}>
                            <div className="flex py-20 gap-16 items-center">
                                <div className={"flex flex-col gap-6 w-2/6"}>
                                    <h1 className="text-6xl opacity-80">
                                        Salvation of a Saint
                                    </h1>
                                    <span className={"opacity-90"}>
                                        Keigo Higashiro
                                    </span>
                                    <div
                                        className={
                                            "flex justify-between pt-4 w-[90%]"
                                        }
                                    >
                                        <div className={"flex flex-col gap-3"}>
                                            <span className={"opacity-90"}>
                                                Originally published
                                            </span>
                                            <span className={"font-medium"}>
                                                July 11, 1960
                                            </span>
                                        </div>
                                        <div className={"flex flex-col gap-3"}>
                                            <span className={"opacity-90"}>
                                                Publisher
                                            </span>
                                            <span className="capitalize font-medium">
                                                Shin Publishing
                                            </span>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col gap-3 pb-4"}>
                                        <span className={"opacity-90"}>
                                            Categories
                                        </span>
                                        <span
                                            className={"capitalize font-medium"}
                                        >
                                            Fictional, Magical Realism, Asian
                                            Literature, Domestic Fiction
                                        </span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <button
                                            className={"btn p-5 rounded-lg"}
                                        >
                                            <BsBookmarkDash />
                                        </button>
                                        <Link
                                            href={`/id`}
                                            className={
                                                "btn py-4 px-12 rounded-lg"
                                            }
                                        >
                                            Get Book
                                        </Link>
                                    </div>
                                </div>
                                <Image src={BookPoster} alt={""} width={290} />
                                <div className={"flex flex-col gap-4 w-1/4"}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Purus morbi eleifend
                                        enim, tristique. Lorem ipsum dolor sit
                                        amet, consectetur adipiscing elit. Purus
                                        morbi eleifend enim, tristique
                                    </p>
                                    <div className={"h-1 w-20 bg-amber-500"} />
                                    <span className={"opacity-90"}>
                                        Chicago Tribune
                                    </span>
                                </div>
                            </div>
                        </SubSection>
                        <SubSection title={"Bestsellers"}>
                            <SliderComponent />
                        </SubSection>
                    </Section>
                </div>
            </section>
        </>
    )
}
