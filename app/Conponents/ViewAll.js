"use client"
import React, { useEffect, useState, useRef } from 'react';
import { getNextProduct } from '../actions';
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";

// view all Component which implements infinite scroll

function ViewAll({ initialProducts, userPref }) {
  const [products, setProducts] = useState(initialProducts);
  const { nav, card } = userPref;
  const loadMoreRef = useRef(null);
  const ProductCard = (card == "productCard1") ? ProductCard1 : ProductCard2;
  // use of useRef to get IntersectionObserver

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        fetchNewProducts();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [products]);

  // server side getNextProduct

  async function fetchNewProducts() {
    const data = await getNextProduct();
    setProducts((prevProducts) => [...prevProducts, data]);
  }
  return (
    <>
      {(nav == "nav1") ? <Navbar1 /> : <Navbar2 />}
      <div className="bg-white sm:flex flex-wrap flex-col rounded-lg shadow-md p-4 overflow-auto">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
        <div ref={loadMoreRef} className="h-10"></div>
      </div>
    </>
  );
}

export default ViewAll;
