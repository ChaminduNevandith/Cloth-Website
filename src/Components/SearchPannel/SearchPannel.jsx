import React from "react";
import productImage1 from "../../assets/sa1.jpg";
import productImage2 from "../../assets/sa11.jpg";
import productImage3 from "../../assets/sa2.jpg";

function SearchPannel() {
  return (
    <div className="absolute right-0 top-12 w-[500px] bg-white shadow-lg p-6 rounded-sm z-50">
      {/* Trending Now Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Trending Now</h3>
        <div className="flex flex-wrap gap-2">
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            dresses
          </button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            scylla
          </button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            workwear
          </button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            denims
          </button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            redvers buller
          </button>
          <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">
            casual
          </button>
        </div>
      </div>

      {/* Popular Products Section */}
      <div>
        <h3 className="font-bold text-lg mb-3">Popular Products</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Product 1 */}
          <div className="text-center">
            <img
              src={productImage1}
              alt="Maya Midi Dress"
              className="w-full rounded-sm mb-1"
            />
            <p className="text-red-500 font-normal text-[14px]">New</p>
            <p className="font-bold text-[14px]">KELLY FELDER</p>
            <p className="text-[12px]">Maya Midi Dress - Pink Printed</p>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <img
              src={productImage2}
              alt="Chilling Day"
              className="w-full rounded-sm mb-1"
            />
            <p className="text-red-500 font-normal text-[14px]">New</p>
            <p className="font-bold text-[14px]">KELLY FELDER</p>
            <p className="text-[12px]">Chilling Day Oversized Linen</p>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <img
              src={productImage3}
              alt="Graceful Layered Midi Dress"
              className="w-full rounded-sm mb-1"
            />
            <p className="text-red-500 font-normal text-[14px]">New</p>
            <p className="font-bold text-[14px]">KELLY FELDER</p>
            <p className="text-[12px]">Graceful Layered Midi Dress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPannel;
