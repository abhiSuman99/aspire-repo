import React, { useState } from "react"

type Props = {
  name: string
  number: string
  expiry: string
}

const maskNumber = (num: string) => {
  const parts = num.split(" ")
  return "•••• •••• •••• " + parts[3]
}

const DebitCard: React.FC<Props> = ({ name, number, expiry }) => {

  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col items-end">

      <button
        className="text-green-600 text-sm mb-3"
        onClick={() => setShow(!show)}
      >
        👁 {show ? "Hide card number" : "Show card number"}
      </button>

      <div className="bg-[#01D167] text-white p-6 rounded-xl w-[380px] shadow-lg">

        <div className="text-right font-bold">
          aspire
        </div>

        <h3 className="text-xl mt-6">
          {name}
        </h3>

        <p className="tracking-widest mt-6 text-lg">
          {show ? number : maskNumber(number)}
        </p>

        <div className="flex justify-between mt-6 text-sm">
          <span>Thru: {expiry}</span>
          <span>CVV: ***</span>
        </div>

        <div className="text-right mt-4 font-bold text-xl">
          VISA
        </div>

      </div>

    </div>
  )
}

export default DebitCard