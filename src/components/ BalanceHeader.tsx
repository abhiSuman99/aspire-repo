
import React from "react"

type Props = {
  onAddCard: () => void
}

const BalanceHeader: React.FC<Props> = ({ onAddCard }) => {

  return (
    <div className="flex justify-between items-center">

      <div>
        <p className="text-gray-500">Available balance</p>

        <div className="flex items-center gap-3 mt-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded">
            S$
          </span>
          <span className="text-3xl font-bold">
            3,000
          </span>
        </div>
      </div>

      <button
        onClick={onAddCard}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        + New card
      </button>

    </div>
  )
}

export default BalanceHeader
