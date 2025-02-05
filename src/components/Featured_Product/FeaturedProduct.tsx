import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const FeaturedProduct = () => {
    return (



        <div className='mt-6  gap-x-8 gap-y-8 left-1/2  flex-wrap flex justify-center '>

            {/* Products card Design */}


            <Link href="/" className='gap-y-2 pb-3 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
                <div className='relative w-full aspect-square'>
                    <Image src="https://fabrilife.com/products/6429070600457-square.jpg?v=20"
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                        sizes='20vw'
                        fill
                        alt='' />
                    <Image src="https://fabrilife.com/products/6418608f79ccb-square.jpg?v=20"
                        className='absolute object-cover rounded-md'
                        sizes='20vw'
                        fill
                        alt='' />
                </div>
                <div className="flex justify-between px-2">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'> $12</span>
                </div>
                <div className='px-2 text-sm text-gray-500 '><p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p></div>
                <div className='flex flex-row items-center gap-x-2 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-4 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>

            <Link href="/" className='gap-y-2 pb-3 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
                <div className='relative w-full aspect-square'>
                    <Image src="https://fabrilife.com/products/6429070600457-square.jpg?v=20"
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                        sizes='20vw'
                        fill
                        alt='' />
                    <Image src="https://fabrilife.com/products/6418608f79ccb-square.jpg?v=20"
                        className='absolute object-cover rounded-md'
                        sizes='20vw'
                        fill
                        alt='' />
                </div>
                <div className="flex justify-between px-2">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'> $12</span>
                </div>
                <div className='px-2 text-sm text-gray-500 '><p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p></div>
                <div className='flex flex-row items-center gap-x-2 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-4 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>



            <Link href="/" className='gap-y-2 pb-3 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
                <div className='relative w-full aspect-square'>
                    <Image src="https://fabrilife.com/products/6429070600457-square.jpg?v=20"
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                        sizes='20vw'
                        fill
                        alt='' />
                    <Image src="https://fabrilife.com/products/6418608f79ccb-square.jpg?v=20"
                        className='absolute object-cover rounded-md'
                        sizes='20vw'
                        fill
                        alt='' />
                </div>
                <div className="flex justify-between px-2">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'> $12</span>
                </div>
                <div className='px-2 text-sm text-gray-500 '><p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p></div>
                <div className='flex flex-row items-center gap-x-2 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-4 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>



            <Link href="/" className='gap-y-2 pb-3 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
                <div className='relative w-full aspect-square'>
                    <Image src="https://fabrilife.com/products/6429070600457-square.jpg?v=20"
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                        sizes='20vw'
                        fill
                        alt='' />
                    <Image src="https://fabrilife.com/products/6418608f79ccb-square.jpg?v=20"
                        className='absolute object-cover rounded-md'
                        sizes='20vw'
                        fill
                        alt='' />
                </div>
                <div className="flex justify-between px-2">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'> $12</span>
                </div>
                <div className='px-2 text-sm text-gray-500 '><p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p></div>
                <div className='flex flex-row items-center gap-x-2 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-4 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>



            <Link href="/" className='gap-y-2 pb-3 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
                <div className='relative w-full aspect-square'>
                    <Image src="https://fabrilife.com/products/6429070600457-square.jpg?v=20"
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                        sizes='20vw'
                        fill
                        alt='' />
                    <Image src="https://fabrilife.com/products/6418608f79ccb-square.jpg?v=20"
                        className='absolute object-cover rounded-md'
                        sizes='20vw'
                        fill
                        alt='' />
                </div>
                <div className="flex justify-between px-2">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'> $12</span>
                </div>
                <div className='px-2 text-sm text-gray-500 '><p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p></div>
                <div className='flex flex-row items-center gap-x-2 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-4 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>







        </div>

    )
}

export default FeaturedProduct
