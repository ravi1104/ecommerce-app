import Navbar1 from '@/app/catalog/Conponents/Navbar1';
import Carousel from '@/app/catalog/Conponents/Carousel';
import React from 'react';
import ProductCard1 from '@/app/catalog/Conponents/ProductCard1';
import { getProducts } from '../page';
import ProductCard2 from '@/app/catalog/Conponents/ProductCard2';
import ViewAll from '@/app/catalog/Conponents/ViewAll';
import Navbar2 from '@/app/catalog/Conponents/Navbar2';

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
