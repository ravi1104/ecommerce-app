import React from "react";
import Navbar1 from "../Conponents/Navbar1";
import Carousel from "../Conponents/Carousel";
import ProductCard2 from "../Conponents/ProductCard2";

export const metadata = {
    title: 'Catalog'
}
export async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products?limit=10`)
    const data = await res.json()
    return data

}
async function first() {
    const products = await getProducts();
    // navbar 1 Carousel and ProductCard 1 on Default
    return (
        <>
            <Navbar1 />
            <Carousel initialProducts={products} ProductCard={ProductCard2} Catalog={Carousel} />
        </>
    )
}
export default first;
//rafce