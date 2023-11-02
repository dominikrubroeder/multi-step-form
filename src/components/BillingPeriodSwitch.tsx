import { useOrder } from "@/context/order-context";

export default function BillingPeriodSwitch() {
  const { order, dispatch } = useOrder();
  const monthlyBillingPeriod = order.billingPeriod === "Monthly";

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-app-alabaster p-4">
      <div
        className={`cursor-pointer transition ${
          monthlyBillingPeriod ? "text-app-marine-blue" : "text-app-cool-gray"
        }`}
        onClick={() =>
          dispatch({ type: "SET_BILLING_PERIOD", payload: "Monthly" })
        }
      >
        Monthly
      </div>
      <div
        className="relative h-5 w-10 cursor-pointer rounded-full bg-sky-900"
        onClick={() =>
          dispatch({ type: "TOGGLE_BILLING_PERIOD", payload: null })
        }
      >
        <span
          className={`absolute top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all ${
            monthlyBillingPeriod ? "left-1" : "right-1"
          }`}
        ></span>
      </div>
      <div
        className={`cursor-pointer transition ${
          monthlyBillingPeriod ? "text-app-cool-gray" : "text-app-marine-blue"
        }`}
        onClick={() =>
          dispatch({ type: "SET_BILLING_PERIOD", payload: "Yearly" })
        }
      >
        Yearly
      </div>
    </div>
  );
}
