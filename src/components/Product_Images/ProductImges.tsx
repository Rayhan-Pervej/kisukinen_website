'use client'
import Image from 'next/image'
import { useState } from 'react'

const images = [
    {
        id: 1,
        url: 'https://fabrilife.com/products/66d9a07d14d04-square.jpg?v=20'
    },
    {
        id: 2,
        url: 'https://fabrilife.com/products/6677f6c95f9ce-square.jpg?v=20'
    },
    {
        id: 3,
        url: 'https://fabrilife.com/products/662122c39fc5e-square.jpg?v=20'
    },
    {
        id: 4,
        url: 'https://fabrilife.com/products/661e78b12cebf-square.jpg?v=20'
    },
]
const ProductImages = () => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className=" aspect-square  relative">
                <Image src={images[index].url} alt="" fill className='aspect-square rounded-md object-cover' />
            </div>
            <div className=" flex justify-between gap-2 mt-2">

                {images.map((img, i) => (
                    <div className=" w-1/4 aspect-square relative gap-4 cursor-pointer" key={img.id} onClick={()=>setIndex(i)}>
                        <Image src={img.url} alt="" fill className=' rounded-md object-cover' />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default ProductImages
