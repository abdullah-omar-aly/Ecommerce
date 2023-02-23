import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux'
import { faXmark , faPlus, faMinus, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import  {cartActions, selectCartItems }  from './CartSlice';
import { useEffect } from 'react';
import Link from 'next/link'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';


function Cart () {
    const cart = useSelector(selectCartItems)

  const dispatch = useDispatch()
console.log('cart' , cart)

    useEffect(() => {
      dispatch(cartActions.handleAppInit())
    }, [])

    return (
      <>
        <div 
            className={`glass-layer fixed top-0 left-0 w-screen h-screen transition-all  z-1-  ${cart.isVisible ? "z-30 bg-semi-transparent" : "delay-300 z-[-1] bg-transparent"}`}
            onClick={() => { if (cart.isVisible) {dispatch(cartActions.hideCart())} }  } 
        >
            <style jsx="true">
                {` ${cart.isVisible ? "html{overflow: hidden}" : ""}`}
            </style>

        </div>
        <div style={{maxWidth: "100%"}} className={` fixed z-40 top-0 right-0 h-screen w-80 md:w-96 transition-transform ease-in-out duration-500 ${cart.isVisible ? "" : "translate-x-96"}`}> 
            <div className=' bg-dark-gray w-full h-screen text-white px-4 flex flex-col '> 
                <h2 className=' py-6 uppercase  border-normal-gray border-b font-semibold text-lg flex justify-between items-center h-20'>
                    <div>
                        <span>your cart</span>
                        <span className='ml-3 text-sm font-normal lowercase text-slate-300'>{`(${cart.cartProducts.length} items)`}</span>
                    </div>
                    <button 
                        onClick={() => { dispatch(cartActions.hideCart()) }} 
                        className='cursor-pointer text-2xl mr-2 p-2 border-none'
                        >
                            <FontAwesomeIcon icon={faXmark} />
                    </button>
                </h2>

                        {
                         cart.cartProducts.length  === 0
                        ? <p className='text-sm pt-4'>Your cart is currently empty</p>
                        : <div 
                                className='flex flex-col justify-between h-full ' 
                                > 

                            <div className='cart-items flex flex-col overflow-auto '
                                   style={{maxHeight: "calc(100vh - 240px)"}}
                            >
                            {cart.cartProducts.map((cartProduct , ind) => (
                                <div  key={ind}  className=" border-b border-normal-gray py-3 flex gap-3"        >
                                    <Link 
                                        href={`/products/${cartProduct.id}`}
                                       
                                    >
                                        <a className='w-20 h-20 bg-gray-200 rounded-sm block'
                                         onClick={() => {  dispatch(cartActions.hideCart()) }}
                                        >
                                            {/* <img 
                                                src={cartProduct.image} 
                                                alt=""
                                                className='object-fit '
                                                /> */}
                                        </a>
                                    </Link>
                                    <div className='flex flex-col justify-between flex-grow'>
                                        <div className='flex justify-between'>
                                            <span className='capitalize'>
                                                <Link 
                                                    href={`/products/${cartProduct.id}`}    
                                                >
                                                    <a  className="w-40 inline-block truncate" onClick={() => { dispatch(cartActions.hideCart())  }}>
                                                            {cartProduct.title}
                                                    </a>
                                                </Link>
                                            </span>
                                            <button className='mr-3 border-none' onClick={() => {dispatch(cartActions.removeCartProduct({productId: cartProduct.id}))}}>
                                                <FontAwesomeIcon icon={faXmarkCircle} />
                                            </button>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center justify-center '>
                                                <button 
                                                     className='border border-normal-gray  px-1 text-sm'
                                                     onClick={() => {
                                                        dispatch(cartActions.decreaseProductQuantity({
                                                            productId: cartProduct.id,
                                                            quantity: 1
                                                        }))
                                                     }}
                                                >
                                                    <FontAwesomeIcon icon={faMinus}/>
                                                </button>
                                                <span className='p-2 border border-normal-gray'>{cartProduct.quantity}</span>
                                                <button 
                                                    className='border border-normal-gray px-1 text-sm'
                                                    onClick={() => {
                                                        dispatch(cartActions.increaseProductQuantity({
                                                            productId: cartProduct.id,
                                                            quantity: 1
                                                        }))
                                                    } }

                                                >
                                                    <FontAwesomeIcon icon={faPlus}/>
                                                </button>
                                            </div>
                                            <div className='w-fit pr-3'><FontAwesomeIcon className="text-primary" icon={faXmark} /> {cartProduct.price} $</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <style jsx="true">
                                {`
                                .cart-items::-webkit-scrollbar {
                                    width: 5px;
                                  }
                                `}
                            </style>
                            </div>
                            <div className='border-t border-normal-gray h-40'>
                                <div className='flex justify-between items-center py-2' >
                                    <span className='uppercase'>subtotal</span>
                                    <span>{cart.totalPrice} $</span>
                                </div>
                                <p className="text-center italic text-slate-400">Shipping, taxes, and discounts calculated at checkout</p>
                                <button 
                                    className='uppercase bg-primary w-full py-2 my-3 border-none'
                                >
                                    <span className='mr-3'>check out</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                    
                                </button>
                            </div>
                        </div>
                    
                    
                    
                       }
                    
            </div>
      </div>
      </>

  );
};

export default Cart;

