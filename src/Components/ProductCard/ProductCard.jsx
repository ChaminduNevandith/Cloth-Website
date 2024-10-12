import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ image, hoverImage, brand, description, price, colors, isNew, isSale }) => {
  const [imageHovered, setImageHovered] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image); // State for the selected color image

  const handleColorClick = (colorImage) => {
    setSelectedImage(colorImage); // Update the selected image when a color is clicked
  };

  return (
    <div
      className="relative flex flex-col items-center h-auto max-w-xs text-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      onMouseEnter={() => setCardHovered(true)} // Trigger hover for the whole card
      onMouseLeave={() => setCardHovered(false)} // Remove hover state when leaving the card
    >
      {/* New Label */}
      {isNew && (
        <span className="absolute top-0 left-0 z-10 px-1 py-0.5 text-xs text-black bg-white">
          New
        </span>
      )}
      
      {isSale && (
        <span className="absolute top-0 left-0 z-10 px-1 py-0.5 text-xs bg-red-500 text-white">
          Sale 50%
        </span>
      )}

      {/* Product Image and Quick Add Button */}
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setImageHovered(true)} // Change image on hover
        onMouseLeave={() => setImageHovered(false)} // Reset image after leaving image area
      >
        <div className="h-[250px] md:h-[340px] w-full md:w-[240px] overflow-hidden">
          <Link to="/">
            <img
              className='object-cover w-full h-full transition-transform duration-1000 ease-in-out transform group-hover:scale-110'
              src={imageHovered ? hoverImage : selectedImage} // Use selected image for the product card
              alt={brand}
            />
          </Link>
          
        </div>

        {/* Quick Add Button inside the image area */}
        <a href="/ProductPage">
  <button
    className={`absolute bottom-0 left-0 w-full md:w-[231px] py-2 text-black font-bold border border-black bg-white transition-all duration-1000 transform ${
      cardHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } hover:bg-black hover:text-white`}
  >
    QUICK ADD
  </button>
</a>


      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center justify-center w-full p-2">
        <h2 className="font-medium text-gray-500 text-sm uppercase pb-2">{brand}</h2>

        {/* Description (truncated after 2 lines) */}
        <p className="mb-2 overflow-hidden text-black text-sm line-clamp-2 text-ellipsis">
          {description}
        </p>

        {/* Price */}
        <p className="mb-2 font-semibold text-black">Rs. {price}</p>

        {/* Color Indicators */}
        <div className="flex items-center justify-center mb-0 space-x-2">
          {colors.map((color, index) => (
            <div key={index} className="relative group">
              <div
                className="w-6 h-6 overflow-hidden border border-black rounded-full cursor-pointer"
                onClick={() => handleColorClick(color.colorImage)} // Handle color click
              >
                <img
                  src={color.colorImage} // Use colorImage for the product image
                  alt={color.colorName} // Optional: add alt text for accessibility
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute hidden px-2 py-1 mb-2 text-xs text-white bg-black shadow-lg bottom-full group-hover:block">
                {color.colorName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
