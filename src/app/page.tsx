"use client";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";
import { OrderProvider } from "@/context/order-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="bg-sky-100 grid gap-4 w-full lg:p-4 lg:rounded-2xl lg:bg-white lg:grid-cols-[auto_1fr] lg:max-w-4xl">
        <OrderProvider>
          <Sidebar />
          <StepLayout />
        </OrderProvider>
      </div>
    </main>
  );
}
