import React from "react";
import Navbar1 from "../Conponents/Navbar1";
import Carousel from "../Conponents/Carousel";
import ProductCard1 from "../Conponents/ProductCard1";

export const metadata = {
    title: 'Catalog'
}
export async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    return data
}
async function first() {
    const products = await getProducts();
    // navbar 1 Carousel and ProductCard 1 on Default
    return (
        <>
            <Navbar1 />
            <Carousel initialProducts={products} ProductCard={ProductCard1} Catalog={Carousel}/>
        </>
    )
}
export default first;
//rafce