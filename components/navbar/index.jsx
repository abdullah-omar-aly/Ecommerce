import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { cartActions } from "../cart/CartSlice"
import {  useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Link from 'next/link'

const Navbar = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  return (
    <div className='bg-white sticky z-10 top-10 mb-7 '>
      <div className="container max-w-screen-xl lg:rounded-b-[60px]	 bg-[#F1E9E4] shadow-md">
        <div className='flex items-center justify-between h-16 '>
            <div className='lg:hidden'>
              <FontAwesomeIcon icon={faBars} />
            </div>

            <h1 className='capitalize text-white font-semibold text-xl'><span className='text-primary'>E</span>commerce</h1>

            <div className='flex gap-5'>
              <Link href="/">Home</Link>
              <Link href='/products'>Products</Link>
            </div>

            <button 
                onClick={() =>{ dispatch(cartActions.showCart())  }}
                className="relative group border-0"
            >
            <FontAwesomeIcon 
 
                icon={faCartShopping}
                className=" text-primary lg:text-black group-hover:text-primary text-xl"
                />
                  <span className='bg-red-600 text-white rounded-full text-sm w-5 h-5 absolute -top-3 -right-2'>{cart.cartProducts.length}</span>
            </button>
        </div>

    </div>
    </div>
  )
}

export default Navbar