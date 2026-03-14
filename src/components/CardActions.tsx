import React from "react";
import {
  // SnowflakeIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

const actions = [
  { name: "Freeze card", icon: AdjustmentsHorizontalIcon },
  { name: "Set spend limit", icon: AdjustmentsHorizontalIcon },
  { name: "Add to GPay", icon: ArrowPathIcon },
  { name: "Replace card", icon: ArrowPathIcon },
  { name: "Cancel card", icon: TrashIcon }
];

const CardActions: React.FC = () => {

  return (
    <div className="flex justify-between bg-[#EDF3FF] p-6 rounded-2xl shadow-sm">

      {actions.map((a) => {
        const Icon = a.icon;

        return (
          <div
            key={a.name}
            className="flex flex-col items-center gap-2 w-20"
          >

            <div className="bg-blue-600 p-3 rounded-full text-white">
              <Icon className="w-5 h-5" />
            </div>

            <span className="text-sm text-gray-600 text-center">
              {a.name}
            </span>

          </div>
        );
      })}

    </div>
  );
};

export default CardActions;