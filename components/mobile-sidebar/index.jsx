import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faUserCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
// import navLinks from '../Data/NavData'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import {  hideSidebar } from "../Redux/Sidebar/SidebarSlice"

const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/products', text: 'Products' },
]

function MobileSidebar() {
    //   const dispatch = useDispatch()
    //   const sidebar = useSelector((state) => state.sidebar.isVisible)
    // return (
    //     // <div className={`fixed z-40 top-0 left-0 bottom-0 w-72 transition-transform ease-in-out duration-500 ${sidebar ? "" : "-translate-x-72"}`}>

    return (
        <div className={`fixed z-40 top-0 left-0 bottom-0 w-72 transition-transform ease-in-out duration-500`}>
            <div className='bg-dark-gray w-full h-full text-white px-4 '>
                <div className='py-5 pl-1 border-normal-gray border-b'>
                    <button
                        className='cursor-pointer text-2xl border-none'
                    // onClick={() => { dispatch(hideSidebar())}} 
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div>
                        <div className='flex flex-col'>
                        {
                        navLinks.map((link, ind) =>


                            <Link
                                key={ind}
                                href={link.href}
                            // onClick={() => {  dispatch(hideSidebar()) }}                                    
                            >
                                <a className='border-secondary-400 border-b border-1 text-md rounded-md px-2  hover:bg-primary tracking-wider uppercase  py-3 block w-full'>{link.text}</a>
                            </Link>
                        )
                    }
                        </div>
                </div>
                <div>
                    <Link
                        href="/auth/login"
                    // onClick={() => { dispatch(hideSidebar())  }} 
                    >
                        <div className='py-2 pl-2 mt-2 hover:text-[#E78B40] cursor-pointer'>
                            <span className='pr-3'><FontAwesomeIcon icon={faUserCheck} /></span>
                            <span className='uppercase'>log in</span>
                        </div>
                    </Link>

                    <Link
                        // onClick={() => {  dispatch(hideSidebar()) }} 
                        href='/auth/signup'
                    >
                        <div className='py-2 pl-2 mt-2 hover:text-[#E78B40] cursor-pointer'>
                            <span className='pr-3'><FontAwesomeIcon icon={faUser} /></span>
                            <span className='uppercase'>create account</span>
                        </div>
                    </Link>
                </div>
                <div className='mt-8 relative'>
                    <input className='search-field bg-secondary-400 px-3 py-3 w-full text-sm pr-10' type="text" placeholder="Search something" />
                    <span className='p-3 pr-4 cursor-pointer absolute right-0 top-0'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar