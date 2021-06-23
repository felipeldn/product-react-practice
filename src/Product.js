import React from 'react'

function Product(props) {
    console.log(props)
    return (
        <div className="product-card">
            <h2>Product: {props.name}</h2>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Product
