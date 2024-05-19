"use client";
import React, { useRef } from "react";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cn } from "../utils";

const products = [
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
    {
        title: "Zaatar",
        ingredients: ["Sesame", "Semmak", "Oil", "Zaatar"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        At aliquid architecto praesentium ullam magnam non
        aperiam enim quam minima velit! Suscipit odio neque nam.
        Voluptatibus nemo odit laborum eaque labore?`,
        mainImage: "Zaatar.png",
        relatedImages: ["Labneh 1.png", "Oil 1.png"],
        bgColor: "#f3aaba",
        ingredientsColor: "#c03d39",
        mobileImage: "Zaatar.png",
    },
];

export default function OurRange() {
    const swiper = useRef();

    return (
        <Section title={"our range"} className={"bg-[#f8efe4]"} color={"#fb7064"}>
            <div className="sm:hidden">
                {products.map((product, i) => (
                    <Product product={product} reversed={i % 2 !== 0} key={i} />
                ))}
            </div>
            <div className="hidden sm:block">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(s) => (swiper.current = s)}
                >
                    {products.map((product, i) => (
                        <SwiperSlide key={i}>
                            <Product product={product} reversed={i % 2 !== 0} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center items-center">
                    <button onClick={() => swiper.current?.slidePrev()} className="border-2 border-orange-950/70 px-5 py-3 uppercase text-sm flex items-center justify-center gap-3 font-light text-orange-900/90">
                        <img src="/images/angle-left.webp" className="w-3"/>
                        prev
                    </button>
                    <button onClick={() => swiper.current?.slideNext()} className="border-2 border-orange-950/70 px-5 py-3 uppercase text-sm flex items-center justify-center gap-3 font-light text-orange-900/90">
                        next
                        <img src="/images/angle-right.webp" className="w-3"/>
                    </button>
                </div>
            </div>
        </Section>
    );
}

const Product = ({ product, reversed }) => {
    if (!product) return;
    return (
        <>
            <div className="sm:hidden">
                <div
                    className="flex bg-[#f3aaba]"
                    style={{ backgroundColor: product.bgColor }}
                >
                    <div
                        className={cn(
                            "w-[35%] flex px-6 py-24 items-center text-center flex-col",
                            reversed && "order-2"
                        )}
                    >
                        <p className="text-5xl uppercase font-[brandontwo] text-primary mb-7">
                            {product.title}
                        </p>
                        <ul
                            className="ingredients text-base uppercase font-light mb-16"
                            style={{ color: product.ingredientsColor }}
                        >
                            {product.ingredients.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                        <p className="text-primary text-lg font-light text-balance">
                            {product.description}
                        </p>
                    </div>
                    <div
                        className={cn(
                            "w-[65%] h-[700px]",
                            reversed && "order-1"
                        )}
                    >
                        <img
                            src={`/images/${product.mainImage}`}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="flex h-[300px]">
                    <div
                        className={cn(
                            "w-[65%] relative h-full",
                            reversed && "order-2"
                        )}
                    >
                        <img
                            src={`/images/${product.relatedImages[0]}`}
                            alt=""
                            className="object-cover w-full h-full absolute inset-0"
                        />
                    </div>
                    <div
                        className={cn(
                            "w-[35%] relative h-full",
                            reversed && "order-1"
                        )}
                    >
                        <img
                            src={`/images/${product.relatedImages[1]}`}
                            alt=""
                            className="object-cover w-full h-full absolute inset-0"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex flex-col gap-5 justify-center items-center">
                <p className="text-4xl opacity-60 uppercase font-[brandontwo] mb-2">
                    {product.title}
                </p>
                <img
                    src={`/images/${product.mobileImage}`}
                    alt=""
                    className="object-cover w-full"
                />
                <ul
                    className="ingredients text-base uppercase font-light mb-16 flex gap-3 justify-center items-center"
                    style={{ color: product.ingredientsColor }}
                >
                    {product.ingredients.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};
