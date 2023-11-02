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
            className={`flex flex-col justify-between gap-1 border rounded-lg p-4 transition cursor-pointer lg:min-h-[10rem] ${
              billingPlan.title === order.billingPlan.title
                ? "bg-app-alabaster border-app-purplish-blue"
                : "bg-transparent border-gray-200"
            }`}
            onClick={() =>
              dispatch({ type: "SET_BILLING_PLAN", payload: billingPlan })
            }
          >
            {billingPlan.icon}
            <div>
              <h2 className="font-bold text-app-marine-blue mb-0.5">
                {billingPlan.title}
              </h2>
              <p className="text-app-cool-gray text-sm">
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
