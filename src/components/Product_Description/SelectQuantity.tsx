'use client'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faAdd } from '@fortawesome/free-solid-svg-icons'

const SelectQuantity = () => {

    const stock = 20;
    const [quantity, setQuantity] = useState(1);
    const handleQuanity = (type: 'i' | 'd') => {
        if (type === 'd' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === 'i' && quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-md md:text-lg lg:text-xl"> Choose Quantity</h4>
            <div className=" flex items-center  gap-4">
                <div className=" flex gap-2 items-center justify-between py-1 ring-1 ring-gray-600  ">
                    <button className="text-lg font-bold cursor-pointer px-4" onClick={() => handleQuanity('d')}><FontAwesomeIcon icon={faMinus} className='cursor-pointer' /></button>
                    {quantity}
                    <button className="text-lg font-bold cursor-pointer px-4" onClick={() => handleQuanity('i')} ><FontAwesomeIcon icon={faAdd} className='cursor-pointer' /></button>
                </div>
                <div className="text-sm font-semibold"> Only <span className="text-orange-700">20 items</span> left! Don't mis it.</div>
            </div>
            <button className="rounded-xl ring-1 ring-black py-3 px-2 w-1/2 text-sm md:text-base font-bold bg-black text-white hover:shadow-lg hover:shadow-slate-600 items-center flex justify-center disabled:cursor-not-allowed disabled:bg-slate-300 disabled:ring-slate-300 disabled:text-slate-500 disabled:shadow-red-600">
                Add to Cart
            </button>

        </div>
    )
}

export default SelectQuantity
