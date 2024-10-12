import React from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';

function ShoppingCart({ isOpen, onClose }) {
    if (!isOpen) return null; // Do not render if not open

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
            
            {/* Shopping Cart Modal */}
            <div className="fixed top-0 right-0 w-[350px] lg:w-[410px] h-full bg-white shadow-lg z-40 p-4">
                <button onClick={onClose} className="absolute top-2 right-2 text-xl">✖</button>
                <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
                {/* Add cart items here */}
                <div>
                    <p className='text-[12px] font-normal pb-4'>0 Items Added</p>
                    {/*<p className='text-[12px] font-normal pb-4 '>Free shipping for all orders over Rs 5,000.00!</p>
                    <p className='text-[12px] font-normal text-center pb-8'>Your Cart Is empty</p> */}
                </div>
               
                <div className='pb-8 '>
                    <ProductCard></ProductCard>
                    <CartSummary/>
                 
                </div>

                <div>
                {/* 
                <button class="bg-white w-full border border-black hover:bg-black hover:text-white transition duration-200 ease-in-out px-4 py-2 rounded-sm">
                    Continue Shopping
                </button>
                */}

                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
