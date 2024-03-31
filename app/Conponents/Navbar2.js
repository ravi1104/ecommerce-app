import React from "react";

const Navbar2 = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My E-commerce</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Catalog</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">Settings</a>
          </li>
          {/* Add more nav items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
