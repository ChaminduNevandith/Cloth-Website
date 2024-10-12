import React, { useState } from "react";
import img from '../../assets/sc2.webp'
import Recently from "../../Components/RecentlyProducts/Recently";

const Cart = () => {
  const [quantity, setQuantity] = useState(2);
  const pricePerItem = 4000;
  const totalPrice = pricePerItem * quantity;

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section>
    
        <div className="flex flex-col justify-center mx-4 my-8 lg:flex-row">
            {/* Cart Section */}
            <div className="p-6 bg-white shadow-md lg:w-3/5">
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">Your Cart</h2>
                <div className="flex items-center justify-between py-4 border-b">
                
                </div>

                {/* Labels for Product, Price, Quantity, and Total */}
                <div className="items-center justify-between hidden grid-cols-5 gap-4 mt-6 sm:grid">
                <div className="col-span-2">
                    <p className="text-sm font-semibold">PRODUCT</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold">PRICE</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold">QUANTITY</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-semibold">TOTAL</p>
                </div>
                </div>

                {/* Product Info and Controls */}
                <div className="grid items-center grid-cols-1 gap-4 py-6 border-b sm:grid-cols-5">
                {/* Product Info */}
                <div className="flex items-start col-span-2">
                    <img
                    className="object-cover w-40 h-36"
                    src={img}
                    alt="Product"
                    />
                    <div className="ml-4">
                    <p className="text-sm f sm:text-sm">Own the game oversized printed tee SCY range</p>
                    <p className="text-xs text-gray-500 sm:text-sm">Red / XS</p>
                    <p className="text-xs text-gray-500 sm:text-sm">Scylla Zelus</p>
                    </div>
                </div>

                {/* Price */}
                <div className="text-center">
                    <p className="text-sm font-semibold sm:text-lg">Rs {pricePerItem.toLocaleString()}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center">
                    <button
                    className="px-2 py-1 text-sm font-bold border sm:text-lg"
                    onClick={() => handleQuantityChange("decrease")}
                    >
                    -
                    </button>
                    <span className="px-2 text-sm sm:px-4 sm:text-lg">{quantity}</span>
                    <button
                    className="px-2 py-1 text-sm font-bold border sm:text-lg"
                    onClick={() => handleQuantityChange("increase")}
                    >
                    +
                    </button>
                </div>

                {/* Total */}
                <div className="text-center">
                    <p className="text-sm font-semibold sm:text-lg">Rs {totalPrice.toLocaleString()}</p>
                </div>
                </div>

                <button className="mt-4 text-red-500 hover:text-red-700 sm:mt-0">×</button>

                {/* Additional Comments */}
                <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 sm:text-base">
                    Additional Comments
                </label>
                <textarea
                    className="block w-full p-2 mt-1 text-xs border border-gray-300 rounded-md shadow-sm sm:text-sm"
                    placeholder="Special instruction for seller..."
                    rows="3"
                ></textarea>
                </div>

                <div className="flex items-center mt-4">
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                    <i className="fas fa-shield-alt"></i> Secure Shopping Guarantee
                </p>
                </div>
            </div>

            {/* Order Summary */}
            <div className="p-6 mt-8 shadow-md lg:w-2/5 bg-gray-50 lg:ml-8 lg:mt-0">
                <h2 className="mb-6 text-lg font-bold sm:text-xl">Order Summary</h2>
                <div className="flex justify-between py-2">
                <p className="text-sm sm:text-base">Subtotal</p>
                <p className="text-sm sm:text-base">Rs {totalPrice.toLocaleString()}</p>
                </div>
                <div className="py-4 border-t">
                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md sm:px-4"
                />
                <p className="mt-2 text-xs text-gray-500">
                    Coupon code will be applied on the checkout page
                </p>
                </div>
                <div className="flex justify-between py-2 font-bold">
                <p className="text-base sm:text-lg">TOTAL</p>
                <p className="text-base sm:text-lg">Rs {totalPrice.toLocaleString()}</p>
                </div>
                <button className="w-full py-3 mt-4 text-white bg-black hover:bg-gray-800">
                PROCEED TO CHECKOUT
                </button>
                <button className="w-full py-3 mt-2 bg-gray-200 hover:bg-gray-300">
                CONTINUE SHOPPING
                </button>
                <p className="mt-4 text-xs text-center text-gray-500 sm:text-sm">
                Tax included and shipping calculated at checkout
                </p>
            </div>
        </div>
        <Recently/>
  
    </section>
   
  );
};

export default Cart;