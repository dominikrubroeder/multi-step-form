import { ReactNode } from "react";
import SidebarBackground from "@/components/svg/SidebarBackground";
import StepContent from "@/components/StepContent";
import YourInfo from "@/components/step-content/YourInfo";
import SelectYourPlan from "@/components/step-content/SelectYourPlan";
import PickAddOns from "@/components/step-content/PickAddOns";

interface SidebarProps {
  currentStep: number;
  setStep: (to: number) => void;
}

interface Step {
  stepTitle: string;
  headline: string;
  subline: string;
  content: ReactNode;
}

export const steps: Step[] = [
  {
    stepTitle: "Your info",
    headline: "Personal info",
    subline: "Please provide your name, email address, and phone number.",
    content: (
      <StepContent>
        <YourInfo />
      </StepContent>
    ),
  },
  {
    stepTitle: "Select plan",
    headline: "Select your plan",
    subline: "You have the option of monthly or yearly billing.",
    content: (
      <StepContent>
        <SelectYourPlan />
      </StepContent>
    ),
  },
  {
    stepTitle: "Add-ons",
    headline: "Pick add-ons",
    subline: "Add-ons help enhance your gaming experience.",
    content: (
      <StepContent>
        <PickAddOns />
      </StepContent>
    ),
  },
  {
    stepTitle: "Summary",
    headline: "Finishing up",
    subline: "Double-check everything looks OK before confirming.",
    content: <StepContent>Step content here</StepContent>,
  },
];

export default function Sidebar({ currentStep, setStep }: SidebarProps) {
  return (
    <div className="relative grid items-start content-start gap-8">
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 p-8 md:left-auto md:-translate-x-0 md:grid md:items-start md:content-start">
        {steps.map((step, index) => (
          <div
            key={index + 1}
            className="flex gap-3.5 text-white cursor-pointer"
            onClick={() => setStep(index + 1)}
          >
            <div
              className={`flex items-center justify-center rounded-full w-8 h-8 border border-sky-200 text-xs font-semibold transition ${
                index + 1 === currentStep
                  ? "text-blue-900 bg-sky-200"
                  : "text-white bg-transparent"
              }`}
            >
              {index + 1}
            </div>
            <div className="hidden md:grid">
              <small className="uppercase leading-normal text-xs">
                Step {index + 1}
              </small>
              <h3 className="uppercase font-bold text-xs tracking-widest leading-normal">
                {step.stepTitle}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="h-44 overflow-hidden md:h-auto md:overflow-visible">
        <SidebarBackground />
      </div>
    </div>
  );
}
