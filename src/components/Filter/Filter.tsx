import React from 'react'

const Filter = () => {
    return (
        <div className='flex flex-col gap-4 md:flex-row md:gap-0 justify-between'>
            <div className=" flex gap-4 flex-wrap">
                <select name="type" id="" className='py-2 px-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>
                        Type
                    </option>
                    <option value="">
                        Men
                    </option>
                    <option value="">
                        Women
                    </option>
                    <option value="">
                        Children
                    </option>

                </select>
                <input type="text" name='min' placeholder='Min price' className=' text-xs rounded-2xl pl-3 w-20 ring-1 ring-gray-400' />
                <input type="text" name='max' placeholder='Max price' className=' text-xs rounded-2xl pl-3 w-20 ring-1 ring-gray-400' />
                <select name="type" id="" className='py-2 px-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>
                        Categories
                    </option>
                    <option value="">
                        T-Shirt
                    </option>
                    <option value="">
                        Shirt
                    </option>
                    <option value="">
                        Pant
                    </option>

                </select>
                <select name="type" id="" className='py-2 px-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>
                        Size
                    </option>
                    <option value="">
                        Small
                    </option>
                    <option value="">
                        Medium
                    </option>
                    <option value="">
                        Large
                    </option>
                    <option value="">
                        X Large
                    </option>
                    <option value="">
                        XX Large
                    </option>

                </select>
                
                <select name="type" id="" className='py-2 px-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>
                        Timing
                    </option>
                    <option value="">
                        New Arrival
                    </option>
                    <option value="">
                        Regular
                    </option>

                </select>
            </div>
            <div className="">
            <select name="type" id="" className='py-2 px-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>
                        Sort By
                    </option>
                    <option value="">
                        Price (low to hight
                    </option>
                    <option value="">
                        Price (hight to low)
                    </option>
                    <option value="">
                        Newest
                    </option>
                    <option value="">
                        Oldest
                    </option>

                </select>
            </div>
        </div>
    )
}

export default Filter
