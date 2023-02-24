import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLinks } from '../../dummyData'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

function ContactBar() {
    return (
        <div className='sticky z-10 top-0'>
            <div className="bg-primary text-white">
                <div className="container flex justify-between items-center max-w-screen-2xl h-10">
                    <div className=' hidden lg:block'>
                        <span className='uppercase text-xs'>order online or call us (+20 1020 304050)    </span>
                        <span>EG</span>
                    </div>


                    <div className='flex items-center justify-between flex-grow lg:flex-grow-0'>
                        <Link href="/auth/login" >
                            <a className='p-1 text-sm mr-4  flex items-center'>
                                <span className='flex items-center justify-center'> <FontAwesomeIcon icon={faUser} className="text-lg" /></span>
                                <span className='ml-2'>Sing In</span>
                            </a>
                        </Link>
                        <ul className="flex justify-center items-center">
                            {
                                SocialLinks.map((link, ind) => (
                                    <li className='p-1 ' style={{ "fontSize": "14px" }} key={ind}>
                                        <a className='group' href={link.href} title={link.text}>
                                            <FontAwesomeIcon icon={link.icon} className="p-2 hover:ease-out hover:duration-400 group-hover:transition group-hover:scale-150 transform-gpu" />
                                        </a>
                                    </li>
                                )

                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}

export default ContactBar