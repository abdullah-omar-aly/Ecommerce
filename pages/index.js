import ContactBar from '../components/ContactBar'
import Navbar from '../features/navbar/Navbar'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions, selectCartItems } from "../features/cart/CartSlice"
import { useRouter } from 'next/router'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import ReactPaginate from 'react-paginate'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HomePage({ productsData, pagesCount, page }) {


  const cart = useSelector(selectCartItems)
  const dispatch = useDispatch()


  const router = useRouter()
  const handlePagination = ({ selected }) => {
    router.push(`/?page=${selected + 1}`)
  }



  return (
    <div className='container max-w-screen-xl'>

      {
        productsData?.length === 0 && <h1 className='text-3xl font-bold text-center'>No products founded</h1>
      }
      <div>
        {
          productsData && <div className='flex flex-wrap gap-4 justify-center '>
            {
              productsData?.map((product, ind) => (

                <div key={ind} className='relative flex flex-col justify-between  bg-white rounded-lg overflow-hidden  shadow-xl pt-6 flex-grow w-60 ' style={{ height: "450px" }}>
                  <div className='discount absolute left-0 top-0 bg-main-yellow px-3  rounded-br-xl tracking-tighter text-white h-6 '>
                    <strong className='block h-full'>- {product.discount} %</strong>
                  </div>
                  <a className='flex items-center justify-center my-auto  w-auto overflow-hidden'>
                    <Image src={`/slideshow1.png`} alt="" height="300" width="200" style={{ maxHeight: "300px" }} />
                    {/* <Image src={product.image} alt="" height="300" width="200" style={{ maxHeight: "300px" }} /> */}
                  </a>
                  <div className='flex justify-center flex-col px-3 h-40'>
                    <h3 className='text-lg text-normal-gray font-bold h-8'>{product.name}  </h3>
                    <p>{product.category}</p>
                    <div className='price flex items-center '>
                      <h4 className='before-discountfont-bold text-lg text-black mr-3' >{product.price - product.price * (product.discount / 100)} $</h4>
                      <h4 className='after-discount font-medium  text-md line-through text-slate-500'>{product.price} $</h4>
                    </div>
                    <div className='h-5 w-5 my-1'><FontAwesomeIcon icon={faStar} /></div>
                    <button
                      className='bg-primary mx-auto font-bold text-sm text-white py-1 px-4 capitalize rounded-md'
                      onClick={() => {
                        // check if the product is in the cart or not
                        const Ind = cart.cartProducts.findIndex(item => item.id === product._id)
                        // if it doesn't exist in the cart 
                        if (Ind === -1) {
                          console.log("doesn't exist in the cart")
                          dispatch(cartActions.addToCart(product))
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

              ))
            }
          </div>
        }
      </div>


      {
        <nav className='flex justify-center my-10'>
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
            nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
            previousAriaLabel='previous'
            nextAriaLabel='next'
            breakLabel="...."
            pageCount={pagesCount}
            forcePage={page ? (Number(page) - 1) : 0}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePagination}
            containerClassName='flex gap-3 items-center'
            previousClassName='transition duration-200 hover:-translate-x-1'
            nextClassName='transition duration-200 hover:translate-x-1'
            pageLinkClassName='rounded-full border inline-flex items-center justify-center border-primary w-8 h-8 hover:bg-primary hover:text-white'
            nextLinkClassName='rounded-full bg-primary text-white px-3 py-1'
            previousLinkClassName='rounded-full bg-primary text-white px-3 py-1'
            activeLinkClassName='bg-primary text-white'
            breakClassName='text-main-yellow'
          />
        </nav>
      }
    </div>
  )
}
export default HomePage;


HomePage.getLayout = function pageLayout(page) {
  return (<>
    <ContactBar />
    <Navbar />
    {page}

  </>)
}




export async function getServerSideProps(context) {

  const page = parseInt(context.query.page) || 1
  const limit = parseInt(context.query.limit) || 3

  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?_page=${page}&_limit=${limit}`)
  const products = response.data

  const totalProducts = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`)

  return {
    props: {
      productsData: JSON.parse(JSON.stringify(products)),
      pagesCount: totalProducts.data.length / limit,
      page: page,
      limit

    },
  };

}
