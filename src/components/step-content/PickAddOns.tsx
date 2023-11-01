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
          className={`flex cursor-pointer items-center justify-center gap-4 rounded-lg border p-4 transition ${
            addOnIsSelected(addOn)
              ? "border-blue-900 bg-sky-50"
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
            <h3 className="font-semibold text-blue-900">{addOn.title}</h3>
            <p className="text-gray-400">{addOn.subline}</p>
          </div>
          <div className="text-sm text-blue-900">+${getAddOnPrice(addOn)}</div>
        </div>
      ))}
    </div>
  );
}
