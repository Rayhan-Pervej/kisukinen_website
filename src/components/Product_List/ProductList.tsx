import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ProductList = () => {
    return (



        <div className='gap-x-6 gap-y-6 left-1/2  flex-wrap flex justify-center md:justify-start '>

            {/* Products card Design */}



            <Link href="/product/[slug]" as={`/product/product1`} className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>

            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>


            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>


            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>

            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>


            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>


            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>

            <Link href="/" className='gap-y-0.5 pb-2 shadow-[0_0_10px_2px_rgba(0,0,0,1)] shadow-slate-800  rounded-md  w-[45%] flex flex-col  sm:w-[27%] md:w-[24%] lg:w-[21%] xl:w-[18%] 2xl:w-[15%]'>
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
                <div className="flex flex-col justify-between px-2 gap-0.5">
                    <span className='font-medium text-xs md:text-sm '>Fabrilife Mens Premium Designer Edition T-Shirt</span>
                    <span className='font-semibold text-sm md:text-base'> $1500</span>
                </div>
                <div className='px-2 text-sm text-gray-500 hidden md:flex'>
                    <p className='line-clamp-2'>This product is best. It looks good on you. Wear it Daily Events.</p>
                </div>
                <div className='flex flex-row items-center gap-x-2 mt-1 justify-between'>
                    <button className="rounded-xl ring-1 ring-black text-black ml-2 py-3 px-2 w-full text-xs font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center">
                        Add to Cart
                    </button>
                    <button className="rounded-xl ring-1 ring-black text-black mr-2 py-3 px-3 md:px-4 w-max text-md font-bold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center h-full">
                        <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                    </button>
                </div>

            </Link>



        </div>

    )
}

export default ProductList
