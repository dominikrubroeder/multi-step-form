import IconThankYou from "@/components/svg/IconThankYou";
import { useOrder } from "@/context/order-context";

export default function Confirm() {
  const { dispatch } = useOrder();
  return (
    <div className="grid gap-8 justify-center items-center h-full">
      <div className="mx-auto">
        <IconThankYou />
      </div>
      <div className="grid gap-4">
        <h3 className="mx-auto text-3xl font-bold text-app-marine-blue">
          Thank you!
        </h3>
        <p className="text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
          <br />
          <button
            className="mt-2 underline"
            onClick={() => dispatch({ type: "RESET_STATE" })}
          >
            Continue
          </button>
        </p>
      </div>
    </div>
  );
}
