import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenSidebar } from '../redux/slices/authSlice';
import UserAvatar from "./UserAvatar"
import NotificationBar from './NotificationBar';



const Navbar = () => {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Perform search logic here
    };
    return (
        <div className='flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky top-0 z-10'>
            <div className='flex gap-4'>
                <button
                    onClick={() => dispatch(setOpenSidebar(true))}
                    className='text-2xl text-gray-500 block md:hidden'>
                    ☰
                </button>
                {/* 
                <div className='w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]'>
                    <MdOutlineSearch className='text-gray-500 text-xl' />
                    <input
                        type="text" placeholder='search' className='flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800'
                        value={searchQuery}
                        onChange={handleSearchChange} />
                </div> */}

            </div>

            <div className='flex gap-2 items-center'>
                <NotificationBar />

                <UserAvatar />

            </div>

        </div>

    )
}

export default Navbar

