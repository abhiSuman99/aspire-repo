import React from "react";

const menu = ["Home", "Cards", "Payments", "Credit", "Settings"];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-[#0C365A] text-white flex flex-col p-6">
      <h1 className="text-3xl font-bold text-green-400">aspire</h1>

      <p className="text-sm mt-4 text-gray-300">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>

      <div className="mt-12 space-y-6">
        {menu.map((item) => (
          <div
            key={item}
            className={`cursor-pointer ${
              item === "Cards" ? "text-green-400" : "text-gray-300"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;