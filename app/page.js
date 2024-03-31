import Navbar1 from "./catalog/Conponents/Navbar1";

export default function Home() {
  return (
    <main >
      <Navbar1 />
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Project</h1>
        <p className="text-lg text-gray-700 mb-4">
          This e-commerce application provides users with a seamless shopping experience. It features two main pages: the Catalog Page (/catalog) and the Settings Page (/settings). While the Catalog Page is server-side rendered (SSR), the Settings Page can be client-side rendered (CSR).
        </p>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <h3 className="text-lg font-semibold mb-2">Catalog Page:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Two navigation bars: Users can switch between two navigation bars, controlled from the Settings Page.</li>
            <li>Two ways to display the catalog section:</li>
            <ul className="list-disc list-inside ml-4 mb-2">
              <li>Carousel: Users can navigate through products using a carousel with buttons on both ends.</li>
              <li>View All: Users can view all products in a paginated manner, with infinite scroll based on user activity.</li>
            </ul>
            <li>Product Card Variants: Users can switch between two variants of product cards, controlled from the Settings Page.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Settings Page:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Users can control the type of navigation bar (NavBar1 or NavBar2) and the product card variant (ProductCard1 or ProductCard2).</li>
            <li>Option to change the view of how the catalog is displayed (view_all or carousel).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Additional Features: </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Cart Ability: Users can add products to their cart and remove them. <strong>(Under Process)</strong></li>
            <li>Bag Icon on NavBar: Clicking on the bag icon opens a modal displaying the current cart values.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
