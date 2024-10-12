import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeart, faEye, faTaxi } from '@fortawesome/free-solid-svg-icons'; 
import img1 from '../../assets/de1.webp';
import img2 from '../../assets/de11.jpg';
import img3 from '../../assets/de2.webp';
import img4 from '../../assets/de22.jpg';
import sizeChart from '../../assets/de2.webp'; 
import Recently from '../../Components/RecentlyProducts/Recently';


const ProductPage = () => {
  const initialPrice = 4500; 
  const [quantity, setQuantity] = useState(1); 
  const [price, setPrice] = useState(initialPrice); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('description'); 
  const [mainImage, setMainImage] = useState(img1); 

  const subtotal = price * quantity;

  const incrementQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(''); 
    } else {
      setActiveSection(section); 
    }
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <section>
     
      <div className="relative">
      
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative max-w-2xl p-8 bg-white rounded-lg">
              <button
                onClick={toggleModal}
                className="absolute text-gray-600 top-2 right-2 hover:text-gray-800"
              >
                &times;
              </button>
              <img src={sizeChart} alt="Size Chart" className="w-[500px] h-auto" />
            </div>
          </div>
        )}

        <div className={`px-4 py-8 mx-auto max-w-7xl ${isModalOpen ? 'filter blur-sm' : ''}`}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          
            <div className="space-y-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="object-cover w-full h-auto"
              />
              <div className="grid grid-cols-3 gap-2">
                <img
                  src={img2}
                  alt="Gallery Image 1"
                  className="object-cover w-full h-auto cursor-pointer"
                  onClick={() => handleImageClick(img2)}
                />
                <img
                  src={img3}
                  alt="Gallery Image 2"
                  className="object-cover w-full h-auto cursor-pointer"
                  onClick={() => handleImageClick(img3)}
                />
                <img
                  src={img4}
                  alt="Gallery Image 3"
                  className="object-cover w-full h-auto cursor-pointer"
                  onClick={() => handleImageClick(img4)}
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold">Midnight Charcoal</h1>
              <p className="mt-2 text-sm text-gray-500">SKU: 24219600</p>
              <p className="mt-4 text-lg font-semibold">Rs {initialPrice.toLocaleString()}.00</p>
              <p className="mt-4 text-sm text-gray-700">Color: Charcoal</p>
              <img className="w-10 h-10 mt-4 rounded-full" src={img1} alt="" />

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Size:</h3>
                <div className="grid grid-cols-6 gap-2 mt-2">
                  {['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'].map((size) => (
                    <button
                      key={size}
                      className={`py-2 border ${
                        ['24', '32', '33', '34'].includes(size)
                          ? 'border-gray-900 text-black'
                          : 'border-gray-400 text-gray-400'
                      }`}
                      disabled={!['24', '32', '33', '34'].includes(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center mt-4">
                <button onClick={toggleModal} className="text-blue-500 hover:underline">
                  Size Guide
                </button>
                <span className="mx-2">|</span>
                <a href="#" className="text-blue-500 hover:underline">
                  Compare Color
                </a>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold">Subtotal: Rs {subtotal.toLocaleString()}.00</h3>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Quantity:</h3>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decrementQuantity}
                      className="px-4 py-2 text-gray-800 bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 h-10 text-center border"
                      value={quantity}
                      min="1"
                      readOnly
                    />
                    <button
                      onClick={incrementQuantity}
                      className="px-4 py-2 text-gray-800 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button className="px-20 py-2 text-white bg-gray-800">
                    SOLD OUT
                  </button>

                  <button className="flex items-center justify-center w-10 h-10 ml-2 text-white bg-black rounded-full">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="flex items-center mt-10 text-sm text-black">
                  <FontAwesomeIcon icon={faEye} className="mr-2" /> 
                  25 customers are viewing this product
                </p>
                <p className="flex items-center mt-5 text-sm text-black">
                  <FontAwesomeIcon icon={faTaxi} className="mr-2" /> 
                  Free Shipping For Orders Above LKR 5000
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-center space-x-4">
              <button
                className={`px-4 py-2 font-bold text-xl ${
                  activeSection === 'description' ? 'text-blue-500 underline' : 'text-gray-700'
                }`}
                onClick={() => toggleSection('description')}
              >
                Description
              </button>

              <button
                className={`px-4 py-2 font-bold text-xl ${
                  activeSection === 'shipping' ? 'text-blue-500 underline' : 'text-gray-700'
                }`}
                onClick={() => toggleSection('shipping')}
              >
                Shipping & Returns
              </button>
            </div>
            <hr className="block my-4 mb-10 border-gray-600 md:mb-0 " />

            {activeSection === 'description' && (
              <div>
                 <ul className="pl-5 list-disc">
                  <li className="mt-3 text-sm">24219600</li>
                  <li className="mt-3 text-sm">80% Cotton, 20% Pre Consumer Recycled Cotton</li>
                  <li className="mt-3 text-sm">Loose fit</li>
                  <li className="mt-3 text-sm">Ribbed collar</li>
                  <li className="mt-3 text-sm">Softly brushed interior</li>
                </ul>
              </div>
            )}

            {activeSection === 'shipping' && (
              <div>
                 <p className='mt-4 text-xl font-bold'>Shipping Returns</p>
                <p className='mt-4 text-3xl font-bold'> RETURNS / REFUND / EXCHANGE POLICY</p>
                <br />
                <p className="text-sm ">Kelly Felder will give its customers the opportunity to refund or return or exchange 
                    a product provided it is in fully resalable condition. Returns should be made within 
                    15 days and in original, undamaged packaging. If we find that the product has not 
                    been returned to us in fully resalable condition, we reserve the right to refuse a 
                    refund/exchange on the item. We will refund the price of the item to the purchaser's 
                    account as store credits. A refund of the delivery charge will be given in the 
                    instance of incorrect, damaged or faulty goods
                </p>
                <br />
                <p className="text-sm ">
                    If we find that the product has not been returned to us in fully resalable condition, 
                    we reserve the right to refuse a refund/exchange on the item. 
                    A refund of the delivery charge will be given in the instance of incorrect, 
                    damaged or faulty goods
                </p>
                <br />
                <p className="text-sm ">
                    Orders made with promo codes are returnable unless stated otherwise in the promo code terms and conditions. 
                </p>
                <br />
                <p className="text-sm ">
                    Returnable items must be unworn, unwashed, unaltered, and still have their clothing tags intact. 
                </p>
                <br />
                <p className='text-xl font-bold '>PRODUCTS WE ARE UNABLE TO REFUND OR EXCHANGE</p>
                <br />
                <p className="text-sm ">We will only be refunding damaged or faulty goods. We are also unable to offer a refund or exchange for items on sale.</p>
                <br />
                <p className='text-xl font-bold'>ORIGINAL DELIVERY CHARGES</p>
                <br />
                <p className="text-sm ">We will refund the delivery charge when a product is incorrect, faulty or 
                    damaged, but not when a product is simply unwanted. Note: Please note that the above policies 
                    are subject to change by the Management of Kelly Felder at any given time without prior notice 
                    to the customer
                </p>
                <br />
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
      <Recently />
    </section>
  );
};

export default ProductPage;
