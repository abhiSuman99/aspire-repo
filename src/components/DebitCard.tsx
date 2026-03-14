import React, { useState } from "react";

const DebitCard: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">

      <button
        className="absolute -top-8 right-0 text-green-600 text-sm"
        onClick={() => setShow(!show)}
      >
        Show card number
      </button>

      <div className="bg-[#01D167] text-white p-6 rounded-xl shadow-lg w-full max-w-md">

        <div className="flex justify-between">
          <span></span>
          <span className="font-bold">aspire</span>
        </div>

        <h3 className="text-xl font-semibold mt-6">Mark Henry</h3>

        <p className="tracking-widest mt-6 text-lg">
          {show ? "1234 5678 9012 3456" : "•••• •••• •••• 3456"}
        </p>

        <div className="flex justify-between mt-6 text-sm">
          <span>Thru: 12/20</span>
          <span>CVV: ***</span>
        </div>

        <div className="text-right mt-4 font-bold text-xl">
          VISA
        </div>

      </div>
    </div>
  );
};

export default DebitCard;