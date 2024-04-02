"use server"
import React from "react";
import Carousel from "../Conponents/Carousel";
import { getProducts } from "../actions";
import ViewAll from "../Conponents/ViewAll";

async function first() {
    const products = await getProducts();
    // navbar 1 Carousel and ProductCard 1 on Default
    return (
        <>
            <ViewAll initialProducts={products} userPref={{nav:"nav1",card:"productCard2"}}/>
            {/* <Carousel userPref={{nav:"nav1",card:"productCard2"}}/> */}
        </>
    )
}
export default first;
//rafce