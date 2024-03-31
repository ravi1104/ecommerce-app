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

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="w-full max-w-xs">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="navbar">
                        Select Navbar type:
                    </label>
                    <select
                        id="navbar"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={navbar}
                        onChange={(e) => setNavbar(e.target.value)}
                    >
                        <option value="nav1">Navbar 1</option>
                        <option value="nav2">Navbar 2</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productCard">
                        Select ProductCard type:
                    </label>
                    <select
                        id="productCard"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={productCard}
                        onChange={(e) => setProductCard(e.target.value)}
                    >
                        <option value="productCard1">ProductCard 1</option>
                        <option value="productCard2">ProductCard 2</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="catalog">
                        Select catalog display:
                    </label>
                    <select
                        id="catalog"
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={catalog}
                        onChange={(e) => setCatalog(e.target.value)}
                    >
                        <option value="view_all">View All</option>
                        <option value="carousel">Carousel</option>
                    </select>
                </div>

                <Link href={`/catalog/pref?nav=${navbar}&card=${productCard}&catalog=${catalog}`}>
                    <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Submit
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default First;
