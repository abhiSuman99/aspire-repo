
import React from "react";


import DebitCard from "../components/DebitCard";
import CardActions from "../components/CardActions";
import CardInfoPanel from "../components/CardInfoPanel";
import MobileNavbar from "../components/MobileNavbar";
import Sidebar from "../components/ Sidebar";
import BalanceHeader from "../components/ BalanceHeader";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full">

      {/* ================= DESKTOP VIEW ================= */}

{/* ================= DESKTOP VIEW ================= */}

<div className="hidden lg:flex h-screen bg-gray-100 overflow-hidden">

  {/* Sidebar (fixed) */}

  <div className="flex-shrink-0">
    <Sidebar />
  </div>


  {/* Scrollable Content */}

  <div className="flex-1 overflow-y-auto p-10">

    <BalanceHeader />

    {/* Tabs outside shadow box */}

    <div className="flex gap-8 mt-8 text-sm font-medium">

      <span className="border-b-2 border-blue-500 pb-1">
        My debit cards
      </span>

      <span className="text-gray-400">
        All company cards
      </span>

    </div>


    {/* Shadow container */}

    <div className="mt-6 bg-white rounded-2xl shadow-xl p-10">

      <div className="grid grid-cols-2 gap-12">

        {/* LEFT */}

        <div className="flex flex-col gap-8">

          <div className="flex justify-center">
            <DebitCard />
          </div>

          <CardActions />

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <CardInfoPanel />
        </div>

      </div>

    </div>

  </div>

</div>



      {/* ================= MOBILE VIEW ================= */}

      <div className="lg:hidden">

        {/* BLUE HEADER */}

        <div className="bg-[#0C365A] text-white px-6 pt-8 pb-28">

          <div className="flex justify-between items-center">

            <h2 className="text-lg">
              Account balance
            </h2>

            <button className="text-green-400 font-medium">
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

          {/* Tabs */}

          <div className="flex gap-6 mt-8 text-sm font-medium">

            <span className="border-b-2 border-green-400 pb-1">
              My debit cards
            </span>

            <span className="opacity-60">
              All company cards
            </span>

          </div>

          {/* Card */}

          <div className="mt-8">
            <DebitCard />
          </div>

        </div>

        {/* Pull-up sheet */}

        <div className="bg-white rounded-t-3xl -mt-24 pt-6 pb-24 px-6 shadow-xl">

          <CardActions />

          <div className="mt-6">
            <CardInfoPanel />
          </div>

        </div>

        <MobileNavbar />

      </div>

    </div>
  );
};

export default Dashboard;
