import { useOrder } from "@/context/order-context";
import { steps } from "@/data";

export default function StepLayout() {
  const { order, previousStep, evaluateNextStep } = useOrder();

  const isSummaryPage = order.step === steps.length - 1;
  const isConfirmPage = order.step === steps.length;

  return (
    <div className="relative flex min-h-screen flex-col justify-between px-4 md:px-0 lg:min-h-0 lg:px-16 lg:pb-4 lg:pt-8">
      <div className="mx-auto grid w-full max-w-md -translate-y-[5rem] gap-8 rounded-2xl bg-white px-4 py-6 md:max-w-xl lg:max-w-none lg:-translate-y-0">
        <header className="grid gap-2">
          <h2 className="text-8 font-bold text-blue-900">
            {steps[order.step - 1].headline}
          </h2>
          <p className="text-gray-400">{steps[order.step - 1].subline}</p>
        </header>

        {steps[order.step - 1].content}
      </div>

      {!isConfirmPage && (
        <footer className="sticky bottom-4 bg-white px-4 py-2 outline outline-[1rem] outline-white lg:outline-none">
          <div className="mx-auto flex w-full max-w-md items-center justify-between md:max-w-xl lg:max-w-none">
            <button
              className={`text-gray-400 transition ${
                order.step === 1 ? "invisible opacity-0" : "opacity-1 visible"
              }`}
              onClick={() => previousStep()}
            >
              Go back
            </button>
            <button
              className="rounded-md bg-blue-900 px-5 py-2.5 text-white"
              onClick={() => evaluateNextStep()}
            >
              {isSummaryPage ? "Confirm" : "Next Step"}
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
