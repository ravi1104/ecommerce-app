"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";

const First = () => {
    const [navbar, setNavbar] = useState("nav1");
    const [productCard, setProductCard] = useState("productCard1");
    const [catalog, setCatalog] = useState("view_all");

    useEffect(() => {
        document.title = "Settings";
    }, [navbar, productCard, catalog]);

    const handleNavbarClick = (type) => {
        setNavbar(type);
    };

    const handleProductCardClick = (type) => {
        setProductCard(type);
    };

    const handleCatalogClick = (type) => {
        setCatalog(type);
    };

    return (
        <div className="flex flex-col pl-3 items-center min-h-screen py-2">
            <div className="w-full max-w-xs">
                <div>
                    <h1 className="text-sm sm:text-xl font-bold mb-4 text-gray-500">Select Navbar Type</h1>

                    <div>
                        <button
                            className={`${navbar === "nav1" ? "bg-sky-400 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleNavbarClick("nav1")}
                        >
                            Navbar 1
                        </button>
                        <button
                            className={`${navbar === "nav2" ? "bg-sky-400 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleNavbarClick("nav2")}
                        >
                            Navbar 2
                        </button>
                    </div>
                </div>

                <div>
                    <h1 className="text-sm sm:text-xl mt-3 font-bold mb-4 text-gray-500">Select ProductCard Type</h1>
                    <div>
                        <button
                            className={`${productCard === "productCard1" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleProductCardClick("productCard1")}
                        >
                            ProductCard 1
                        </button>
                        <button
                            className={`${productCard === "productCard2" ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleProductCardClick("productCard2")}
                        >
                            ProductCard 2
                        </button>
                    </div>
                </div>

                <div>
                    <h1 className="text-sm sm:text-xl mt-3 font-bold mb-4 text-gray-500">Select Catalog Display</h1>
                    <div>
                        <button
                            className={`${catalog === "view_all" ? "bg-amber-400 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleCatalogClick("view_all")}
                        >
                            View All
                        </button>
                        <button
                            className={`${catalog === "carousel" ? "bg-amber-400 text-white" : "bg-gray-200 text-gray-700"
                                } py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline`}
                            onClick={() => handleCatalogClick("carousel")}
                        >
                            Carousel
                        </button>
                    </div>
                </div>

                <Link href={`/catalog/pref?nav=${navbar}&card=${productCard}&catalog=${catalog}`}>
                    <button className="bg-blue-400 mt-4 hover:bg-blue-500 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </Link>


            </div>
        </div>
    );
};

export default First;
