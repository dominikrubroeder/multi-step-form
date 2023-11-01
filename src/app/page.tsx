"use client";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";
import { OrderProvider } from "@/context/order-context";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="grid w-full gap-4 bg-sky-100 lg:max-w-4xl lg:grid-cols-[auto_1fr] lg:rounded-2xl lg:bg-white lg:p-4">
        <OrderProvider>
          <Sidebar />
          <StepLayout />
        </OrderProvider>
      </div>
    </main>
  );
}
