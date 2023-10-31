"use client";
import { useOrder } from "@/context/order-context";
import { addOns } from "@/data";

export default function PickAddOns() {
  const { dispatch, addOnIsSelected, getAddOnPrice } = useOrder();

  return (
    <div className="grid gap-4">
      {addOns.map((addOn, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
            addOnIsSelected(addOn)
              ? "border-app-purplish-blue bg-app-alabaster"
              : "border-gray-200 bg-transparent"
          }`}
          onClick={() => dispatch({ type: "TOGGLE_ADDON", payload: addOn })}
        >
          <input
            type="checkbox"
            checked={addOnIsSelected(addOn)}
            onChange={() => {}}
          />
          <div className="flex-1">
            <h3 className="text-app-marine-blue font-semibold">
              {addOn.title}
            </h3>
            <p className="text-app-cool-gray">{addOn.subline}</p>
          </div>
          <div className="text-sm text-app-purplish-blue">
            +${getAddOnPrice(addOn)}
          </div>
        </div>
      ))}
    </div>
  );
}
