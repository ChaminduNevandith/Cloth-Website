import React from 'react';

const Pagination = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-4 ">
      {/* Showing text */}
      <span className="text-gray-600">Showing 1-10 of 176 total</span>

      {/* Pagination buttons */}
      <div className="flex space-x-1">
      <button className="px-2 py-1 text-gray-800 text-[14px] font-semibold">Prev</button>
        <button className="px-2 py-1 text-gray-900 text-[12px] underline  ">1</button>
        <button className="px-2 py-1 text-gray-600 text-[12px]">2</button>
        <button className="px-2 py-1 text-gray-600  text-[12px]">3</button>
        <span className="px-2 py-1 text-gray-600">...</span>
        <button className="px-2 py-1 text-gray-600 text-[12px] ">18</button>
        <button className="px-2 py-1 text-gray-800 text-[14px] font-semibold">NEXT</button>
      </div>
    </div>
  );
};

export default Pagination;
