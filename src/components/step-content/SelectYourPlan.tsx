"use client";
import { JSX } from "react";
import { billingPlans, useOrder } from "@/context/order-context";

export type BillingPlanTitle = "Arcade" | "Advanced" | "Pro";
export type BillingPeriod = "Monthly" | "Yearly";

export interface BillingPlan {
  title: BillingPlanTitle;
  icon: JSX.Element;
  monthlyPayment: number;
  yearlyPayment: number;
  yearlyHint: string;
}

export default function SelectYourPlan() {
  const { order, dispatch } = useOrder();

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        {billingPlans.map((billingPlan, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-1 border rounded-lg p-4 min-h-[10rem] transition cursor-pointer ${
              billingPlan.title === order.billingPlan.title
                ? "bg-sky-50 border-blue-900"
                : "bg-transparent border-gray-200"
            }`}
            onClick={() =>
              dispatch({ type: "SET_BILLING_PLAN", payload: billingPlan })
            }
          >
            {billingPlan.icon}
            <div>
              <h3 className="font-bold text-blue-900">{billingPlan.title}</h3>
              <p>
                $
                {order.billingPeriod === "Monthly"
                  ? `${billingPlan.monthlyPayment}/mo`
                  : `${billingPlan.yearlyPayment}/yr`}
              </p>
              {order.billingPeriod === "Yearly" && (
                <p className="text-xs text-blue-900">
                  {billingPlan.yearlyHint}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 bg-sky-50 justify-center items-center p-4 rounded-lg">
        <div
          className="cursor-pointer"
          onClick={() =>
            dispatch({ type: "SET_BILLING_PERIOD", payload: "Monthly" })
          }
        >
          Monthly
        </div>
        <div
          className="relative w-10 h-5 rounded-full bg-sky-900 cursor-pointer"
          onClick={() =>
            dispatch({ type: "TOGGLE_BILLING_PERIOD", payload: null })
          }
        >
          <span
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white block rounded-full transition-all ${
              order.billingPeriod === "Monthly" ? "left-1" : "right-1"
            }`}
          ></span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() =>
            dispatch({ type: "SET_BILLING_PERIOD", payload: "Yearly" })
          }
        >
          Yearly
        </div>
      </div>
    </div>
  );
}
