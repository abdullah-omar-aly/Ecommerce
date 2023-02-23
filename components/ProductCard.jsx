import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectCartItems } from "../features/cart/CartSlice"
function ProductCard({ product }) {
    const cart = useSelector(selectCartItems)
    const dispatch = useDispatch()
    return (
        <div className='relative flex flex-col justify-between  bg-white rounded-lg overflow-hidden  shadow-xl pt-6 flex-grow w-60 ' style={{ height: "450px" }}>
            <div className='discount absolute left-0 top-0 bg-main-yellow px-3  rounded-br-xl tracking-tighter text-white h-6 '>
                <strong className='block h-full'>- {product.discount} %</strong>
            </div>
            <a className='flex items-center justify-center my-auto  w-auto overflow-hidden'>
                <Image src={`/slideshow1.png`} alt="" height="300" width="200" style={{ maxHeight: "300px" }} />
                {/* <Image src={product.image} alt="" height="300" width="200" style={{ maxHeight: "300px" }} /> */}

                {/* <Image alt={product.name} src={product.image}  height="300" width="200" style={{ maxHeight: "300px" }} /> */}
            </a>
            <div className='flex justify-center flex-col px-3 h-40'>
                <h3 className='text-lg text-normal-gray font-bold h-8 truncate'>{product.title}  </h3>
                <p>{product.category}</p>
                <div className='price flex items-center '>
                    <h4 className='before-discountfont-bold text-lg text-black mr-3' >{(product.price - product.price * (product.discount / 100)).toFixed(2)} $</h4>
                    <h4 className='after-discount font-medium  text-md line-through text-slate-500'>{product.price.toFixed(2)} $</h4>
                </div>
                <div className='h-5 w-5 my-1'><FontAwesomeIcon icon={faStar} /></div>
                <button
                    className='bg-primary mx-auto font-bold text-sm text-white py-1 px-4 capitalize rounded-md'
                    onClick={() => {
                        // check if the product is in the cart or not
                        const Ind = cart.cartProducts.findIndex(item => item.id === product.id)
                        // if it doesn't exist in the cart 
                        if (Ind === -1) {
                            console.log("doesn't exist in the cart")
                            dispatch(cartActions.addToCart(product))
                            console.log(product)
                        } else {
                            console.log('already exist')
                        }
                        dispatch(cartActions.showCart())
                    }
                    }
                >
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard