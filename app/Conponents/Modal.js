"use client"
import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    // if (isOpen) {
    //   console.log(products);
    // }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white overflow-y-auto h-3/5 w-3/4 rounded-lg p-8 flex flex-col justify-center">
        {/* {products.map((product) => (
          <div key={product.id} className="mb-6 flex">
            <img src={product.image} alt="Product" className="w-8 h-8 object-cover mb-2 rounded-md hover:opacity-80 transition duration-300 cursor-pointer" />
            <p className="text-sm font-bold mb-2">{product.title}</p>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <button className="bg-red-400 text-white px-2 py-2 ml-5 rounded-md hover:bg-red-600" onClick={() => { recoverFromStorage(product.id) }}>Remove</button>
          </div>
        ))} */}
        <h1>Feature Not Ready</h1>
        <p>Will come soon</p>
        <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
