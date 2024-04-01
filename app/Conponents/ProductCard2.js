"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from './Modal';

function ProductCard2({ product, carousel }) {
  const [products, setProducts] = useState([product]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(10);

  useEffect(() => {

  }, [products]);

  async function fetchNextProduct() {
    try {
      if (count > 20) {
        return;
      }
      const res = await fetch(`https://fakestoreapi.com/products/${count}`);
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
      setIndex(index + 1);
      setCount(count + 1);
    } catch (error) {
      console.error("Error fetching next product:", error);
    }
  }

  function fetchPrevProduct() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const currProduct = products[index];
  return (
    <div className="rounded-lg w-50 shadow-md flex flex-col flex-wrap sm:p-3 p-1 m-5 transition duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-br from-purple-400 to-pink-600">
      {currProduct && (
        <div className="space-y-4 w-full">
          <div key={currProduct.id} className="w-full p-1 sm:p-2 text-center sm:flex rounded-lg overflow-hidden bg-white bg-opacity-90">
            {carousel && <button onClick={fetchPrevProduct} className="hidden sm:inline-block mx-auto mr-1 sm:mt-1 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            <div className="flex justify-center mt-2 items-center w-full sm:w-1/5">
              <Image className='sm:w-3/4 w-1/2' src={currProduct.image} alt={currProduct.title} width={100} height={100} priority={true} />
            </div>

            <div className=" relative p-4 w-full sm:w-4/5">
              <h3 className="sm:text-lg font-semibold text-yellow-500">{currProduct.title}</h3>
              <span className="text-red relative cursor-pointer transform  hover:scale-110 transition duration-300">
                <FontAwesomeIcon
                  onClick={()=>{addToCart(currProduct)}}
                  icon={faHeart}
                  size="lg"
                  className="text-slate-700 hover:text-pink-500 transition-colors duration-300"
                />
              </span>
              <p className="text-gray-700 font-bold sm:text-xl">Price: ${currProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{currProduct.description}</p>
              <p className="text-gray-600">Category: <span className="text-green-500">{currProduct.category}</span></p>
            </div>

            {/* Heart icon */}
            {carousel && <button onClick={fetchPrevProduct} className="sm:hidden inline-block mx-auto mr-1 sm:mt-1 px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            {carousel && <button onClick={() => { fetchNextProduct() }} className="sm:inline-block mx-auto ml-1 mt-0 sm:mt-1 px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">NEXT</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard2;
