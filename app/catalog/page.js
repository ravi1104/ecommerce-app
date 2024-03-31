import React from "react";
import Navbar1 from "../Conponents/Navbar1";
import ProductCard1 from "../Conponents/ProductCard1";
import Carousel from "../Conponents/Carousel";

export const metadata={
    title:'Catalog'
}
export async function getProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    return { props: [ data ] }
  }
async function first(){
    const projects=await getProducts();
    
    return(
        <>  
        <Navbar1 />
        <ProductCard1 projects={projects} />
        <Carousel/>
        </>
    )
}
export default first;
//rafce