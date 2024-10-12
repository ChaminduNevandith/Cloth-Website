import React, { useState } from 'react';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RedeemIcon from '@mui/icons-material/Redeem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import bgImage from '../../assets/bg.jpg';

function AngelClub() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Side Button */}
      <div className="flex justify-center items-center">
        <button
          onClick={toggleModal}
          className="fixed right-0 top-[50%] translate-y-[-50%] w-[48px] h-[171.3px]
          bg-[linear-gradient(97.99deg,#000000_18.85%,#999999_116.55%)]  
          hover:bg-black rounded-l-md flex flex-col items-center justify-center hover:shadow-lg z-10" // Set z-index to 10 for the button
        >
          <span className="text-white text-[16px] font-medium transform rotate-[270deg] w-48 tracking-wide">
            <FilterVintageIcon style={{ color: 'white', fontSize: 'large' }} /> ANGEL CLUB
          </span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-y-0 2xl:right-16 right-0 z-50 flex items-center justify-end">
          <div className="bg-white 2xl:w-[350px] 2xl:h-[500px] w-[380px] h-[600px] rounded-lg shadow-lg relative z-20"> {/* Modal z-index set to 20 */}
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              <CloseIcon />
            </button>

            {/* Modal Content */}
            <div>
              {/* Header Section */}
              <div className="w-full h-[180px] bg-cover bg-center relative flex flex-col justify-center items-center " style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                  <span className="text-white text-xl font-bold">KELLY FELDER ANGEL CLUB</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 text-center text-gray-600 text-sm">
                Earn 10% Angel Points with every purchase!
              </div>

              {/* Sign Up & Sign In Buttons */}
              <div className="mt-4 flex space-x-4 pr-4 pl-4">
                <button className="bg-[linear-gradient(97.99deg,#000000_18.85%,#999999_116.55%)] text-white px-10 py-3 rounded-md hover:bg-gray-700">SIGN UP</button>
                <button className="border border-gray-400 px-10 py-3 rounded-md hover:bg-gray-100">SIGN IN</button>
              </div>

              {/* Option Buttons with Icons */}
              <div className="mt-6 w-full space-y-3 pl-4 pr-4">
                <button className="w-full py-3 bg-gray-100 text-left px-4 rounded-md hover:bg-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <AccountBalanceWalletIcon className="mr-2" />
                    <span>Earn Angel Points</span>
                  </div>
                  <ChevronRightIcon />
                </button>
                <button className="w-full py-3 bg-gray-100 text-left px-4 rounded-md hover:bg-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <RedeemIcon className="mr-2" />
                    <span>Redeem Angel Points</span>
                  </div>
                  <ChevronRightIcon />
                </button>
                <button className="w-full py-3 bg-gray-100 text-left px-4 rounded-md hover:bg-gray-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <AccountCircleIcon className="mr-2" />
                    <span>My Balance</span>
                  </div>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AngelClub;
