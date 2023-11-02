import { useOrder } from "@/context/order-context";

export default function Summary() {
  const { order, dispatch, getBillingPlanPrice, getAddOnPrice } = useOrder();
  return (
    <div>
      <div className="grid gap-5 rounded-lg bg-app-alabaster p-6">
        <header>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-bold text-app-marine-blue">
              {order.billingPlan.title} ({order.billingPeriod})
            </h2>
            <p className="font-bold">
              ${getBillingPlanPrice(order.billingPlan)}
            </p>
          </div>
          <button
            className="underline"
            onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
          >
            Change
          </button>
        </header>
        {order.addOns.length > 0 && (
          <>
            <hr />
            <div className="grid gap-4">
              {order.addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <h2 className="text-app-cool-gray">{addOn.title}</h2>
                  <p>+${getAddOnPrice(addOn)}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <footer className="flex items-center justify-between gap-4 p-6">
        <h2 className="text-app-cool-gray">
          Total (per {order.billingPeriod === "Monthly" ? "month" : "year"})
        </h2>
        <p className="text-xl font-bold text-violet-700">+${order.total}/yr</p>
      </footer>
    </div>
  );
}
