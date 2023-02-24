import ContactBar from '../../components/ContactBar'
import Navbar from '../../features/navbar/Navbar'
import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../../components/ProductCard'
import { products } from '../../dummyData'

function ProductsPage({ productsData, pagesCount, page }) {

  const router = useRouter()


  const handlePagination = ({ selected }) => {
    router.push(`/products?page=${selected + 1}`)
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
              productsData?.map((product, ind) => (<ProductCard product={product} key={product.id} />))
            }
          </div>
        }
      </div>

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

    </div>
  )
}
export default ProductsPage;


ProductsPage.getLayout = function pageLayout(page) {
  return (<>
    <ContactBar />
    <Navbar />
    {page}

  </>)
}


export async function getServerSideProps(context) {

    let page = parseInt(context.query.page) || 1
    let limit = parseInt(context.query.limit) || 6
  
    const start = (page - 1) * limit
    const end = (page - 1) * limit + limit
    const productsData = products.slice(start , end )
    
    return {
      props: {
        productsData,
        pagesCount: products.length / limit,
        page: page,
        limit
  
      },
    };
  
  }
  

