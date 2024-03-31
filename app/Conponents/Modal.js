"use client"
import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [product, setProduct] = useState(null);

  // Function to retrieve product data from local storage
  const recoverFromStorage = () => {
    const existingProduct = JSON.parse(localStorage.getItem('products'));
    console.log(existingProduct);
    setProduct(existingProduct);
  };

  useEffect(() => {
    if (isOpen) {
      recoverFromStorage();
    }
  }, [isOpen]); // Call recoverFromStorage whenever isOpen changes

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-70vw h-40vh p-8">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {product && (
          <>
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <img src={product.imageUrl} alt="Product" className="w-full h-32 object-cover mb-4" />
          </>
        )}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
