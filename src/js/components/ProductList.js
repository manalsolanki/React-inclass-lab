import React from "react"

const ProductList = () => {

    return (
        <section>
            <h2 className="heading">Electronics</h2>
            <div className="product-card">
                {/* {{ #each products }} */}
                <div className="detailed-card">
                    <img src="/img/{{this.img}}" />
                    <h4>thisname </h4>
                    <div className="bottom-card">
                        <p className="price"> CAD thisprice </p>
                        <button className="button-cart">
                            <span className="material-icons">
                                shopping_cart
					        </span>
                        </button>
                    </div>
                </div>
                {/* {{/ each}} */}

            </div>
        </section>
    )
}


export default ProductList;