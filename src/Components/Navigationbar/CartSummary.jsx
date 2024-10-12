import React, { useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function CartSummary() {
  // State to manage sidebar visibility for both icons
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCouponSidebarOpen, setIsCouponSidebarOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [instructions, setInstructions] = useState('');

  // Function to open the sidebar for instructions
  const handleIconClick = () => {
    setIsSidebarOpen(true);
  };

  // Function to open the sidebar for coupon
  const handleCouponIconClick = () => {
    setIsCouponSidebarOpen(true);
  };

  // Function to close the sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setIsCouponSidebarOpen(false);
  };

  // Function to save the coupon code and instructions
  const handleSave = () => {
    // Add your save logic here
    console.log('Coupon Code:', couponCode);
    console.log('Instructions:', instructions);
    handleCloseSidebar();
  };

  return (
    <div className="p-4 bg-white max-w-sm">
      {/* Icons Section */}
      <div className="flex justify-center items-center mb-4">
        <div className="flex space-x-4 p-2 border border-gray-300 bg-white rounded-sm">
          <div className="w-12 h-12 flex items-center justify-center" onClick={handleIconClick}>
            <ShoppingBagIcon fontSize="large" className="text-gray-500" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center" onClick={handleCouponIconClick}>
            <LocalOfferIcon fontSize="large" className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Subtotal and Total Section */}
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 text-[12px] font-bold">Subtotal:</span>
        <span className="text-gray-700 text-[12px] font-bold">Rs 8,990.00</span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-900 text-lg font-bold">Total:</span>
        <span className="font-bold text-lg">Rs 8,990.00</span>
      </div>

      {/* Tax and Shipping Notice */}
      <span className="text-[12px] text-gray-500 block mb-4">
        Tax included and shipping calculated at checkout
      </span>

      {/* Checkout and View Cart Buttons */}
      <div>
        {/* Checkout Button */}
        <a href="/Cart">
        <button
          className="w-full mb-2 text-white bg-black hover:bg-gray-900 font-bold py-3"
          style={{ padding: '12px 0' }}
        >
          CHECKOUT
        </button>
        </a>

        {/* View Cart Button */}
        <button
          className="w-full text-black border border-black font-bold py-3 hover:bg-gray-100"
          style={{ padding: '12px 0' }}
        >
          VIEW CART
        </button>
      </div>

      {/* Sidebar for Instructions */}
      {isSidebarOpen && (
        <div className={`fixed right-0 bottom-0 bg-white p-6 h-[400px] w-[350px] lg:w-[410px] shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <h2 className="text-lg font-bold mb-4">Order special instructions</h2>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter instructions..."
            className="border border-gray-300 p-2 mb-4 w-full h-24 rounded"
          />
          <div>
            {/* Save Button */}
            <button
              className="w-full mb-2 text-white bg-black hover:bg-gray-900 font-bold py-3"
              style={{ padding: '12px 0' }}
              onClick={handleSave}
            >
              SAVE
            </button>

            {/* Cancel Button */}
            <button
              className="w-full text-black border border-black font-bold py-3 hover:bg-gray-100"
              style={{ padding: '12px 0' }}
              onClick={handleCloseSidebar} // Close sidebar on cancel
            >
              CANCEL
            </button>
          </div>
        </div>
      )}

      {/* Sidebar for Adding Coupon */}
      {isCouponSidebarOpen && (
        <div className={`fixed right-0 bottom-0 bg-white p-6 h-[400px] w-[350px] lg:w-[410px] shadow-lg transition-transform transform ${isCouponSidebarOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <h2 className="text-lg font-bold mb-4">Add A Coupon</h2>
          <span className="text-gray-700 text-[12px] font-normal">Coupon code content</span>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code..."
            className="border border-gray-300 p-2 mb-4 w-full rounded"
          />
          <div>
            {/* Save Button */}
            <button
              className="w-full mb-2 text-white bg-black hover:bg-gray-900 font-bold py-3"
              style={{ padding: '12px 0' }}
              onClick={handleSave}
            >
              SAVE
            </button>

            {/* Cancel Button */}
            <button
              className="w-full text-black border border-black font-bold py-3 hover:bg-gray-100"
              style={{ padding: '12px 0' }}
              onClick={handleCloseSidebar} // Close sidebar on cancel
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSummary;
