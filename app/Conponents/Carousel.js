import { getProducts } from "../actions";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";

// Carousel Component

const initialProducts = await getProducts()

function Carousel({ userPref }) {

  const { nav, card } = userPref

  const ProductCard = (card == "productCard1") ? ProductCard1 : ProductCard2;
  
  // display components based on user preference

  return (
    <>
      {(nav == "nav1") ? <Navbar1 /> : <Navbar2 />}
      <div className="bg-white rounded-lg shadow-md p-4">
        <button className="block mx-auto mb-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold focus:outline-none">Next Carousel can be done on client side</button>
        {initialProducts.map((product, index) => (
          <ProductCard product={product} key={index} carousel={true} />
        ))}

      </div>
    </>


  );
}

export default Carousel;
