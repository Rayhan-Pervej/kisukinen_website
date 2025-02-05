import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push(`/login`);
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative text-xl'>
      <FontAwesomeIcon icon={faUser} onClick={handleProfile} className='cursor-pointer' />
      {
        isProfileOpen && (
          <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-md z-20'>
            <Link href='/'> Profile</Link>
            <div className='mt-2 cursor-pointer'> Lgout</div>
          </div>
        )
      }
      <FontAwesomeIcon icon={faBell} className='cursor-pointer' />
       <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
      <div className='relative cursor-pointer'>
        <FontAwesomeIcon icon={faCartShopping} onClick={() => setCartOpen(prev => !prev)} />

        <div className='absolute -top-3  -right-3 w-5 h-5 bg-red-500 rounded-full text-white text-sm flex items-center justify-center'>
          2
        </div>
      </div>
      {
        isCartOpen && (
          <CartModal />
        )
      }
    </div>

  )
}

export default NavIcons
