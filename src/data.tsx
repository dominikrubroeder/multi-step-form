import IconArcade from "@/components/svg/IconArcade";
import IconAdvanced from "@/components/svg/IconAdvanced";
import IconPro from "@/components/svg/IconPro";
import React from "react";

import { AddOn, BillingPlan, Field, Step } from "@/types";
import StepContent from "@/components/StepContent";
import YourInfo from "@/components/step-content/YourInfo";
import SelectYourPlan from "@/components/step-content/SelectYourPlan";
import PickAddOns from "@/components/step-content/PickAddOns";
import Summary from "@/components/step-content/Summary";
import Confirm from "@/components/step-content/Confirm";

export const billingPlans: BillingPlan[] = [
  {
    title: "Arcade",
    icon: <IconArcade />,
    monthlyPayment: 9,
    yearlyPayment: 90,
    yearlyHint: "2 month free",
  },
  {
    title: "Advanced",
    icon: <IconAdvanced />,
    monthlyPayment: 12,
    yearlyPayment: 120,
    yearlyHint: "2 month free",
  },
  {
    title: "Pro",
    icon: <IconPro />,
    monthlyPayment: 15,
    yearlyPayment: 150,
    yearlyHint: "2 month free",
  },
];
export const userInfoFields: Field[] = [
  {
    id: "name",
    title: "Name",
    type: "text",
    placeholder: "e.g. Stephen King",
    required: true,
  },
  {
    id: "email",
    title: "Email Address",
    type: "email",
    placeholder: "e.g. stephenking@lorem.com",
    required: true,
  },
  {
    id: "phoneNumber",
    title: "Phone Number",
    type: "number",
    placeholder: "e.g. Stephen King",
    required: true,
  },
];
export const addOns: AddOn[] = [
  {
    title: "Online Service",
    subline: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    title: "Larger Storage",
    subline: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    title: "Customizable profile",
    subline: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
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
    content: (
      <StepContent>
        <Summary />
      </StepContent>
    ),
  },
  {
    stepTitle: "",
    headline: "",
    subline: "",
    content: (
      <StepContent>
        <Confirm />
      </StepContent>
    ),
  },
];
