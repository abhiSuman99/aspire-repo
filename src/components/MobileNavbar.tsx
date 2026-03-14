import React from "react";

const MobileNavbar: React.FC = () => {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 text-sm lg:hidden">

      <div className="text-gray-400">Home</div>
      <div className="text-green-500 font-semibold">Cards</div>
      <div className="text-gray-400">Payments</div>
      <div className="text-gray-400">Credit</div>
      <div className="text-gray-400">Profile</div>

    </div>
  );
};

export default MobileNavbar;