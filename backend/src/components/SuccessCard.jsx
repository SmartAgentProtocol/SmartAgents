import React from "react";

const SuccessCard = ({ hash, to, from, timestamp, value, chainId }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <h2 className="text-center py-4">Transaction Details</h2>
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold">Hash</h2>
        <p className="text-gray-600 text-sm">{hash}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <p className="text-gray-700 font-semibold">From:</p>
        <p className="text-gray-600">{from}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <p className="text-gray-700 font-semibold">To:</p>
        <p className="text-gray-600">{to}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <p className="text-gray-700 font-semibold">Value:</p>
        <p className="text-gray-600">{value.toString()}</p>
      </div>
      <div className="px-4 py-2 border-t border-gray-200">
        <p className="text-gray-700 font-semibold">Chain ID:</p>
        <p className="text-gray-600">{chainId}</p>
      </div>
    </div>
  );
};

export default SuccessCard;