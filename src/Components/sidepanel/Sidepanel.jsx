import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Sidepanel() {
  const [category1Open, setCategory1Open] = useState(true);
  const [category2Open, setCategory2Open] = useState(true);
  const [avaliabilityOpen, setAvaliabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [colorOpen, setcolorOpen] = useState(true);
  const [clothOpen, setclothOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 9270]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const featuredProducts = [
    {
      name: 'Kaylee Button Down Crop Top - Red',
      price: 'Rs 3,990.00',
      image: 'src/assets/product1.jpeg',
    },
    {
      name: 'Athleisure Top - Blue',
      price: 'Rs 4,290.00',
      image: 'src/assets/product1.jpeg',
    },
    {
      name: 'Casual Dress - Green',
      price: 'Rs 5,200.00',
      image: 'src/assets/product1.jpeg',
    },
  ];

  const toggleCategory1 = () => setCategory1Open(!category1Open);
  const toggleCategory2 = () => setCategory2Open(!category2Open);
  const toggleAvaliability = () => setAvaliabilityOpen(!avaliabilityOpen);
  const togglePrice = () => setPriceOpen(!priceOpen);
  const togglecolor = () => setcolorOpen(!colorOpen);
  const togglecloth = () => setclothOpen(!clothOpen);

  const handlePriceChange = (range) => setPriceRange(range);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true); // Open sidebar on large screens
      } else {
        setIsSidebarOpen(false); // Close sidebar on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Filter Button for small screens */}
      <button
        className="lg:hidden bg-white border border-black text-black hover:bg-black hover:text-white w-[130px] h-[30px] rounded-sm"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Filters' : 'Open Filters +'}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block lg:relative fixed top-0 left-0 lg:w-[250px] lg:h-auto bg-white text-[#232323] h-[100vh] overflow-y-auto lg:overflow-visible`}
        style={{ zIndex: 30 }}
      >
        <div className="p-4 relative">
          {/* Close Button for mobile */}
          <button
            className="lg:hidden absolute top-2 right-2 bg-white text-black p-2 rounded"
            onClick={() => setIsSidebarOpen(false)}
          >
           ✖
          </button>

          <ul>
            {/* Category 1 */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2" onClick={toggleCategory1}>
                <span className="text-[16px] font-semibold ">Category</span>
                {category1Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {category1Open && (
               <ul class="ml-4 mt-2 text-[12px] font-normal">
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">50% off</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Athleisure</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Best Sellers</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Cargo</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Casual</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Crop Tops</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Denims</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Dresses</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Essentials</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Evening Wear</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Footwear</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Gift Vouchers</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Jumpsuits</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Kelly Felder</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Leggings</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Men</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out underline">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">NEW ARRIVALS</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Oversized T-Shirts</a>
               </li>
               <li class="group relative mb-2 p-2 rounded hover:pl-4 transition-all duration-300 ease-in-out">
                 <span class="absolute left-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-[-10px]">›</span>
                 <a href="#" class="inline-block w-full">Pants</a>
               </li>
             </ul>
             
              
              )}
            </li>

            {/* Size */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2" onClick={toggleCategory2}>
                <span className="text-[16px] font-semibold">Size</span>
                {category2Open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {category2Open && (
                <ul className="ml-4 mt-2">
                  <div className="grid grid-cols-4 gap-2 text-[12px] font-normal">
                    <button className="border border-gray-300 p-2 rounded hover:bg-gray-200 text-black">XXS</button>
                    <button className="border border-gray-300 p-2 rounded hover:bg-gray-200 text-black">XS</button>
                  </div>
                </ul>
              )}
            </li>

            {/* Availability */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2" onClick={toggleAvaliability}>
                <span className="text-[16px] font-semibold">Availability</span>
                {avaliabilityOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {avaliabilityOpen && (
                <ul className="ml-4 mt-2">
                  <div className="flex items-center mb-4">
                    <input
                      id="in-stock-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor="in-stock-checkbox" className="ms-2 text-[12px] font-normal text-[#232323]">
                      In Stock(161)
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      id="in-stock-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor="in-stock-checkbox" className="ms-2 text-[12px] font-normal text-[#232323]">
                      Out OfStock(161)
                    </label>
                  </div>
                </ul>
              )}
            </li>

            {/* Price Range */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2 rounded cursor-pointer" onClick={togglePrice}>
                <span className="text-[16px] font-semibold">Price</span>
                {priceOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {priceOpen && (
                <div className="mt-2">
                  <div className="flex items-center mb-4">
                    <Slider
                      range
                      min={0}
                      max={10000}
                      defaultValue={priceRange}
                      value={priceRange}
                      onChange={handlePriceChange}
                      trackStyle={{ backgroundColor: '#000', height: 5 }}
                      handleStyle={[
                        {
                          backgroundColor: '#ffffff',
                          border: '5px solid black',
                          width: 20,
                          height: 20,
                          borderRadius: '100%',
                          top: '2.5px',
                        },
                        {
                          backgroundColor: '#ffffff',
                          border: '5px solid black',
                          width: 20,
                          height: 20,
                          borderRadius: '100%',
                          top: '2.5px',
                        },
                      ]}
                      railStyle={{ backgroundColor: '#d3d3d3', height: 5 }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2 ">
                    <div className="flex items-center">
                      <span className="text-[12px] font-normal">Rs</span>
                      <input
                        type="number"
                        className="w-[50px] ml-2 border border-gray-300 rounded p-1"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      />
                    </div>
                    <span>to</span>
                    <div className="flex items-center">
                      <span className="text-[12px] font-normal">Rs</span>
                      <input
                        type="number"
                        className="w-[50px] ml-2 border border-gray-300 rounded p-1"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Color */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2" onClick={togglecolor}>
                <span className="text-[16px] font-semibold">Color</span>
                {colorOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {colorOpen && (
                <ul className="ml-4 mt-2">
                  <div className="grid grid-cols-4 gap-2">
                    <button className="border bg-gray-900 p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-black p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-red-400 p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-gray-300 p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-purple-400 p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-green-400 p-2 rounded-full w-10 h-10"></button><button className="border border-gray-300 p-2 rounded-full w-10 h-10"></button>
                    <button className="border bg-yellow-400 p-2 rounded-full w-10 h-10"></button>
                   
                  </div>
                </ul>
              )}
            </li>

            {/* Featured Products */}
            <li className="mb-2">
              <div className="flex justify-between items-center p-2" onClick={togglecloth}>
                <span className="text-[16px] font-semibold">Featured Products</span>
                {clothOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
              <hr />
              {clothOpen && (
                <div className="ml-4 mt-2">
                  <div className="relative">
                    <button
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white border p-1 rounded-full w-10 h-10"
                      onClick={prevProduct}
                    >
                      <ChevronLeftIcon />
                    </button>
                    <img
                      src={featuredProducts[currentIndex].image}
                      alt={featuredProducts[currentIndex].name}
                      className="w-full h-auto rounded"
                    />
                    <button
                      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-1 rounded-full w-10 h-10"
                      onClick={nextProduct}
                    >
                      <ChevronRightIcon />
                    </button>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-semibold">{featuredProducts[currentIndex].name}</p>
                    <p className="text-xs text-gray-600">{featuredProducts[currentIndex].price}</p>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidepanel;
