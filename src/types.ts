import { JSX, ReactNode } from "react";

export type UserFormField = "name" | "email" | "phoneNumber";
export type BillingPlanTitle = "Arcade" | "Advanced" | "Pro";
export type BillingPeriod = "Monthly" | "Yearly";

export interface UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Field {
  id: UserFormField;
  title: string;
  type: "text" | "email" | "number";
  placeholder: string;
  required: boolean;
}

export interface BillingPlan {
  title: BillingPlanTitle;
  icon: JSX.Element;
  monthlyPayment: number;
  yearlyPayment: number;
  yearlyHint: string;
}

export interface AddOn {
  title: string;
  subline: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface Step {
  stepTitle: string;
  headline: string;
  subline: string;
  content: ReactNode;
}
