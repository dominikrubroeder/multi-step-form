"use client";
import { JSX, useState } from "react";
import IconArcade from "@/components/svg/IconArcade";
import IconAdvanced from "@/components/svg/IconAdvanced";
import IconPro from "@/components/svg/IconPro";

type BillingPlanTitle = "Arcade" | "Advanced" | "Pro";
type BillingPeriod = "Monthly" | "Yearly";

interface BillingPlan {
  title: BillingPlanTitle;
  icon: JSX.Element;
  monthlyPayment: number;
  yearlyPayment: number;
  yearlyHint: string;
}

const billingPlans: BillingPlan[] = [
  {
    title: "Arcade",
    icon: <IconArcade />,
    monthlyPayment: 9,
    yearlyPayment: 90,
    yearlyHint: "2 month free",
  },
  {
    title: "Advanced",
    icon: <IconAdvanced />,
    monthlyPayment: 12,
    yearlyPayment: 120,
    yearlyHint: "2 month free",
  },
  {
    title: "Pro",
    icon: <IconPro />,
    monthlyPayment: 15,
    yearlyPayment: 150,
    yearlyHint: "2 month free",
  },
];

export default function SelectYourPlan() {
  const [selectedPlan, setSelectedPlan] = useState<BillingPlanTitle>("Arcade");
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("Monthly");
  const toggleBillingPlan = () => {
    billingPeriod === "Monthly"
      ? setBillingPeriod("Yearly")
      : setBillingPeriod("Monthly");
  };
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        {billingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-1 border rounded-lg p-4 min-h-[10rem] transition cursor-pointer ${
              plan.title === selectedPlan ? "bg-sky-50" : "bg-transparent"
            }`}
            onClick={() => setSelectedPlan(plan.title)}
          >
            {plan.icon}
            <div>
              <h3 className="font-bold text-blue-900">{plan.title}</h3>
              <p>
                $
                {billingPeriod === "Monthly"
                  ? `${plan.monthlyPayment}/mo`
                  : `${plan.yearlyPayment}/yr`}
              </p>
              {billingPeriod === "Yearly" && (
                <p className="text-xs text-blue-900">{plan.yearlyHint}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 bg-sky-50 justify-center items-center p-4 rounded-lg">
        <div
          className="cursor-pointer"
          onClick={() => setBillingPeriod("Monthly")}
        >
          Monthly
        </div>
        <div
          className="relative w-10 h-5 rounded-full bg-sky-900 cursor-pointer"
          onClick={() => toggleBillingPlan()}
        >
          <span
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white block rounded-full transition-all ${
              billingPeriod === "Monthly" ? "left-1" : "right-1"
            }`}
          ></span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setBillingPeriod("Yearly")}
        >
          Yearly
        </div>
      </div>
    </div>
  );
}
