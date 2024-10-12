import React, { useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from './ShoppingCart';
import SignInRightsidePanel from '../SignInRightsidePanel/SignInRightsidePanel';
import SearchPannel from '../SearchPannel/SearchPannel';

function Header() {
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSignInOpen, setSignInOpen] = useState(false); // State for Sign In panel
    const [isSearchOpen, setSearchOpen] = useState(false); // State for Search Panel

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    const toggleSignIn = () => {
        setSignInOpen(!isSignInOpen);
    };

    const handleFocus = () => {
        setSearchOpen(true);
    };

    const handleBlur = () => {
        // Delay closing to prevent immediate closing when switching between input and panel
        setTimeout(() => setSearchOpen(false), 200);
    };

    return (
        <>
            <div className={`hidden md:flex justify-between items-center h-[135px]`}>
                <div>
                    <img className="h-36 w-56 px-4 py-2 ml-36" src='src/assets/Kelly-Felder.jpg' alt="Header Logo" />
                </div>

                <div className="flex flex-col items-end mr-36">
                    <div className="flex items-center mb-2 mt-[16px]">
                        <p className="text-right text-[12px] mr-4 tracking-wide text-[#323232]">Customer Service +94 76 7 324 845</p>
                        <div className="flex items-center space-x-2 mr-[24px]">
                            <div className="w-5 h-5 rounded-full overflow-hidden">
                                <img
                                    src="src/assets/cloth-images/uk.png"
                                    alt="UK Flag"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-[12px] font-medium tracking-wide text-[#323232]">EN</span>
                        </div>
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border-b-2 px-3 py-2 text-sm bg-[#FAFAFA]"
                                onFocus={handleFocus}
                                onBlur={handleBlur} // Close when focus is lost
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <SearchIcon className="text-black" />
                            </button>
                            {isSearchOpen && <SearchPannel />}
                        </div>
                    </div>

                    <p className="text-[12px] font-semibold mt-[16px] tracking-wide text-[#323232]">FREE SHIPPING ON ORDERS ABOVE 5,000</p>

                    <div className="flex items-center space-x-4 mt-[16px] pb-[16px]">
                        <button onClick={toggleCart} className="flex items-center text-[12px] tracking-wide text-[#323232]">
                            <ShoppingBagIcon className="mr-2 text-[#323232]" />
                            Shopping Cart
                        </button>
                        <div className='flex flex-row space-x-1'>
                            <button onClick={toggleSignIn} className="flex items-center text-[12px] tracking-wide text-[#323232]">
                                Sign in
                            </button>
                            <a href="/create-account" className="flex items-center text-[12px] tracking-wide text-[#323232]">
                                Create Account
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shopping Cart Modal */}
            <ShoppingCart isOpen={isCartOpen} onClose={toggleCart} />

            {/* Sign In Panel */}
            <SignInRightsidePanel isOpen={isSignInOpen} onClose={toggleSignIn} />
        </>
    );
}

export default Header;
