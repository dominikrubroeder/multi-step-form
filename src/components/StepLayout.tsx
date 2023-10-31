import { useOrder } from "@/context/order-context";
import { steps } from "@/data";

export default function StepLayout() {
  const { order, previousStep, evaluateNextStep } = useOrder();

  const isSummaryPage = order.step === steps.length - 1;
  const isConfirmPage = order.step === steps.length;

  return (
    <div className="min-h-screen relative flex flex-col justify-between px-4 md:px-0 lg:min-h-0 lg:pt-8 lg:pb-4 lg:px-16">
      <div className="grid gap-8 bg-white rounded-2xl mx-auto max-w-md w-full px-4 py-6 -translate-y-[5rem] md:max-w-xl lg:max-w-none lg:-translate-y-0">
        <header className="grid gap-2">
          <h2 className="text-8 font-bold text-app-marine-blue">
            {steps[order.step - 1].headline}
          </h2>
          <p className="text-app-cool-gray">{steps[order.step - 1].subline}</p>
        </header>

        {steps[order.step - 1].content}
      </div>

      {!isConfirmPage && (
        <footer className="sticky bottom-4 px-4 py-2 bg-white outline outline-[1rem] outline-white lg:outline-none">
          <div className="flex items-center justify-between max-w-md w-full mx-auto md:max-w-xl lg:max-w-none">
            <button
              className={`text-app-cool-gray transition hover:text-app-marine-blue ${
                order.step === 1 ? "opacity-0 invisible" : "opacity-1 visible"
              }`}
              onClick={() => previousStep()}
            >
              Go back
            </button>
            <button
              className={`text-white px-5 py-2.5 rounded-md transition ${
                isSummaryPage
                  ? "bg-app-purplish-blue hover:bg-app-purplish-blue"
                  : "bg-app-marine-blue hover:bg-app-marine-blue-light"
              }`}
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
