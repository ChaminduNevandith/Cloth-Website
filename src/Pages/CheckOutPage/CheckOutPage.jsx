import React from 'react';
import AddDetails from './AddDetails';
import CheckOutCart from './CheckOutCart';

function CheckOutPage() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex-1 mr-4 w-full md:w-[900px]">
        <AddDetails />
      </div>
      <div className="flex-1 bg-[#F5F5F5] w-full">
        <CheckOutCart />
      </div>
    </div>
  );
}

export default CheckOutPage;
