import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const DebitCard: React.FC = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center">

      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-green-600 mb-4"
      >
        <EyeIcon className="w-5 h-5" />
        Show card number
      </button>

      <div className="bg-[#01D167] w-[420px] text-white rounded-2xl shadow-xl p-6">

        <div className="flex justify-end text-lg font-bold">
          aspire
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Mark Henry
        </h3>

        <p className="tracking-[6px] mt-6 text-lg">
          {show ? "1234 5678 9012 3456" : "•••• •••• •••• 3456"}
        </p>

        <div className="flex gap-8 mt-6 text-sm">
          <span>Thru: 12/20</span>
          <span>CVV: ***</span>
        </div>

        <div className="text-right text-2xl font-bold mt-6">
          VISA
        </div>

      </div>

      {/* dots */}

      <div className="flex gap-2 mt-4">
        <div className="w-6 h-2 bg-green-400 rounded-full"></div>
        <div className="w-2 h-2 bg-green-200 rounded-full"></div>
        <div className="w-2 h-2 bg-green-200 rounded-full"></div>
      </div>

    </div>
  );
};

export default DebitCard;