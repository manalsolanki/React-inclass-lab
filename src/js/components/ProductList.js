import React from "react"
import Product from './Product'
import tablet2 from '../../img/tablet2.jpg'
import hardisk from '../../img/harddisk.jpg'
import phone from '../../img/phone1.jpg'
import phone1 from '../../img/speaker.jpeg'
import earbuds from '../../img/earbuds.jpg'
// import pendrive from '../../img/pendrive.jpg '
const Products = [
    {
        img: tablet2,
        name: "Fire HD 10 Tablet (10.1 1080p full HD display, 32 GB) – Black (9th Generation)",
        price: " $199.99",
        featured: true
    },
    {
        id: "2", img: hardisk,
        name: "Seagate Portable 1TB External Hard Drive HDD – USB 3.0 for PC Laptop and Mac ",
        price: " $69.99",
        featured: false
    },
    {
        id: "3", img: earbuds,
        name: "Anker 4-Port USB 3.0 Ultra Slim Data Hub for MacBook, Mac Pro/Mini, iMac",
        price: " $19.99",
        featured: true
    },
    {
        id: "4", img: phone,
        name: "UMIDIGI Power3 Unlocked Smartphone 64GB+4GB RAM 6.53 FHD+ FullView",
        price: " $259.67",
        featured: true
    },


    {
        id: "5", img: phone1,
        name: "Samsung Galaxy A30S A307G 64GB Unlocked GSM Dual SIM Phone ",
        price: " $325.39",
        featured: false
    }


]

const ProductList = () => {



    return (
        <section>
            <h2 className="heading">Electronics</h2>
            <div className="product-card">
                {Products.map((item) => <Product name={item.name} img={item.img} price={item.price} />)}


            </div>
        </section>
    )
}


export default ProductList;