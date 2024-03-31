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

  const saveToLocalStorage = (nextProduct) => {
    // Retrieve the existing products from local storage or initialize an empty array
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the array
    const updatedProducts = [...existingProducts, product];

    // Save the updated products array back to local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    console.log("added");
  };

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
          <div key={nextProduct.id} className="w-full sm:flex rounded-lg overflow-hidden bg-white bg-opacity-90">
            {carousel && <button onClick={fetchPrevProduct} className="block m-2 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Prev product</button>}
            <div className="flex flex-justify align-item-senter w-full h-48 sm:w-1/5 object-contain">
              <Image src={product.image} alt={nextProduct.title} width={130} height={10} />
            </div>

            <div className="p-4 w-full sm:w-4/5">
              <h3 className="sm:text-lg font-semibold text-yellow-500">{nextProduct.title}</h3>
              <p className="text-gray-700 font-bold sm:text-xl">Price: ${nextProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{nextProduct.description}</p>
              <p className="text-gray-600">Category: <span className="text-green-500">{nextProduct.category}</span></p>
            </div>

            {/* Heart icon */}
            <span onClick={saveToLocalStorage} className="text-red absolute top-4 right-5 cursor-pointer transform hover:scale-110 transition duration-300">
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="text-blue-400 hover:text-pink-500 transition-colors duration-300"
              />
            </span>

            {carousel && <button onClick={fetchNextProduct} className="block m-2  px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next product</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard2;
