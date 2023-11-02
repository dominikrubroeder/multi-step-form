"use client";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";
import { OrderProvider } from "@/context/order-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <h1>Multi step form</h1>
      <div className="-mt-6 grid w-full gap-4 bg-app-alabaster lg:max-w-4xl lg:grid-cols-[auto_1fr] lg:rounded-2xl lg:bg-white lg:p-4">
        <OrderProvider>
          <Sidebar />
          <StepLayout />
        </OrderProvider>
      </div>
      <footer className="my-8 text-center text-xs text-app-cool-gray dark:text-white">
        Frontend challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ"
          target="_blank"
          rel="noreferrer"
        >
          frontendmentor.io
        </a>
        , developed by&nbsp;
        <a
          href="https://github.com/dominikrubroeder"
          target="_blank"
          rel="noreferrer"
        >
          Dominik Rubröder
        </a>
      </footer>
    </main>
  );
}
