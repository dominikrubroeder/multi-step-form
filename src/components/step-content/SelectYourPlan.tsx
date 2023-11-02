"use client";
import { useOrder } from "@/context/order-context";
import BillingPeriodSwitch from "@/components/BillingPeriodSwitch";
import { billingPlans } from "@/data";

export default function SelectYourPlan() {
  const { order, dispatch, getBillingPlanPrice } = useOrder();

  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-3">
        {billingPlans.map((billingPlan, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col justify-between gap-1 rounded-lg border p-4 transition lg:min-h-[10rem] ${
              billingPlan.title === order.billingPlan.title
                ? "border-app-purplish-blue bg-app-alabaster"
                : "border-gray-200 bg-transparent"
            }`}
            onClick={() =>
              dispatch({ type: "SET_BILLING_PLAN", payload: billingPlan })
            }
          >
            {billingPlan.icon}
            <div>
              <h2 className="mb-0.5 font-bold text-app-marine-blue">
                {billingPlan.title}
              </h2>
              <p className="text-sm text-app-cool-gray">
                ${getBillingPlanPrice(billingPlan)}
              </p>
              {order.billingPeriod === "Yearly" && (
                <p className="text-xs text-app-marine-blue">
                  {billingPlan.yearlyHint}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <BillingPeriodSwitch />
    </div>
  );
}
