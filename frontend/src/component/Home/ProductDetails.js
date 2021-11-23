import React from 'react'

const ProductDetails = ({ products }) => {
    return (
        <div>
            <p>{products[0].low}</p>
        </div>
    )
}

export default ProductDetails
