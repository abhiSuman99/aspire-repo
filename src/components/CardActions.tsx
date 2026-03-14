import React from "react";

const actions = [
  "Freeze card",
  "Set spend limit",
  "Add to GPay",
  "Replace card",
  "Cancel card"
];

const CardActions: React.FC = () => {
  return (
    <div className="flex justify-between bg-gray-100 p-6 rounded-xl mt-6 text-center text-sm">

      {actions.map((a) => (
        <div key={a} className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <span className="text-gray-600">{a}</span>
        </div>
      ))}

    </div>
  );
};

export default CardActions;