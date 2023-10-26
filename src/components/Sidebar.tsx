import { ReactNode } from "react";
import SidebarBackground from "@/components/svg/SidebarBackground";
import StepContent from "@/components/StepContent";

interface SidebarProps {
  currentStep: number;
  setStep: (to: number) => void;
}

interface Step {
  headline: string;
  content: ReactNode;
}

export const steps: Step[] = [
  {
    headline: "Your info",
    content: (
      <StepContent>
        <form className="grid gap-4">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-xs text-blue-900">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="e.g. Stephen King"
              className="px-3 py-1.5 rounded-md border"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="Email" className="text-xs text-blue-900">
              Email Address
            </label>
            <input
              name="Email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className="px-3 py-1.5 rounded-md border"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="phone" className="text-xs text-blue-900">
              Phone Number
            </label>
            <input
              name="phone"
              type="number"
              placeholder="e.g. +1 234 567 890"
              className="px-3 py-1.5 rounded-md border"
            />
          </div>
        </form>
      </StepContent>
    ),
  },
  {
    headline: "Select plan",
    content: <StepContent>Step content here</StepContent>,
  },
  {
    headline: "Add-ons",
    content: <StepContent>Step content here</StepContent>,
  },
  {
    headline: "Summary",
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
                {step.headline}
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
