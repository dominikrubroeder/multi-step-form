"use client";
import { useOrder } from "@/context/order-context";
import BillingPeriodSwitch from "@/components/BillingPeriodSwitch";
import { billingPlans } from "@/data";

export default function SelectYourPlan() {
  const { order, dispatch, getBillingPlanPrice } = useOrder();

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
              <p>${getBillingPlanPrice(billingPlan)}</p>
              {order.billingPeriod === "Yearly" && (
                <p className="text-xs text-blue-900">
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
