import React from 'react'

function Product(props) {
    console.log(props)
    return (
        <div className="product-card">
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-UK", {style: "currency", currency: "GBP"})}
            - {props.product.description}</p>
        </div>
    )
}

export default Product
