import React from "react";
import {
  // SnowflakeIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

const actions = [
  { key: "freeze", name: "Freeze card", icon: AdjustmentsHorizontalIcon },
  { key: "limit", name: "Set spend limit", icon: AdjustmentsHorizontalIcon },
  { key: "gpay", name: "Add to GPay", icon: ArrowPathIcon },
  { key: "replace", name: "Replace card", icon: ArrowPathIcon },
  { key: "cancel", name: "Cancel card", icon: TrashIcon }
];

type Props = {
  isFrozen: boolean;
  onToggleFreeze: () => void;
};

const CardActions: React.FC<Props> = ({ isFrozen, onToggleFreeze }) => {

  return (
    <div className="flex justify-between bg-[#EDF3FF] p-6 rounded-2xl shadow-sm">

      {actions.map((a) => {
        const Icon = a.icon;

        return (
          <div
            key={a.key}
            className="flex flex-col items-center gap-2 w-20"
          >

            {a.key === "freeze" ? (
              <button
                onClick={onToggleFreeze}
                className="flex flex-col items-center gap-2 focus:outline-none"
              >
                <div className={`p-3 rounded-full text-white ${isFrozen ? "bg-gray-500" : "bg-blue-600"}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-sm text-gray-600 text-center">
                  {isFrozen ? "Unfreeze card" : "Freeze card"}
                </span>
              </button>
            ) : (
              <>
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="text-sm text-gray-600 text-center">
                  {a.name}
                </span>
              </>
            )}

          </div>
        );
      })}

    </div>
  );
};

export default CardActions;