import { useOrder } from "@/context/order-context";

export default function BillingPeriodSwitch() {
  const { order, dispatch } = useOrder();
  const monthlyBillingPeriod = order.billingPeriod === "Monthly";

  return (
    <div className="flex gap-2 bg-app-alabaster justify-center items-center p-4 rounded-lg">
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
        className="relative w-10 h-5 rounded-full bg-sky-900 cursor-pointer"
        onClick={() =>
          dispatch({ type: "TOGGLE_BILLING_PERIOD", payload: null })
        }
      >
        <span
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white block rounded-full transition-all ${
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
