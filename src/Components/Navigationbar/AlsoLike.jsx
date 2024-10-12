import React from 'react';
import productImage from '../../assets/cloth-images/s1.png'; 

function AlsoLike() {
  return (
    <div className=" mt-8 max-w-sm ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">You May Also Like</h2>
        <div className="flex space-x-2">
          <button className="p-1 border border-gray-600 w-10 h-10 rounded-full">
            &#8249;
          </button>
          <button className="p-1 border border-gray-600 w-10 h-10 rounded-full">
            &#8250;
          </button>
        </div>
      </div>
      
      <div className="flex items-center">
        {/* Dummy Image */}
        <img 
          src="src\assets\cloth-images\s2.png" 
          alt="Dummy Product" 
          className="w-24 h-32 object-cover rounded-sm"
        />
        <div className="ml-4">
          {/* Product Information */}
          <p className="text-gray-500 text-[12px]">Serene Silhouette Midi Dress</p>
          <p className=" text-gray-500 text-[12px]">Green</p>
          <p className="font-bold text-[14px]">Rs 8,990.00</p>
          {/* Profile Image */}
          <div className="mt-2">
            <img 
              src="src\assets\cloth-images\s2.png" 
              alt="Profile" 
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
          <a href="#" className="text-indigo-600 text-sm mt-2 block">Details</a>
        </div>
      </div>
    </div>
  );
}

export default AlsoLike;
