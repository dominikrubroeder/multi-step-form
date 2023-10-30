import { useOrder } from "@/context/order-context";
import { steps } from "@/data";

export default function StepLayout() {
  const { order, previousStep, evaluateNextStep } = useOrder();

  const isSummaryPage = order.step === steps.length - 1;
  const isConfirmPage = order.step === steps.length;

  return (
    <div className="min-h-screen relative flex flex-col justify-between lg:min-h-0 lg:pt-8 lg:pb-4 lg:px-16">
      <div className="grid gap-8 bg-white rounded-2xl mx-auto w-full max-w-md px-4 py-6 -translate-y-[5rem] lg:-translate-y-0 lg:max-w-none">
        <header className="grid gap-2">
          <h2 className="text-3xl font-bold text-blue-900">
            {steps[order.step - 1].headline}
          </h2>
          <p className="text-gray-400">{steps[order.step - 1].subline}</p>
        </header>

        {steps[order.step - 1].content}
      </div>

      {!isConfirmPage && (
        <footer className="sticky bottom-0 p-4 bg-white">
          <div className="flex items-center justify-between max-w-md w-full mx-auto lg:max-w-none">
            <button
              className={`text-gray-400 transition ${
                order.step === 1 ? "opacity-0 invisible" : "opacity-1 visible"
              }`}
              onClick={() => previousStep()}
            >
              Go back
            </button>
            <button
              className="bg-blue-900 text-white px-5 py-2.5 rounded-md"
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
