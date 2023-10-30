import { useOrder } from "@/context/order-context";

export default function Summary() {
  const { order, dispatch, getBillingPlanPrice, getAddOnPrice } = useOrder();
  return (
    <div>
      <div className="grid gap-6 bg-sky-50 p-6 rounded-lg">
        <header>
          <div className="flex justify-between gap-4 items-center">
            <h3 className="font-bold text-blue-900">
              {order.billingPlan.title}
            </h3>
            <p className="font-bold">
              +${getBillingPlanPrice(order.billingPlan)}
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
            {order.addOns.map((addOn, index) => (
              <div
                key={index}
                className="flex justify-between gap-4 items-center"
              >
                <h3 className="text-gray-400">{addOn.title}</h3>
                <p>+${getAddOnPrice(addOn)}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <footer className="flex justify-between gap-4 items-center p-6">
        <h3 className="text-gray-400">
          Total (per {order.billingPeriod === "Monthly" ? "month" : "year"})
        </h3>
        <p className="font-bold text-violet-700 text-xl">+${order.total}/yr</p>
      </footer>
    </div>
  );
}
