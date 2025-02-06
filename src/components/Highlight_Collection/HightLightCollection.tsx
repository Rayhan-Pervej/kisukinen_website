import React from 'react'
import Image from "next/image";

const HightLightCollection = () => {
    return (

        // <div className=' flex  flex-col md:flex-row gap-4 md:gap-8 justify-center items-center'>

        //     <div className=' relative w-[60%] md:w[30%] lg:w-[35%] xl:w-[30%] aspect-square shadow-lg shadow-slate-600 rounded-md '>
        //         <Image src="https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg " alt=" " fill className='object-cover rounded-md' />
        //     </div>
        //     <div className=' items-center md:items-start flex-col flex md:gap-y-3 lg:gap-y-5 sm:w-[40%] md:w[30%] lg:w-[35%] xl:w-[30%]'>
        //         <h1 className='font-semibold text-xl md:text-2xl lg:text-4xl'>New T-Shirt Collection</h1>
        //         <p className='font-medium text-gray-500'>
        //             Discover our latest T-Shirt collection, featuring unique designs and high-quality materials. Perfect for any occasion, these T-Shirts offer both comfort and style. Upgrade your wardrobe with our new arrivals and make a statement wherever you go.
        //         </p>

        //         <button className=' rounded-md bg-black text-white font-semibold shadow-md shadow-slate-600 py-3 px-4 w-max text-sm lg:text-base '> SHOP NOW </button>

        //     </div>
        // </div>
        <div className=' flex  flex-col md:flex-row gap-4 md:gap-8 justify-center items-center'>

            <div className=' relative w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 aspect-square shadow-lg shadow-slate-600 rounded-md '>
                <Image src="https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg " alt=" " fill className='object-cover rounded-md' />
            </div>
            <div className=' md:w-2/5 lg:w-1/3 xl:w-1/4 items-center md:items-start flex-col flex gap-2 md:gap-y-3 lg:gap-y-5 '>
                <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl'>New T-Shirt Collection</h1>
                <p className='font-medium text-gray-500 hidden md:flex'>
                    Discover our latest T-Shirt collection, featuring unique designs and high-quality materials. Perfect for any occasion, these T-Shirts offer both comfort and style. Upgrade your wardrobe with our new arrivals and make a statement wherever you go.
                </p>

                <button className=' rounded-md bg-black text-white font-semibold shadow-md shadow-slate-600 py-3 px-4 w-max text-sm lg:text-base '> SHOP NOW </button>

            </div>
        </div>


    )
}

export default HightLightCollection
