
import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  ArrowsRightLeftIcon,
  SpeakerWaveIcon,
  PaperAirplaneIcon,
  ArchiveBoxIcon,
  CreditCardIcon
} from "@heroicons/react/24/outline";

const transactions = [
  {
    icon: ArchiveBoxIcon,
    bg: "bg-blue-100",
    color: "text-blue-600",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "+ S$ 150",
    amountColor: "text-green-500",
    note: "Refund on debit card"
  },
  {
    icon: PaperAirplaneIcon,
    bg: "bg-green-100",
    color: "text-green-600",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    amountColor: "text-gray-700",
    note: "Charged to debit card"
  },
  {
    icon: SpeakerWaveIcon,
    bg: "bg-pink-100",
    color: "text-pink-500",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    amountColor: "text-gray-700",
    note: "Charged to debit card"
  },
  {
    icon: ArchiveBoxIcon,
    bg: "bg-blue-100",
    color: "text-blue-600",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    amountColor: "text-gray-700",
    note: "Charged to debit card"
  }
];

const CardInfoPanel: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-[420px]">

      {/* CARD DETAILS */}

      <div className="bg-[#F1F4F8] rounded-xl p-4 flex justify-between items-center mb-4 cursor-pointer">
        <div className="flex items-center gap-3">
          <CreditCardIcon className="w-6 h-6 text-blue-600" />
          <span className="font-medium text-gray-700">Card details</span>
        </div>

        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </div>

      {/* RECENT TRANSACTIONS */}

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border">

        <div
          className="bg-[#F1F4F8] p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-3">
            <ArrowsRightLeftIcon className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-700">
              Recent transactions
            </span>
          </div>

          {open ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
          )}
        </div>

        {open && (
          <div className="divide-y">

            {transactions.map((t, i) => {
              const Icon = t.icon;

              return (
                <div
                  key={i}
                  className="p-5 flex justify-between items-start hover:bg-gray-50"
                >
                  {/* LEFT */}

                  <div className="flex gap-4">

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${t.bg}`}
                    >
                      <Icon className={`w-6 h-6 ${t.color}`} />
                    </div>

                    <div>

                      <p className="font-semibold text-gray-800">
                        {t.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {t.date}
                      </p>

                      <div className="flex items-center gap-2 mt-2 text-blue-600 text-sm">

                        <div className="bg-blue-600 text-white rounded-full p-1">
                          <CreditCardIcon className="w-4 h-4" />
                        </div>

                        {t.note}

                      </div>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div className="flex items-center gap-2">

                    <span className={`font-semibold ${t.amountColor}`}>
                      {t.amount}
                    </span>

                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />

                  </div>
                </div>
              );
            })}

          </div>
        )}

        {/* FOOTER */}

        <div className="bg-green-50 text-center py-4 text-green-600 font-medium cursor-pointer">
          View all card transactions
        </div>

      </div>
    </div>
  );
};

export default CardInfoPanel;
