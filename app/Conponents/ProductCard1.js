"use client"
import React, { useState } from 'react';

function ProductCard1({ product ,carousel}) {
  const [nextProduct, setNextProduct] = useState(product);
  const [prevProduct, setPrevProduct] = useState(null);
  const [count, setCount] = useState(10);

  async function fetchNextProduct() {
    if (count > 20) {
      return;
    }
    const res = await fetch(`https://fakestoreapi.com/products/${count}`);
    setCount(count + 1);
    const data = await res.json();
    setPrevProduct(product);
    setNextProduct(data);
  }

  function fetchPrevProduct() {
    if (count <= 10) {
      return;
    }
    setCount(count - 1);
    setNextProduct(prevProduct);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-5 sm:flex transition duration-300 ease-in-out transform hover:scale-105">
      {nextProduct && (
        <div className="space-y-4 w-full">
          <div key={nextProduct.id} className="w-full sm:flex rounded-lg overflow-hidden">
          {carousel &&<button onClick={fetchPrevProduct} className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Prev product</button>}
            <img src={nextProduct.image} alt={nextProduct.title} className="w-full h-48 sm:w-1/5 object-contain" />
            <div className="p-4 w-full sm:w-4/5">
              <h3 className="sm:text-lg font-semibold text-blue-700">{nextProduct.title}</h3>
              <p className="text-gray-700">Price: ${nextProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{nextProduct.description}</p>
              <p className="text-gray-600">Category: <span className="text-orange-600">{nextProduct.category}</span> </p>
            </div>
            
            {carousel&& <button onClick={fetchNextProduct} className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next product</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard1;
