"use client";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";
import { OrderProvider } from "@/context/order-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="bg-sky-100 grid gap-4 w-full md:p-4 md:rounded-2xl md:bg-white md:grid-cols-[auto_1fr]">
        <OrderProvider>
          <Sidebar />
          <StepLayout />
        </OrderProvider>
      </div>
    </main>
  );
}
