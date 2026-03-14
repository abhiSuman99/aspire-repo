
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

      {/* ---------------- Desktop Layout ---------------- */}

      <div className="hidden lg:flex w-full">

        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 px-12 py-10">

          <BalanceHeader />

          <div className="mt-10 flex w-full gap-12">

            {/* Left Section (card + actions) */}
            <div className="flex flex-col flex-1 gap-6 max-w-[700px]">

              <h2 className="font-semibold text-lg">My debit cards</h2>

              <DebitCard />

              <CardActions />

            </div>

            {/* Right Section */}
            <div className="w-[420px]">
              <CardInfoPanel />
            </div>

          </div>

        </div>

      </div>

      {/* ---------------- Mobile Layout ---------------- */}

      <div className="lg:hidden">

        <div className="bg-[#0C365A] text-white p-6 pb-24">

          <div className="flex justify-between items-center">
            <h2 className="text-lg">Account balance</h2>
            <button className="text-green-400 font-medium">
              + New card
            </button>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-green-500 px-2 py-1 rounded text-sm">
              S$
            </span>
            <span className="text-3xl font-bold">3,000</span>
          </div>

          <div className="flex gap-6 mt-6 text-sm">
            <span className="border-b-2 border-green-400 pb-1">
              My debit cards
            </span>
            <span className="opacity-60">
              All company cards
            </span>
          </div>

          <div className="mt-6">
            <DebitCard />
          </div>

        </div>

        <div className="bg-white -mt-16 rounded-t-3xl p-6">

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
