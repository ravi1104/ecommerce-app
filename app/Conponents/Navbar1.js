import React from "react";

const Navbar1 = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My E-commerce</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Catalog</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Settings</a>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
