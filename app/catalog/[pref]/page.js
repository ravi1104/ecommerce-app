"use server"
import Carousel from '@/app/Conponents/Carousel';
import React from 'react';
import { getProducts } from '@/app/actions';
import ViewAll from '@/app/Conponents/ViewAll';

// getting initial products from server
const products=await getProducts();

export default async function Prefrence({ searchParams }) {
  const { catalog } = searchParams;
  // if catalog= carousel then component Carousel else View all component
  return <div>
    {
      (catalog == "carousel") ?
        <Carousel userPref={searchParams} /> :
        <ViewAll userPref={searchParams} initialProducts={products}/>
    }
  </div>;
}
