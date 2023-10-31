"use client";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";
import { OrderProvider } from "@/context/order-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <h1>Multi step form</h1>
      <div className="-mt-6 bg-app-alabaster grid gap-4 w-full lg:p-4 lg:rounded-2xl lg:bg-white lg:grid-cols-[auto_1fr] lg:max-w-4xl">
        <OrderProvider>
          <Sidebar />
          <StepLayout />
        </OrderProvider>
      </div>
      <footer className="text-app-cool-gray my-8 text-center text-xs dark:text-white">
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
