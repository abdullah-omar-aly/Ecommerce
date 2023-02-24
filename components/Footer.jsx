import React from 'react'
import {SocialLinks} from '../dummyData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <footer>
            <div className="d-fixed bottom-0 bg-[#000] text-white py-5">
                <div className="container flex justify-center items-center max-w-screen-2xl h-10">
                    <div className='flex items-center'>
                        <ul className="flex justify-center items-center">
                            {
                                SocialLinks.map((link , ind) => (
                                    <li className='p-1 ' style={{"fontSize": "20px" }} key={ind}>
                                        <a className='group' href={link.href} title={link.text}>
                                                <FontAwesomeIcon icon={link.icon} className="p-2 hover:ease-out hover:duration-400 group-hover:transition group-hover:scale-150 transform-gpu"/>
                                        </a>
                                    </li>
                                )
                                     
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        )
}

export default Footer