"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductCard2({ product, carousel }) {
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
    <div className="rounded-lg w-50 shadow-md flex flex-col flex-wrap sm:p-3 p-1 m-5 transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-br from-purple-400 to-pink-600">
      {nextProduct && (
        <div className="space-y-4 w-full">
          <div key={nextProduct.id} className="w-full text-center sm:flex rounded-lg overflow-hidden bg-white bg-opacity-90">
            {carousel && <button onClick={fetchPrevProduct} className="hidden sm:inline-block mx-auto mr-1 sm:mt-1 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            <div className="flex justify-center items-center w-full h-48 sm:w-1/5">
              <Image src={nextProduct.image} alt={nextProduct.title} width={130} height={10} />
            </div>

            <div className=" relative p-4 w-full sm:w-4/5">
              <h3 className="sm:text-lg font-semibold text-yellow-500">{nextProduct.title}</h3>
              <span className="text-red relative cursor-pointer transform  hover:scale-110 transition duration-300">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="lg"
                  className="text-slate-700 hover:text-pink-500 transition-colors duration-300"
                />
              </span>
              <p className="text-gray-700 font-bold sm:text-xl">Price: ${nextProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{nextProduct.description}</p>
              <p className="text-gray-600">Category: <span className="text-green-500">{nextProduct.category}</span></p>
            </div>

            {/* Heart icon */}
            {carousel && <button onClick={fetchPrevProduct} className="sm:hidden inline-block mx-auto mr-1 sm:mt-1 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            {carousel && <button onClick={() => { fetchNextProduct() }} className="sm:inline-block mx-auto ml-1 mt-1 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">NEXT</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard2;
