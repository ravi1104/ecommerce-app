"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from './Modal';
import { getNextProduct } from '../actions';

// product card type 1
function ProductCard1({ product, carousel }) {
  const [products, setProducts] = useState([product]);
  const [index, setIndex] = useState(0);
  // used products array to make logic of carousel next and prev
  useEffect(() => {

  }, [products]);
  // used getNextProduct defined with "use server" to get next data
  async function fetchNextProduct() {
    const newProduct = await getNextProduct();
    setProducts([...products, newProduct]);
    setIndex(index + 1);
  }
  // 
  function fetchPrevProduct() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  // incrementing index of array for storing next product
  const currProduct = products[index];

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-2 m-4 sm:p-3  sm:flex transition duration-300 ease-in-out transform hover:bg-gray-300">
      {currProduct && (
        <div className="space-y-3 w-full">
          <div key={currProduct.id} className="w-full sm:flex rounded-lg text-center overflow-hidden">
            {carousel && <button onClick={fetchPrevProduct} className="hidden sm:inline-block mx-auto mr-1 sm:mt-1 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            <div className="flex justify-center mt-2 items-center w-full sm:w-1/5">
              <Image priority={true} className='sm:w-3/4 w-1/2' src={currProduct.image} alt="img" width={50} height={50} />
            </div>

            <div className="sm:p-4 p-2 w-full sm:w-4/5">
              <h3 className="text-sm sm:text-lg font-semibold sm:text-left text-center text-blue-700">{currProduct.title}</h3>
              <span className="text-red text-center block sm:inline-block relative cursor-pointer transform  hover:scale-110 transition duration-300">
                <FontAwesomeIcon
                  onClick={() => { addToCart(currProduct) }}
                  icon={faHeart}
                  size="lg"
                  className="text-slate-700 hover:text-pink-500 transition-colors duration-300"
                />
              </span>
              <p className="text-gray-700">Price: ${currProduct.price}</p>
              <p className="hidden sm:block text-gray-600">{currProduct.description}</p>
              <p className="text-sm sm:text-lg text-gray-600">Category: <span className="text-orange-600">{currProduct.category}</span> </p>
            </div>
            {carousel && <button onClick={fetchPrevProduct} className="sm:hidden inline-block mx-auto mr-1 sm:mt-1 px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">PREV</button>}
            {carousel && <button onClick={() => { fetchNextProduct() }} className="sm:inline-block mx-auto ml-1 mt-0 sm:mt-1 px-2 sm:px-4 py-1 sm:py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">NEXT</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard1;
