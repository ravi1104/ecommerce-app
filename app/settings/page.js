"use client"
import React, { useState, useEffect } from "react";

const First = () => {
    const [navbar, setNavbar] = useState("nav1");
    const [productCard, setProductCard] = useState("productCard1");
    const [catalog, setCatalog] = useState("view_all");

    useEffect(() => {
        document.title = "Settings";

        // Function to update preference and localStorage
        function updatePreference() {
            const pref = {
                navbar: navbar,
                productCard: productCard,
                catalog: catalog
            }
            const serializedPref = JSON.stringify(pref);
            localStorage.setItem("pref", serializedPref);
        }

        // Update preference on component mount
        updatePreference();
    }, [navbar, productCard, catalog]); // Run effect when navbar, productCard, or catalog change

    // Function to handle state change for navbar
    const handleNavbarChange = (e) => {
        setNavbar(e.target.value);
    }

    // Function to handle state change for productCard
    const handleProductCardChange = (e) => {
        setProductCard(e.target.value);
    }

    // Function to handle state change for catalog
    const handleCatalogChange = (e) => {
        setCatalog(e.target.value);
    }

    // Function to handle form submission (currently empty)
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add further functionality here if needed
        console.log(navbar,productCard,catalog)
    }

    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <label>Select Navbar type:</label>
                <select value={navbar} onChange={handleNavbarChange}>
                    <option value="nav1">Navbar 1</option>
                    <option value="nav2">Navbar 2</option>
                </select>
                <label>Select ProductCard type:</label>
                <select value={productCard} onChange={handleProductCardChange}>
                    <option value="productCard1">ProductCard 1</option>
                    <option value="productCard2">ProductCard 2</option>
                </select>
                <label>Select catalog display:</label>
                <select value={catalog} onChange={handleCatalogChange}>
                    <option value="view_all">View All</option>
                    <option value="carousel">Carousel</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default First;
