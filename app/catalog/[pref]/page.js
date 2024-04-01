import Navbar1 from '@/app/Conponents/Navbar1';
import Carousel from '@/app/Conponents/Carousel';
import React from 'react';
import ProductCard1 from '@/app/Conponents/ProductCard1';
import { getProducts } from '../page';
import ProductCard2 from '@/app/Conponents/ProductCard2';
import ViewAll from '@/app/Conponents/ViewAll';
import Navbar2 from '@/app/Conponents/Navbar2';

export default async function Prefrence({ searchParams }) {
  const products = await getProducts();
  const { nav, card, catalog } = searchParams;
  const ProductCard = (card == "productCard1") ? ProductCard1 : ProductCard2;
  const Catalog = (catalog == "carousel") ? ViewAll : Carousel;

  return <div>
    {(nav == "nav1") ? <Navbar1 /> : <Navbar2 />}
    {
      (catalog == "carousel") ?
        <Carousel initialProducts={products} ProductCard={ProductCard} Catalog={Catalog} /> :
        <ViewAll initialProducts={products} ProductCard={ProductCard} Catalog={Catalog} />
    }
  </div>;
}
