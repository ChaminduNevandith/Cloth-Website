import React from "react";
import Sidepanel from "../../Components/sidepanel/Sidepanel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productImage1 from "../../assets/de1.webp";
import productImage2 from "../../assets/de11.jpg";
import productImage3 from "../../assets/de2.webp";
import productImage4 from "../../assets/de22.jpg";
import productImage5 from "../../assets/de3.webp";
import productImage6 from "../../assets/de33.webp";
import productImage7 from "../../assets/de4.webp";
import productImage8 from "../../assets/de44.jpg";
import productImage9 from "../../assets/de5.webp";
import productImage10 from "../../assets/de55.jpg";
import productImage11 from "../../assets/de6.jpg";
import productImage12 from "../../assets/de66.jpg";
import productImage13 from "../../assets/de7.jpg";
import productImage14 from "../../assets/de77.jpg";
import productImage15 from "../../assets/de8.webp";
import productImage16 from "../../assets/de88.jpg";
import productImage17 from "../../assets/kelly25.webp";
// ... other imports for product images
import Recently from "../../Components/RecentlyProducts/Recently";
import ShortButtons from "../../Components/ShortButtons/ShortButtons";
import Pagination from "../../Components/Pagination/Pagination";

const products = [
  {
    id: 1,
    image: productImage1,        // Default image
    hoverImage: productImage2,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage1, colorName: "Red" },
      { colorImage: productImage2, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 2,
    image: productImage3,        // Default image
    hoverImage: productImage4,    // Image on hover
    brand: "SKELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage3, colorName: "Red" },
      { colorImage: productImage4, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 3,
    image: productImage5,        // Default image
    hoverImage: productImage6,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage5, colorName: "Red" },
      { colorImage: productImage6, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 4,
    image: productImage7,        // Default image
    hoverImage: productImage8,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage7, colorName: "Red" },
      { colorImage: productImage8, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 5,
    image: productImage9,        // Default image
    hoverImage: productImage10,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage9, colorName: "Red" },
      { colorImage: productImage10, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 6,
    image: productImage11,        // Default image
    hoverImage: productImage12,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage11, colorName: "Red" },
      { colorImage: productImage12, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 7,
    image: productImage13,        // Default image
    hoverImage: productImage14,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage13, colorName: "Red" },
      { colorImage: productImage14, colorName: "Blue" },
    ],
    isNew: true,
  },
  {
    id: 8,
    image: productImage15,        // Default image
    hoverImage: productImage16,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage15, colorName: "Red" },
      { colorImage: productImage16, colorName: "Blue" },
    ],
    isNew: true,
  },
  

];

const Denim = () => {
  return (
    <section className="min-h-screen bg-white px-4 md:px-28">
      <div className="flex flex-col p-6 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full mb-6 lg:w-1/4 lg:pr-6 lg:mb-0">
          <Sidepanel />
        </div>

        <div className="flex-grow">
          <div className="w-full mt-10 overflow-hidden lg:w-3/4 group">
                <img src={productImage17} alt="" className="transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
          </div>
          <p className="mt-10 text-2xl font-bold">Denim</p>
          <hr className="block my-4 mb-10 border-gray-600 md:mb-0 " />
          <div className="mt-4">
          <ShortButtons/>
          </div>
          <br />
          <br />

          {/* Product Grid */}
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}            
                hoverImage={product.hoverImage}   
                brand={product.brand}
                description={product.description}
                price={product.price}
                colors={product.colors}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Pagination/>
      </div>
      <Recently/>
    </section>
  );
};

export default Denim;
