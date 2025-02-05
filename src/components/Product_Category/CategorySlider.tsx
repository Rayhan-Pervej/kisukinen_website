"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { categoryList } from "@/components/Product_Category/CategoryList";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategorySlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollAmount = 300;


    const handleScroll = (direction: "left" | "right") => {
        const slider = document.getElementById("slider");
        if (slider) {
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const newPosition =
                direction === "left"
                    ? Math.max(scrollPosition - scrollAmount, 0)
                    : Math.min(scrollPosition + scrollAmount, maxScroll);

            slider.scrollTo({ left: newPosition, behavior: "smooth" });
            setScrollPosition(newPosition);
        }
    };

    return (
        <div className="relative px-4">
            <div
                id="slider"
                className=" flex gap-4 md:gap-8 overflow-x-scroll scroll-smooth scrollbar-hide "
                style={{ scrollBehavior: "smooth" }}
            >
                {categoryList.map((category) => (
                    <Link
                        href="/"
                        className=" rounded-md  flex-shrink-0  relative w-40 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
                        key={category.id}
                    >
                        <div className="w-full aspect-[3/4] ">
                            <Image
                                src={category.img}
                                alt={category.title}
                                fill
                                className="object-cover rounded-md  "
                            />
                        </div>
                        <h1 className="absolute bottom-5 left-0 right-0 px-2 font-bold text-base  md:text-lg lg:text-xl xl:text-2xl text-center text-white">
                            {category.title}
                        </h1>
                    </Link>
                ))}
            </div>

            <button onClick={() => handleScroll("left")} className="p-2 bg-black bg-opacity-25 rounded-full absolute top-1/2 left-0  flex justify-between transform -translate-y-1/2 ">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-2x text-white" />
            </button>
            <button onClick={() => handleScroll("right")} className="p-2 bg-black bg-opacity-25 rounded-full absolute top-1/2 right-0 flex justify-end transform -translate-y-1/2">
                <FontAwesomeIcon icon={faAngleRight} className="fa-2x text-white" />
            </button>

            {/* Navigation Buttons */}
            {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <button onClick={() => handleScroll("left")} className="p-2 bg-black bg-opacity-25 rounded-full">
                    <FontAwesomeIcon icon={faAngleLeft} className="fa-2x text-white" />
                </button>
                <button onClick={() => handleScroll("right")} className="p-2 bg-black bg-opacity-25 rounded-full">
                    <FontAwesomeIcon icon={faAngleRight} className="fa-2x text-white" />
                </button>
            </div> */}
        </div>
    );
};

export default CategorySlider;
