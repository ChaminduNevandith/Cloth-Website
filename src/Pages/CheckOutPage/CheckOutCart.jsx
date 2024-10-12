import React from "react";
import productImage15 from "../../assets/cr8.jpg"; // Your first image path
import productImage16 from "../../assets/cr88.jpg"; // Your second image path

function CheckOutCart() {
  return (
    <div className="p-6 max-w-lg mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center">
          <img
            src={productImage15}
            alt="Rogue Legacy"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="ml-4">
            <p className="font-medium">Rogue Legacy</p>
            <p className="text-sm text-gray-500">Black / XS</p>
          </div>
        </div>
        <p className="font-medium">Rs 4,490.00</p>
      </div>

      <div className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center">
          <img
            src={productImage16}
            alt="Serene silhouette midi dress"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="ml-4">
            <p className="font-medium">Serene silhouette midi dress</p>
            <p className="text-sm text-gray-500">Green / UK 4</p>
          </div>
        </div>
        <p className="font-medium">Rs 8,990.00</p>
      </div>

      <div className="py-4 border-b">
        <label className="block mb-2 font-medium">Discount code</label>
        <div className="flex">
          <input
            type="text"
            className="border rounded-l-md px-3 py-2 w-full focus:outline-none"
            placeholder="Enter code"
          />
          <button className="bg-gray-800 text-white rounded-r-md px-4">
            Apply
          </button>
        </div>
      </div>

      <div className="py-4 border-b">
        <p className="font-medium">Subtotal • 2 items</p>
        <p className="font-medium">Rs 13,480.00</p>
      </div>

      <div className="py-4">
        <p className="font-medium">Shipping</p>
        <p className="text-gray-500">Enter shipping address</p>
      </div>

      <div className="py-4">
        <p className="text-xl font-bold">Total</p>
        <p className="text-xl font-bold text-black">LKR Rs 13,480.00</p>
      </div>
    </div>
  );
}

export default CheckOutCart;
