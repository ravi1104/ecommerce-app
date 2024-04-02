import React from "react";
import Navbar1 from "../Conponents/Navbar1";
import Carousel from "../Conponents/Carousel";
import ProductCard2 from "../Conponents/ProductCard2";
import { getProducts } from "../actions";

// Change of title if Catalog Page is fetched from server
export const metadata = {
    title: 'Catalog'
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