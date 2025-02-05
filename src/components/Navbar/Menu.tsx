
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className=''>
            <FontAwesomeIcon icon={faBars} size='lg' className='cursor-pointer' onClick={() => setOpen((prev) => !prev)} /> {
                open && (

                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc( 100vh - 80px)] flex flex-col items-center justify-center gap-8 z-10">
                        <Link href='/homepage'>Home</Link>
                        <Link href='/shop'>Shop</Link>
                        <Link href='/discount'>Discount</Link>
                        <Link href='/contact'>Contact</Link>
                        <Link href='/About'>About</Link>
                        <Link href='/logout'>Logout</Link>
                        <Link href='/cart'>Cart(1)</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu
