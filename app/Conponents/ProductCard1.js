"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductCard1({ product, carousel }) {
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
    <div className="bg-white rounded-lg shadow-md p-4 m-5 sm:flex transition duration-300 ease-in-out transform hover:bg-sky-100">

      {nextProduct && (
        <div className="space-y-4 w-full">
          <div key={nextProduct.id} className="w-full sm:flex rounded-lg overflow-hidden">
            <span onClick={saveToLocalStorage} className="text-red absolute cursor-pointer transform  hover:scale-110 transition duration-300">
              <FontAwesomeIcon
                icon={faHeart}
                size="lg"
                className="text-blue-400 hover:text-pink-500 transition-colors duration-300"
              />
            </span>

            {carousel && <button onClick={fetchPrevProduct} className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Prev product</button>}
            <div className="flex justify-center mt-2 items-center w-full sm:w-1/5 ">
              <Image src={nextProduct.image} alt={nextProduct.title} width={130} height={100} />
            </div>
            <div className="p-4 w-full sm:w-4/5">
              <h3 className="sm:text-lg font-semibold text-blue-700">{nextProduct.title}</h3>
              <p className="text-gray-700">Price: ${nextProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{nextProduct.description}</p>
              <p className="text-gray-600">Category: <span className="text-orange-600">{nextProduct.category}</span> </p>
            </div>
            {carousel && <button onClick={() => { fetchNextProduct() }} className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next product</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard1;
