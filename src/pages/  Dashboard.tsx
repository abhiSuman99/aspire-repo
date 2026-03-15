
import React, { useState, useRef } from "react"


import DebitCard from "../components/DebitCard"
import CardActions from "../components/CardActions"
import CardInfoPanel from "../components/CardInfoPanel"
import MobileNavbar from "../components/MobileNavbar"
import AddCardModal from "../components/AddCardModal"

import { generateCardNumber, generateExpiry } from "../utils/cardGenerator"
import Sidebar from "../components/ Sidebar"
import BalanceHeader from "../components/ BalanceHeader"

type Card = {
  id: number
  name: string
  number: string
  expiry: string
}

const Dashboard: React.FC = () => {

  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      name: "Mark Henry",
      number: "1234 5678 9012 3456",
      expiry: "12/26"
    }
  ])

  const [index, setIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const startX = useRef(0)

  const addCard = (name: string) => {

    const newCard: Card = {
      id: Date.now(),
      name,
      number: generateCardNumber(),
      expiry: generateExpiry()
    }

    const updated = [...cards, newCard]

    setCards(updated)
    setIndex(updated.length - 1)
  }

  const touchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const touchEnd = (e: React.TouchEvent) => {

    const diff = startX.current - e.changedTouches[0].clientX

    if (diff > 50 && index < cards.length - 1) {
      setIndex(prev => prev + 1)
    }

    if (diff < -50 && index > 0) {
      setIndex(prev => prev - 1)
    }
  }

  return (
    <div className="min-h-screen w-full">

      {/* ================= DESKTOP ================= */}

      <div className="hidden lg:flex h-screen overflow-hidden">

        {/* Sidebar fixed */}

        <div className="w-64 flex-shrink-0">
          <Sidebar/>
        </div>

        {/* Scrollable content */}

        <div className="flex-1 overflow-y-auto bg-gray-100 p-10">

          <BalanceHeader onAddCard={() => setOpenModal(true)} />
          <div className="flex gap-8 mt-8 text-sm font-medium">
            <span className="border-b-2 border-blue-500 pb-1">
              My debit cards
            </span>
            <span className="text-gray-400">
              All company cards
            </span>
          </div>

          <div className="mt-6 bg-white rounded-2xl shadow-xl p-10">

            <div className="grid grid-cols-2 gap-12">

              {/* LEFT */}

              <div className="flex flex-col items-center gap-6">

                <div
                  onTouchStart={touchStart}
                  onTouchEnd={touchEnd}
                >
                  <DebitCard
                    name={cards[index].name}
                    number={cards[index].number}
                    expiry={cards[index].expiry}
                  />
                </div>

                {/* Dots */}

                <div className="flex gap-2 mt-4">

                  {cards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full ${
                        i === index
                          ? "w-6 bg-green-500"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}

                </div>

                <CardActions />

              </div>

              {/* RIGHT */}

              <CardInfoPanel />

            </div>

          </div>

        </div>

      </div>

      {/* ================= MOBILE ================= */}

      <div className="lg:hidden">

        {/* BLUE HEADER */}

        <div className="bg-[#0C365A] text-white px-6 pt-8 pb-28">

          <div className="flex justify-between items-center">

            <h2 className="text-lg">
              Account balance
            </h2>

            <button
              onClick={() => setOpenModal(true)}
              className="text-green-400 font-medium"
            >
              + New card
            </button>

          </div>

          <div className="flex items-center gap-3 mt-4">

            <span className="bg-green-500 px-3 py-1 rounded text-sm font-semibold">
              S$
            </span>

            <span className="text-3xl font-bold">
              3,000
            </span>

          </div>

          {/* CARD */}

          <div className="mt-8">

            <div
              onTouchStart={touchStart}
              onTouchEnd={touchEnd}
            >

              <DebitCard
                name={cards[index].name}
                number={cards[index].number}
                expiry={cards[index].expiry}
              />

            </div>

            {/* DOTS */}

            <div className="flex justify-center gap-2 mt-4">

              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full ${
                    i === index
                      ? "w-6 bg-green-400"
                      : "w-2 bg-green-200"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

        {/* PULL-UP WHITE SECTION */}

        <div className="bg-white rounded-t-3xl -mt-24 pt-6 pb-24 px-6 shadow-xl">

          <CardActions />

          <div className="mt-6">
            <CardInfoPanel />
          </div>

        </div>

        <MobileNavbar />

      </div>

      {/* ================= MODAL ================= */}

      {openModal && (
        <AddCardModal
          onClose={() => setOpenModal(false)}
          onAdd={addCard}
        />
      )}

    </div>
  )
}

export default Dashboard
