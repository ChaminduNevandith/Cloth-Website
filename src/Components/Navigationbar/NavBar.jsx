import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CgProfile } from "react-icons/cg";
import img1 from '../../assets/Kelly-Felder.jpg'
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import ShoppingCart from './ShoppingCart';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control cart panel

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart panel visibility
  };


  return (
    <nav className="bg-white">
      <div className="items-center justify-center hidden mx-auto space-x-4 h-[45px] bg-black md:flex tracking-wide">
        <NavLink to="/" exact className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          HOME
        </NavLink>
        <NavLink to="/new-arrivals" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          NEW ARRIVALS
        </NavLink>
        <NavLink to="/collections" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          COLLECTIONS
        </NavLink>
        <NavLink to="/workwear" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          WORKWEAR
        </NavLink>
        <NavLink to="/linen" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          LINEN
        </NavLink>
        <NavLink to="/denim" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          DENIM
        </NavLink>
        <NavLink to="/scylla" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          SCYLLA ZELUS
        </NavLink>
        <NavLink to="/shop-men" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          SHOP MEN
        </NavLink>
        <NavLink to="/50-off" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          50% OFF
        </NavLink>
        <NavLink to="/angel-club" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline" activeClassName="underline">
          ANGEL CLUB
        </NavLink>
      </div>
      <div className="container flex items-center justify-between mx-auto ">

            <div className="flex items-center justify-between px-4 py-2 md:hidden">
         
                <button onClick={toggleMobileMenu} className="mr-4 text-black focus:outline-none">
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                    </svg>
                </button>

                <button className="ml-4 text-black">
                    <CiSearch className="w-6 h-6" />
                </button>
              
                <a href="/" className="flex items-center mx-16">
                    <img src={img1} alt="Logo" className="w-auto h-10" />
                </a>

                <button className="ml-4 text-black">
                    <CgProfile className="w-6 h-6" />
                </button>

                 <button onClick={toggleCart} className="ml-4 text-black"> {/* Toggle cart panel on click */}
            <IoBagOutline className="w-6 h-6" />
          </button>
            </div>

        </div>

      {isMobileMenuOpen && (
        <div className="md:hidden ">
          {/* Menu Items */}
          <NavLink to="/" exact className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            Home
          </NavLink>
          <NavLink to="/new-arrivals" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            NEW ARRIVALS
          </NavLink>
          <NavLink to="/collections" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            COLLECTIONS
          </NavLink>
          <NavLink to="/workwear" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            WORKWEAR
          </NavLink>
          <NavLink to="/linen" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            LINEN
          </NavLink>
          <NavLink to="/denim" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            DENIM
          </NavLink>
          <NavLink to="/scylla" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            SCYLLA ZELUS
          </NavLink>
          <NavLink to="/shop-men" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            SHOP MEN
          </NavLink>
          <NavLink to="/50-off" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            50% OFF
          </NavLink>
          <NavLink to="/angel-club" className="block px-4 py-2 font-bold text-black border-b border-gray-300" activeClassName="bg-gray-200">
            ANGEL CLUB
          </NavLink>

          {/* Sign in, Create Account, and Wish List with icons */}
          <NavLink to="/our-product" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300" activeClassName="bg-gray-200">
            <CallIcon className="mr-2" />
            Sign in
          </NavLink>

          <NavLink to="/create-account" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300" activeClassName="bg-gray-200">
            <AccountCircleIcon className="mr-2" />
            Create Account
          </NavLink>

          <NavLink to="/my-wish-list" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300" activeClassName="bg-gray-200">
            <FavoriteIcon className="mr-2" />
            My Wish List
          </NavLink>
        </div>
      )}
       <ShoppingCart isOpen={isCartOpen} onClose={toggleCart} /> {/* Pass props to control cart */}
    </nav>
  );
}

export default NavBar;
