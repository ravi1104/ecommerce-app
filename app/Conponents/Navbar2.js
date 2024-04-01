import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage, faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar2 = () => {
  return (
    <nav className="bg-violet-300 relative p-4">
      <div className="container mx-auto flex rounded justify-between items-center">
        <div className="text-white text-xm font-bold sm:text-xl sm:block">
        <Link href="/" className="hidden text-white text-sm sm:inline sm:text-lg">GG Shop</Link>
          <span className="sm:inline text-white text-xl font-bold "><FontAwesomeIcon icon={faBabyCarriage} /></span>
        </div>
        <span className="hidden sm:inline">
          <p className="text-white">Navbar Type 2</p>
        </span>
        <ul className="flex space-x-4">
          <li className="sm:inline">
            <FontAwesomeIcon className="text-white" icon={faCartShopping} />
          </li>

          <li>
            <Link href="/catalog" className="sm:text-base text-sm text-white hover:text-blue-700">Catalog</Link>
          </li>
          <li>
            <Link href="/settings" className="sm:text-base text-sm text-white hover:text-blue-700">Settings</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
