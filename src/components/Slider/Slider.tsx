"use client"
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { transform } from 'next/dist/build/swc/generated-native';
const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        Description: "Sale! Up to 60% off!",
        img: " https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_1280.jpg",
        bg: " bg-gradient-to-r from-yellow-50 to-pink-50",
        url: ""
    },
    {
        id: 2,
        title: "Enjoy your Party",
        Description: "Sale! Up to 30% off!",
        img: "https://cdn.pixabay.com/photo/2024/05/29/21/11/woman-8797240_1280.png",
        bg: "  bg-gradient-to-r from-gray-400 to-white",
        url: ""
    },
    {
        id: 3,
        title: "New Jewelries Collection",
        Description: "Get 5% Cashback!",
        img: " https://cdn.pixabay.com/photo/2023/12/19/11/16/indian-bride-8457513_960_720.jpg",
        bg: " bg-gradient-to-r from-red-200 to-pink-100",
        url: ""
    }
];
const Slider = () => {
    const [currentState, setcurrentState] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setcurrentState((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [currentState]);


    return (
        <div className='h-[calc(60vh)] xl:h-[calc(100vh-80px)] overflow-hidden'>
            <div className='w-max h-full flex transition-all ease-in-out duration-700'
                style={{ transform: `translateX(-${currentState * 100}vw)` }}
            >

                {slides.map(slide => (
                    <div className={`${slide.bg} xl:bg-inherit w-screen h-full xl:h-full flex flex-col xl:flex-row`} key={slide.id}>
                        {/* Text Container */}
                        {/* For Desktop */}
                        <div className='hidden xl:flex xl:w-1/2 xl:h-full flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                            <h2 className='text-xl lg:text-3xl 2xl:text-5xl'> {slide.Description}</h2>
                            <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title} </h1>
                            <Link href={slide.url}> <button className=' rounded-md bg-black text-white py-3 px-4 '> SHOP NOW </button> </Link>
                        </div>


                        <div className="relative w-full xl:w-1/2 xl:h-full h-full">
                            {/* Image Container */}

                            <Image src={slide.img} alt='' fill sizes='100%' className='object-cover' />


                            {/* Text Container */}
                            {/* For Mobile */}
                            <div className=' xl:hidden  absolute inset-0 flex flex-col items-center justify-center gap-3  bg-black bg-opacity-40 text-center text-white'>
                                <h2 className='text-xl'> {slide.Description}</h2>
                                <h1 className='text-5xl font-semibold'>{slide.title} </h1>
                                <Link href={slide.url}> <button className=' rounded-md bg-white text-black font-semibold shadow-md shadow-orange-300 py-3 px-4 '> SHOP NOW </button> </Link>
                            </div>


                        </div>


                    </div>
                ))}


            </div>

            <div className=" absolute flex m-auto left-1/2 bottom-1/3 xl:bottom-8 gap-4 transform -translate-x-1/2">
                {
                    slides.map((slide, index) => (
                        <div className={`w-3 h-3 rounded-full ring-1 ring-cyan-500 cursor-pointer flex items-center justify-center ${currentState === index ? "scale-150" : " "}`} key={slide.id}
                            onClick={() => setcurrentState(index)}
                        >
                            {currentState === index && (
                                <div className="w-[6px] h-[6px]  bg-cyan-400 rounded-full"></div>
                            )}

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider
