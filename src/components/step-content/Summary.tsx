import { useOrder } from "@/context/order-context";

export default function Summary() {
  const { order, dispatch, getBillingPlanPrice, getAddOnPrice } = useOrder();
  return (
    <div>
      <div className="grid gap-5 bg-app-alabaster p-6 rounded-lg">
        <header>
          <div className="flex justify-between gap-4 items-center">
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
                  className="flex justify-between gap-4 items-center"
                >
                  <h2 className="text-app-cool-gray">{addOn.title}</h2>
                  <p>+${getAddOnPrice(addOn)}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <footer className="flex justify-between gap-4 items-center p-6">
        <h2 className="text-app-cool-gray">
          Total (per {order.billingPeriod === "Monthly" ? "month" : "year"})
        </h2>
        <p className="font-bold text-violet-700 text-xl">+${order.total}/yr</p>
      </footer>
    </div>
  );
}
