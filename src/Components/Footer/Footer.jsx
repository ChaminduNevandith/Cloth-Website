import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import img from '../../assets/visa card.jpg'
import img2 from '../../assets/master card.png'
import img3 from '../../assets/amex card.jpg'

function Footer() {
 
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <section className='text-white bg-black p-7'>
            <div className="flex flex-col m-20 md:flex-row">
                
                <div className="flex flex-col mb-4 md:w-1/3 md:mb-0">
                    <button 
                        className='flex items-center justify-between mb-2 font-bold md:cursor-default' 
                        onClick={() => setIsShopOpen(!isShopOpen)}>
                        <span>SHOP</span>
                       
                        <span className="block md:hidden">
                            {isShopOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </button>
                    
                    <ul className={`space-y-1 text-xs md:text-left ${isShopOpen ? 'block' : 'hidden'} md:block`}>
                        <li className='hover:underline'><Link to="/">HOME</Link></li>
                        <li className='hover:underline'><Link to="/">NEW ARRIVALS</Link></li>
                        <li className='hover:underline'><Link to="/">VIEW COLLECTIONS</Link></li>
                        <li className='hover:underline'><Link to="/">KELLY FELDER</Link></li>
                        <li className='hover:underline'><Link to="/">REDVERS BULLER</Link></li>
                        <li className='hover:underline'><Link to="/">SCYLLA ZELUD</Link></li>
                        <li className='hover:underline'><Link to="/">CONTACT US</Link></li>
                    </ul>
                    <hr className="block my-4 border-gray-600 md:hidden" />
                    
                </div>

               
                <div className="flex flex-col mb-4 md:w-1/3 md:mb-0">
                    <button 
                        className='flex items-center justify-between mb-2 font-bold md:cursor-default' 
                        onClick={() => setIsInfoOpen(!isInfoOpen)}>
                        <span>INFORMATION</span>
                       
                        <span className="block md:hidden">
                            {isInfoOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </button>
                    <ul className={`space-y-1 text-sm md:text-left ${isInfoOpen ? 'block' : 'hidden'} md:block`}>
                        <li className='text-xs hover:underline'><Link to="/about">ABOUT US</Link></li>
                        <li className='text-xs hover:underline'><Link to="/contactUs">CONTACT US</Link></li>
                        <li className='text-xs hover:underline'><Link to="/">ANGEL CLUB</Link></li>
                    </ul>
                    <hr className="block my-4 border-gray-600 md:hidden" />
                </div>

              
                <div className="flex flex-col mb-4 md:w-1/3 md:mb-0">
                    <button 
                        className='flex items-center justify-between mb-2 font-bold md:cursor-default' 
                        onClick={() => setIsTermsOpen(!isTermsOpen)}>
                        <span>TERMS OF USES</span>
                        
                        <span className="block md:hidden">
                            {isTermsOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </button>
                    <ul className={`space-y-1 text-sm md:text-left ${isTermsOpen ? 'block' : 'hidden'} md:block`}>
                        <li className='text-xs hover:underline'><Link to="/condition">TERMS & CONDITIONS</Link></li>
                        <li className='text-xs hover:underline'><Link to="/policy">PRIVACY POLICY</Link></li>
                        <li className='text-xs hover:underline'><Link to="/returns">SHIPPING & RETURNS</Link></li>
                    </ul>
                    <hr className="block my-4 border-gray-600 md:hidden" />
                </div>

               
                <div className="flex flex-col w-full md:w-1/3">
                    <p className='mb-2 font-bold'>NEWSLETTER SIGN UP</p>
                    <p className='mb-2 text-xs'>Sign up for exclusive updates, new arrivals & insider-only discounts</p>
                    <div className="flex flex-col mb-5 md:flex-row">
                        <textarea 
                            className="w-full p-2 mb-2 text-gray-300 bg-black border md:mb-0 md:mr-2" 
                            placeholder="Enter your email..." 
                            rows="1">
                        </textarea>
                        <button className="px-4 py-2 text-black bg-white hover:bg-black hover:text-white">
                            Submit
                        </button>
                    </div>
                   
                    <div className="flex justify-center space-x-4 md:justify-start">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 bg-white rounded-full">
                            <FaFacebookF className="text-xl text-black hover:text-blue-700" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 bg-white rounded-full">
                            <FaInstagram className="text-xl text-black hover:text-pink-700" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 bg-white rounded-full">
                            <FaTiktok className="text-xl text-black hover:text-gray-700" />
                        </a>
                    </div>

                </div>
                <hr className="block w-full mx-0 my-4 border-gray-600 md:hidden" />

            </div>

            
            <div className='flex flex-col items-center justify-between m-0 md:flex-row md:m-20'>
            <div className='mb-4 text-center text-gray-200 md:mb-0 md:text-left'>
                <p className='text-xs'>2024 KELLY FELDER</p>
            </div>
            <div className='flex justify-center space-x-2 md:justify-end'>
                <img className='w-[50px] h-[30px]' src={img} alt="card" />
                <img className='w-[50px] h-[30px]' src={img2} alt="card" />
                <img className='w-[50px] h-[30px]' src={img3} alt="card" />
            </div>
        </div>



        </section>
    );
}

export default Footer;
