"use client"

// Carousel Component
function Carousel({ initialProducts, ProductCard, Catalog }) {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <button className="block mx-auto mb-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next Carousel can be done on client side</button>
      {initialProducts.map((product, index) => (
        <ProductCard product={product} key={index} carousel={true} />
      ))}
      
    </div>

  );
}

export default Carousel;
