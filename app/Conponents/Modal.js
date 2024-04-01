"use client"
import React, { useEffect, useState } from 'react';

export const fetchCartItem = () => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}

export const addToCart = (product) => {
  const cartItems = fetchCartItem();
  const isAdded = cartItems.find(item => item.id === product.id);
  if (isAdded) {
    return;
  }
  const updatedCartItems = [...cartItems, product];
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
}

export const removeFromCart = (id) => {
  const cartItems = fetchCartItem();
  const updatedCartItems = cartItems.filter(item => item.id !== id);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
}

const Modal = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  const [refresh,setRefresh] =useState(0);
  useEffect(() => {
    setProducts(fetchCartItem())

  }, [isOpen,refresh]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white overflow-y-auto sm:h-3/5 sm:w-3/4 rounded-lg p-2 sm:p-7 flex flex-col justify-center">
        {products.map((product) => (
          <div key={product.id} className="mb-6 flex">
            <img src={product.image} alt="Product" className="w-8 h-8 object-cover mb-2 rounded-md hover:opacity-80 transition duration-300 cursor-pointer" />
            <p className="text-sm font-bold mb-2">{product.title}</p>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <button className="bg-red-400 h-10 text-white px-2 py-2 rounded-md hover:bg-red-600 mt-2 sm:mt-0 sm:ml-5" onClick={() => {setRefresh(refresh + 1); removeFromCart(product.id) }}>Remove</button>

          </div>
        ))}
        <button className="bg-red-400 text-sm text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
