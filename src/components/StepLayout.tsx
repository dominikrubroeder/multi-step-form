import { steps } from "@/components/Sidebar";

interface StepLayoutProps {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
}

export default function StepLayout({
  step,
  nextStep,
  previousStep,
}: StepLayoutProps) {
  return (
    <div className="relative flex flex-col justify-between md:pt-8 md:pb-4 lg:px-16">
      <div className="grid gap-8 bg-white rounded-2xl mx-auto w-full px-4 py-6 -translate-y-[5rem] md:-translate-y-0">
        <header className="grid gap-2">
          <h2 className="text-3xl font-bold text-blue-900">
            {steps[step - 1].headline}
          </h2>
          <p className="text-gray-400">{steps[step - 1].subline}</p>
        </header>

        {steps[step - 1].content}
      </div>

      <footer className="p-4 bg-white">
        <div className="flex items-center justify-between max-w-md w-full mx-auto">
          <button
            className={`text-gray-400 transition ${
              step === 1 ? "opacity-0 invisible" : "opacity-1 visible"
            }`}
            onClick={previousStep}
          >
            Go back
          </button>
          <button
            className="bg-blue-900 text-white px-5 py-2.5 rounded-md"
            onClick={nextStep}
          >
            Next Step
          </button>
        </div>
      </footer>
    </div>
  );
}
