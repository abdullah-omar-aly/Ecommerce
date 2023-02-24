import ContactBar from '../../components/contact-bar'
import Navbar from '../../components/navbar'
import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPaginate from 'react-paginate'
import { faArrowLeft, faArrowRight, faFilter } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../../components/product-card'
import { products } from '../../dummyData'
import { useState } from 'react'
import useUpdateEffect from '../../hooks/useUpdateEffect'


function ProductsPage({ productsData, pagesCount, page, serverTags, categories }) {

    const router = useRouter()

    const [pageCount, setPageCount] = useState(page)
    const [filters, setFilters] = useState(serverTags)

    const handlePagination = ({ selected }) => {
        setPageCount(selected + 1)
    }

    const toggleFilter = ({ currentTarget }) => {
        setPageCount(1)
        if (currentTarget.checked) {
            setFilters(prev => [...prev, currentTarget.value])
        } else {
            setFilters(prev => prev.filter(val => val !== currentTarget.value))
        }
    }

    useUpdateEffect(() => {
        let tagsQuery
        let pageQuery

        filters.length > 0 ? tagsQuery = `&tags=${filters.toString()}` : tagsQuery = ''
        pageCount > 1 ? pageQuery = `page=${pageCount}` : pageQuery = ""

        const url = `/products?${pageQuery}${tagsQuery}`
        router.push(url)

    }, [pageCount, filters])

    return (
        <div className='container max-w-screen-xl'>

            <section className='flex gap-5'>
                <aside className='hidden lg:block min-w-[260px] bg-[#F1E9E4] p-5 rounded-xl'>
                    <h2 className='text-xl'>
                        <span className='mr-3'><FontAwesomeIcon icon={faFilter} className="w-5 h-5" /></span>
                        <span className='font-bold'>Filters</span>
                    </h2>
                    <div>
                        <h3 className='font-semibold'>Categories</h3>
                        <div>
                            {categories.map((category, ind) => (
                                <div key={ind} >
                                    <label className='flex items-center capitalize'><input type="checkbox" checked={filters.includes(category)} value={category} onChange={toggleFilter} /><span className='ml-4 inline-block'>{category}</span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                <main>
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
                </main>
            </section>

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
    const categories = ['rooms', 'office-furniture', 'lightining', 'mirrors']
    
    const { tags } = context.query
    let page = parseInt(context.query.page) || 1
    let limit = parseInt(context.query.limit) || 6
    const serverTags = tags ? tags.split(',') : []

    const start = (page - 1) * limit
    const end = (page - 1) * limit + limit
    const productsData = products.filter(product => {
        //filter products by tags(categories)
        if (serverTags.length === 0) return categories.some(serverTag => product.tags.includes(serverTag))
        return serverTags.some(serverTag => product.tags.includes(serverTag))
    }).slice(start, end)


    const productsLength = products.filter(product => {
        if (serverTags.length === 0) return categories.some(serverTag => product.tags.includes(serverTag))
        return serverTags.some(serverTag => product.tags.includes(serverTag))
    }).length
    return {
        props: {
            productsData,
            pagesCount: productsLength / limit,
            page: page,
            limit,
            serverTags,
            categories: ['rooms', 'office-furniture', 'lightining', 'mirrors']
        },
    };

}


