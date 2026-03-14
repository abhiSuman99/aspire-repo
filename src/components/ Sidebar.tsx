import React from "react";
import {
  HomeIcon,
  CreditCardIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

const menu = [
  { name: "Home", icon: HomeIcon },
  { name: "Cards", icon: CreditCardIcon },
  { name: "Payments", icon: ArrowPathIcon },
  { name: "Credit", icon: ArrowUpTrayIcon },
  { name: "Settings", icon: Cog6ToothIcon }
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-[#0C365A] text-white flex flex-col p-8">

      <h1 className="text-3xl font-bold text-green-400">aspire</h1>

      <p className="text-sm mt-6 text-gray-300">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>

      <div className="mt-16 space-y-10">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className={`flex items-center gap-4 cursor-pointer ${
                item.name === "Cards"
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-lg">{item.name}</span>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Sidebar;