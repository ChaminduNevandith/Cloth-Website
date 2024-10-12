import React from "react";
import Sidepanel from "../../Components/sidepanel/Sidepanel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productImage1 from "../../assets/sa1.jpg";
import productImage2 from "../../assets/sa11.jpg";
import productImage3 from "../../assets/sa2.jpg";
import productImage4 from "../../assets/sa22.webp";
import productImage5 from "../../assets/sa3.jpeg";
import productImage6 from "../../assets/sa33.webp";
import productImage7 from "../../assets/sa4.jpeg";
import productImage8 from '../../assets/sa44.jpeg'
import productImage9 from "../../assets/sa5.jpg";
import productImage10 from "../../assets/sa55.jpg";
import productImage11 from "../../assets/sa6.jpg";
import productImage12 from "../../assets/sa66.jpg";
import productImage13 from "../../assets/sa7.jpg";
import productImage14 from "../../assets/sa77.jpg";
import productImage15 from "../../assets/sa8.jpg";
import productImage16 from "../../assets/sa88.jpg";

// ... other imports for product images
import Recently from "../../Components/RecentlyProducts/Recently";

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
    isSale: true,
  },
  {
    id: 2,
    image: productImage3,        // Default image
    hoverImage: productImage4,    // Image on hover
    brand: "KELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage3, colorName: "Red" },
      { colorImage: productImage4, colorName: "Blue" },
    ],
    isSale: true,
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
    isSale: true,
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
    isSale: true,
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
    isSale: true,
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
    isSale: true,
  },
  {
    id: 7,
    image: productImage13,        // Default image
    hoverImage: productImage14,    // Image on hover
    brand: "SKELLY FELDER",
    description: "This is a great product that you will love to use.",
    price: 6000.00,
    colors: [
      { colorImage: productImage13, colorName: "Red" },
      { colorImage: productImage14, colorName: "Blue" },
    ],
    isSale: true,
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
    isSale: true,
  },
  

];

const Sale = () => {
  return (
    <section className="min-h-screen bg-white px-4 md:px-28"> {/* Added padding */}
      <div className="flex flex-col p-6 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full mb-6 lg:w-1/4 lg:pr-6 lg:mb-0">
          <Sidepanel />
        </div>

        <div className="flex-grow">
          <p className="mt-10 text-2xl font-bold">50% Off</p>
          <hr className="block my-4 mb-10 border-gray-600 md:mb-0" />
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
      <Recently />
    </section>
  );
};

export default Sale;
