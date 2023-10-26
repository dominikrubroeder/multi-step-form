"use client";

import { useState } from "react";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="bg-sky-100 grid gap-4 w-full md:p-4 md:rounded-2xl md:bg-white md:grid-cols-[auto_1fr]">
        <Sidebar currentStep={step} setStep={(to: number) => setStep(to)} />
        <StepLayout
          step={step}
          nextStep={() => setStep((prevState) => prevState + 1)}
          previousStep={() => setStep((prevState) => prevState - 1)}
        />
      </div>
    </main>
  );
}
