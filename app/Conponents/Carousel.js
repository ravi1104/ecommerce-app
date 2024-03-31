"use client"

import React, { useEffect, useState } from 'react';

function Carousel({ initialProducts, ProductCard, Catalog }) {
  const [products, setProducts] = useState(initialProducts);
  const [count,setCount] =useState(10);
  
  useEffect(() => {
  }, [products])

  async function fetNewProducts() {
    if(count>20){
      return
    }
    const res = await fetch(`https://fakestoreapi.com/products/${count}`)
    setCount(count+1);
    const data = await res.json()
    setProducts([...products,data]);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <button className="block mx-auto mb-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next Carousel can be done on client side</button>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} carousel={true} />
      ))}
      
    </div>

  );
}

export default Carousel;
