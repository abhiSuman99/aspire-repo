import React, { useState } from "react";

const transactions = [
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: "+ S$ 150",
    type: "Refund on debit card",
  },
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    type: "Charged to debit card",
  },
  {
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    type: "Charged to debit card",
  },
];

const CardInfoPanel: React.FC = () => {
  const [details, setDetails] = useState(false);
  const [tx, setTx] = useState(true);

  return (
    <div className="space-y-4 w-full lg:w-[350px]">

      {/* Card Details */}

      <div className="bg-gray-100 rounded-lg">
        <div
          onClick={() => setDetails(!details)}
          className="flex justify-between p-4 cursor-pointer"
        >
          <span>Card details</span>
          <span>{details ? "▲" : "▼"}</span>
        </div>

        {details && (
          <div className="p-4 text-sm text-gray-600">
            <p>Card type: Visa</p>
            <p>Card holder: Mark Henry</p>
            <p>Expiry: 12/20</p>
          </div>
        )}
      </div>

      {/* Transactions */}

      <div className="bg-gray-100 rounded-lg">

        <div
          onClick={() => setTx(!tx)}
          className="flex justify-between p-4 cursor-pointer"
        >
          <span>Recent transactions</span>
          <span>{tx ? "▲" : "▼"}</span>
        </div>

        {tx && (
          <div className="divide-y">

            {transactions.map((t, i) => (
              <div key={i} className="flex justify-between p-4">

                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                  <p className="text-xs text-blue-500">{t.type}</p>
                </div>

                <span
                  className={`font-semibold ${
                    t.amount.includes("+")
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {t.amount}
                </span>

              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default CardInfoPanel;