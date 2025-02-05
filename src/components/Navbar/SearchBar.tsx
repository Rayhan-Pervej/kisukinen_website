'use client'
import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';


const SearchBar = () => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;


    };
    return (

        <form className='flex items-center justify-beween gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch} >
            <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none' />
            <button className='cursor-pointer'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' />
            </button>
        </form>

    );
}

export default SearchBar
