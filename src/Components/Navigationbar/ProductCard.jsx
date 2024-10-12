import React, { useState } from 'react';
import productImage from '../../assets/cloth-images/s1.png'; // Adjust the path according to your structure
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; // Importing the edit icon
import AlsoLike from './AlsoLike';

function ProductCard({ onDelete }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change)); // Prevent quantity from going below 1
  };

  // Dummy product details
  const product = {
    image: productImage, // Use the imported image
    name: 'Sample Product',
    color: 'Red',
    size: 'M',
  };

  return (
    <div className='flex flex-col h-[250px] w-[300px] lg:w-[390px] overflow-auto pb-3'>
      <div className='flex items-center p-4 rounded-sm border border-gray-300'>
        {/* Left Side: Product Image */}
        <div className='w-[100px]'>
          <img
            src={product.image}
            alt={product.name}
            className='object-cover h-full rounded-sm'
          />
        </div>

        {/* Right Side: Product Details */}
        <div className='w-2/3 pl-4 mt-2'>
          <h2 className='text-[14px] font-medium text-black mb-2'>{product.name}</h2>

          {/* Color and Size Information in the same row */}
          <div className='flex items-center mb-2'>
            <p className='text-[12px] text-gray-600 mr-2'>Color: {product.color}</p>
            <p className='text-[12px] text-gray-600 mx-4'>Size: {product.size}</p>
            <IconButton 
              aria-label="edit size"
              className='text-gray-500'
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </div>

          {/* Quantity Updater */}
          <div className='flex items-center mt-2 border w-[100px] p-1'>
            <button
              onClick={() => handleQuantityChange(-1)}
              className='text-black px-2 text-2xl rounded-l-sm'
            >
              -
            </button>
            <span className='text-lg text-black px-4'>{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className='text-black text-2xl px-2 rounded-r-sm'
            >
              +
            </button>
          </div>
        </div>

        {/* Delete Button */}
        <div className='ml-4'>
          <IconButton 
            aria-label="delete" 
            onClick={onDelete} // Call the onDelete function passed as a prop
            className='text-red-500'
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      {/* Also Like Section */}
      <div className='mt-6'>
        <AlsoLike />
      </div>

      
    </div>
  );
}

export default ProductCard;
