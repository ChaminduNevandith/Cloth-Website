// EarnPointsPage.js
import React from 'react';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EarnPointsPage = ({ onBack }) => {
  return (
    <div className="flex flex-col">
      {/* Back Button */}
      <button
        className="flex items-center text-gray-500 hover:text-gray-700 mb-4"
        onClick={onBack} // Call the passed function to go back
      >
        <ArrowBackIcon />
        <span className="ml-2">Back</span>
      </button>

      {/* Earn Points Content */}
      <div className="text-center text-xl font-semibold mb-4 flex items-center justify-center">
        <AccountBalanceWalletIcon className="mr-2" />
        EARN ANGEL POINTS
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <p className="font-bold">Create an account</p>
            <p className="text-sm text-gray-500">1,000 Angel Points</p>
          </div>
          <button className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50">Do it now</button>
        </div>

        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div>
            <p className="font-bold">Complete an order</p>
            <p className="text-sm text-gray-500">Earn 10% Angel Points from every purchase!!</p>
          </div>
          <button className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50">Purchase</button>
        </div>

        <div className="flex justify-between items-center p-4">
          <div>
            <p className="font-bold">Leave a review</p>
            <p className="text-sm text-gray-500">10 Angel Points</p>
          </div>
          <button className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md hover:bg-pink-50">Purchase to review</button>
        </div>
      </div>
    </div>
  );
};

export default EarnPointsPage;
