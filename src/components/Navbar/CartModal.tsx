import React from 'react'
import Image from 'next/image'
const CartModal = () => {
    const cartItems = true
    return (
        <div className=' w-max absolute p-4 rounded-md shadow-lg shadow-slate-700 bg-white top-12 right-0 flex flex-col gap-6 z-20'>
            {!cartItems ? (
                <div>
                    Cart Is Empty
                </div>
            ) : (

                <>
                    <div className='flex flex-col gap-3'>
                    <h2 className='text-black font-bold'>Shopping Cart</h2>
                    {/* Product Items */}
                    <div className='flex flex-col gap-6'>
                        {/* Product Items */}
                        <div className='flex gap-4'>
                            <Image
                                src="https://cdn.pixabay.com/photo/2022/03/17/04/57/cosmetic-products-7073743_640.jpg"
                                alt="Description of the image"
                                width={90}
                                height={90}
                                className='object-cover rounded-md'
                            />
                            <div className=" flex flex-col justify-between w-full">
                                {/* Top */}
                                <div className="">
                                    {/* Title */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>
                                            Product Name
                                        </h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>
                                            $12
                                        </div>

                                    </div>

                                    {/* Desc */}
                                    <div className='text-sm text-gray-500'>
                                        Available
                                    </div>

                                </div>


                                {/* Bottom */}
                                <div className="flex justify-between text-sm">
                                    <span className='text-gray-500'>QTY: 2</span>
                                    <span className='text-blue-500'> Remove</span>
                                </div>
                            </div>
                        </div>
                        {/* Product Items */}
                        <div className='flex gap-4'>
                            <Image
                                src="https://cdn.pixabay.com/photo/2016/07/26/16/49/cosmetics-1543286_1280.jpg"
                                alt="Description of the image"
                                width={90}
                                height={90}
                                className='object-cover rounded-md'
                            />
                            <div className=" flex flex-col justify-between w-full">
                                {/* Top */}
                                <div className="">
                                    {/* Title */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>
                                            Product Name
                                        </h3>
                                        <div className='p-1 bg-gray-50 rounded-sm'>
                                            $12
                                        </div>

                                    </div>

                                    {/* Desc */}
                                    <div className='text-sm text-gray-500'>
                                        Available
                                    </div>

                                </div>


                                {/* Bottom */}
                                <div className="flex justify-between text-sm">
                                    <span className='text-gray-500'>QTY: 2</span>
                                    <span className='text-blue-500'> Remove</span>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/*Bottom */}
                    <div className="">
                        <div className=" flex justify-between items-center font-semibold">
                            <span > Subtotal</span>
                            <span > $40 </span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4 text-center'>Shipping and taxes calculated at checkout</p>
                        <div className=' flex items-center justify-between text-sm'>
                            <button className='rounded-md py-3 px-4 ring-2 ring-gray-300'> View Cart</button>
                            <button className=" rounded-md shadow-md shadow-slate-700 py-3 px-4 bg bg-black text-white"> Checkout</button>

                        </div>
                    </div>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default CartModal
