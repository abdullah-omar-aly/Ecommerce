import React from 'react'

function ProductDetailsPage({productData}) {
  return (
    <div>
        <h1>Product Details Page {`[in-progress]`}</h1>
        <p>productId is {productData}</p>
    </div>
  )
}

export default ProductDetailsPage

export async function getServerSideProps(context) {
    const {params} = context
    console.log(params)
    return {
        props: {
            productData: params.productId
        }
    }
}