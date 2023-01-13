import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { cartActions } from "../cart/CartSlice"
import {  useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  return (
    <div className='bg-white sticky z-10 top-0 mb-7 shadow-md'>
      <div className="container max-w-screen-xl ">
        <div className='flex items-center justify-between h-16 '>
            <h1 className='capitalize font-semibold text-xl'><span className='text-primary'>E</span>commerce</h1>


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