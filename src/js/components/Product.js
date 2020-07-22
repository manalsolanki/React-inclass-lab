import React from 'react'

const Product = ({name , img , price}) => {
    const AddToCart = (event) => {
        alert("hello")
    }
    return (
        <div className="detailed-card">
            <img src={img} />
            <h4>{name}</h4>
            <div className="bottom-card">
                <p className="price"> CAD {price} </p>
                <button onClick={AddToCart} className="button-cart">
                    <span className="material-icons">
                        shopping_cart
					        </span>
                </button>
            </div>
        </div>
    )

}

export default Product;