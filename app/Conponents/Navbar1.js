"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar1 = () => {
  const [areLinksVisible, setAreLinksVisible] = useState(false);

  const toggleLinksVisibility = () => {
    setAreLinksVisible(!areLinksVisible);
  };

  return (
    <nav className="bg-gray-800 p-4 relative z-10 mb-5"> {/* Added relative positioning */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl sm:text-right font-bold ">
        <Link href="/" className="text-white hover:text-gray-300">GG Shop</Link></div>
        <span className="sm:hidden" onClick={toggleLinksVisibility} >
          <FontAwesomeIcon className="text-white w-8 text-lg cursor-pointer" icon={faEllipsisVertical} />
        </span>
        <span className="hidden sm:inline text-white">
          Navbar Type 1
        </span>
        <ul className={`hidden sm:flex flex-col sm:flex-row space-x-0 sm:space-x-4`}>
          <li>
            <FontAwesomeIcon className="cursor-pointer text-white" icon={faCartShopping} />
          </li>
          <li>
            <Link href="/catalog" className="text-white hover:text-gray-300">Catalog</Link>
          </li>

          <li>
            <Link href="/settings" className="text-white hover:text-gray-300">Settings</Link>
          </li>
        </ul>
        <ul className={` absolute text-center text-lg top-full left-0 p-1 bg-gray-800 w-full flex flex-col sm:hidden  space-x-0 ${areLinksVisible ? 'flex' : 'hidden'}`}> 
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/catalog" className="text-white hover:text-gray-300">Catalog</Link>
          </li>
          <li>
            <Link href="/settings" className="text-white hover:text-gray-300">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
