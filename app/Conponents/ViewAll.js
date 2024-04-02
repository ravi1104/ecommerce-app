"use client"
import React, { useEffect, useState, useRef } from 'react';
import { getNextProduct } from '../actions';

// view all Component which implements infinite scroll

function ViewAll({ initialProducts, ProductCard, Catalog }) {
  const [products, setProducts] = useState(initialProducts);
  const loadMoreRef = useRef(null);

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
  }, [ products]);

  // server side getNextProduct
  
  async function fetchNewProducts() {
    const data=await getNextProduct();
    setProducts((prevProducts) => [...prevProducts, data]);
  }
  return (
    <div className="bg-white sm:flex flex-wrap flex-col rounded-lg shadow-md p-4 overflow-auto">
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
      <div ref={loadMoreRef} className="h-10"></div>
    </div>
  );
}

export default ViewAll;
