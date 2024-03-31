"use client"
import React, { useEffect, useState, useRef } from 'react';

function ViewAll({ initialProducts, ProductCard, Catalog }) {
  const [products, setProducts] = useState(initialProducts);
  const [count, setCount] = useState(10);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting && count <= 20) {
        fetNewProducts();
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
  }, [count, products]);

  async function fetNewProducts() {
    if (count > 20) {
      return;
    }
    const res = await fetch(`https://fakestoreapi.com/products/${count}`);
    setCount((prevCount) => prevCount + 1);
    const data = await res.json();
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
