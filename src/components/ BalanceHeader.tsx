import React from "react";

const BalanceHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">

      <div>
        <p className="text-gray-500">Available balance</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
            S$
          </span>

          <span className="text-3xl font-bold">
            3,000
          </span>
        </div>
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        + New card
      </button>

    </div>
  );
};

export default BalanceHeader;