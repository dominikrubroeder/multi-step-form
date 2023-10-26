"use client";
import { useState } from "react";

interface AddOn {
  title: string;
  subline: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const addOns: AddOn[] = [
  {
    title: "Online Service",
    subline: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    title: "Larger Storage",
    subline: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    title: "Customizable profile",
    subline: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export default function PickAddOns() {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const isSelected = (addOn: AddOn) =>
    !!selectedAddOns.find(
      (selectedAddon) => addOn.title === selectedAddon.title,
    );

  const addAddOn = (addOn: AddOn) => {
    setSelectedAddOns((prevState) => [...prevState, addOn]);
  };
  const removeAddOn = (addOn: AddOn) => {
    setSelectedAddOns((prevState) => [
      ...prevState.filter(
        (selectedAddOn) => selectedAddOn.title !== addOn.title,
      ),
    ]);
  };

  const toggleAddOn = (addOn: AddOn) => {
    isSelected(addOn) ? removeAddOn(addOn) : addAddOn(addOn);
  };

  return (
    <div className="grid gap-4">
      {addOns.map((addOn, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
            isSelected(addOn)
              ? "border-blue-900 bg-sky-50"
              : "border-gray-200 bg-transparent"
          }`}
          onClick={() => toggleAddOn(addOn)}
        >
          <input type="checkbox" checked={isSelected(addOn)} />
          <div className="flex-1">
            <h3 className="font-semibold text-blue-900">{addOn.title}</h3>
            <p className="text-gray-400">{addOn.subline}</p>
          </div>
          <div className="text-sm text-blue-900">+${addOn.monthlyPrice}/mo</div>
        </div>
      ))}
    </div>
  );
}
