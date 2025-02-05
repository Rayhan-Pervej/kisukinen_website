import React from 'react'
import Image from "next/image";

const HightLightCollection = () => {
    return (
       
            <div className=' flex gap-8 justify-center items-center'>

                <div className='relative w-[60%] md:w[30%] lg:w-[35%] xl:w-[30%] aspect-square '>
                    <Image src="https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg " alt=" " fill className='object-cover rounded-md' />
                </div>
                <div className='flex-col md:gap-y-3 lg:gap-y-5 w-[40%] md:w[30%] lg:w-[35%] xl:w-[30%] hidden md:flex'>
                <h1 className='font-semibold text-2xl lg:text-4xl'>New T-Shirt Collection</h1>
                <p className='font-medium text-gray-500'>
                    Discover our latest T-Shirt collection, featuring unique designs and high-quality materials. Perfect for any occasion, these T-Shirts offer both comfort and style. Upgrade your wardrobe with our new arrivals and make a statement wherever you go.
                </p>
                
                <button className=' rounded-md bg-black text-white font-semibold shadow-md shadow-slate-600 py-3 px-4 w-max text-sm lg:text-base '> SHOP NOW </button>
                
                </div>
            </div>
        
    )
}

export default HightLightCollection
