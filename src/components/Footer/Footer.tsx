'use client'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import { faFacebook, faInstagram, faXTwitter, faCcVisa, faCcAmazonPay, faCcMastercard, faCcPaypal, } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import SearchBar from '../Navbar/SearchBar';

const Footer = () => {
    return (
        <div className="mt-10 px-4 pt-10 pb-4 rounded-t-lg md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-teal-50">
            {/* TOP */}
            <div className='md:flex justify-between '>
                <div className='flex flex-col gap-4 md:w-1/4'>
                    <span className='text-xl font-semibold'>KisuKinen</span>
                    <div className='flex gap-4 items-center md:items-start flex-col'>
                        <div className='flex md:flex-col gap-4'>
                            <span className='text-gray-600'>
                                Bashundhara R/A, Dhaka Bangladesh
                            </span>
                            <div className=' flex flex-col gap-2 md:gap-4'>
                                <Link href='/' className='text-slate-600'>
                                    contact@kisukinen.com
                                </Link>
                                <Link href='/' className='text-slate-600'>
                                    +880123456789
                                </Link>

                            </div>
                        </div>
                        <div className='gap-4 flex text-4xl text-slate-600'>
                            <Link href=''>
                                <FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link href=''>
                                <FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link href=''>
                                <FontAwesomeIcon icon={faXTwitter} /></Link>
                        </div>
                    </div>
                </div>


                <div className='hidden md:flex flex-col gap-4'>
                    <h1 className='font-bold text-xl'> COMPANY</h1>

                    <div className='flex flex-col gap-2'>
                        <Link href='/'> About Us
                        </Link>
                        <Link href='/'> Careers
                        </Link>
                        <Link href='/'> Affiliates
                        </Link>
                        <Link href='/'> Blog
                        </Link>
                        <Link href='/'> Contact Us
                        </Link>

                    </div>
                </div>
                <div className='hidden md:flex flex-col gap-4'>
                    <h1 className='font-bold text-xl'> HELP</h1>

                    <div className='flex flex-col gap-2'>
                        <Link href='/'> Customer Service
                        </Link>
                        <Link href='/'> My Account
                        </Link>
                        <Link href='/'> Find a Store
                        </Link>
                        <Link href='/'> Legal & Privacy
                        </Link>
                        <Link href='/'> Gift Card
                        </Link>

                    </div>
                </div>


                <div className="flex flex-col gap-4 md:w-1/4 mt-5 md:mt-0 ">
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-xl'>SUBSCRIBE</h1>
                        <span className='text-slate-600'>Be the first to get latest news about trends, new collections, limited exlusive products and much more!</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Email Address' className='p-2 md:w-3/4 bg-gray-200 placeholder-gray-600 rounded-md shadow-md shadow-slate-600 focus:outline-none' />
                        <button className=' w-1/4 bg-black shadow-md shadow-slate-600 text-white rounded-md font-semibold text-sm'>JOIN</button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold'> Our Paymnet Methods</h3>
                        <div className='flex gap-3'>
                            <FontAwesomeIcon icon={faCcVisa} size="2x" className="text-blue-600" />
                            <FontAwesomeIcon icon={faCcAmazonPay} size="2x" className="text-yellow-500" />
                            <FontAwesomeIcon icon={faCcMastercard} size="2x" className="text-red-600" />
                            <FontAwesomeIcon icon={faCcPaypal} size="2x" className="text-blue-400" />

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className='flex flex-col pt-6 md:flex-row-reverse justify-between items-center md:gap-8 gap-2'>
                <div className='flex flex-col md:flex-row items-center md:gap-8 gap-2'>
                    <div className=' '>
                        <span className='text-gray-500 mr-2 font-semibold'>Language</span>
                        <span className='font-semibold'>Bangladesh | English</span>
                    </div>
                    <div className=' '>
                        <span className='text-gray-500 mr-2 font-semibold'>Currency</span>
                        <span className='font-semibold'>$USD</span>
                    </div>
                </div >
                <div className='flex items-center gap-1'> <FontAwesomeIcon icon={faCopyright} className='cursor-pointer' /> KisuKinen Shop</div>

            </div>
        </div>

    )
}

export default Footer
