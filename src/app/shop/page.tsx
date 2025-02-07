'use client';
import React from 'react';
import Filter from '@/components/Filter/Filter';
import ProductList from '@/components/Product_List/ProductList';

const shop = () => {
  return (
    <div className=' relative'>
      {/* CAMPAIGN */}
      <div className=" bg-blue-200  flex justify-center items-center h-10 md:h-20 lg:h-32">

        <div className=' md:text-4xl lg:text-6xl font-bold'>
          20% Cash Back On Summer Sale!
        </div>
      </div>
      {/* Search Bar */}
      <div className="mt-6 md:mt-16 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64"><Filter /></div>

      <div className="mt-6 md:mt-16 px-2 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <ProductList />
        </div>
    </div>

    
  )
}

export default shop
