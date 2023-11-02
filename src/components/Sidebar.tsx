import SidebarBackgroundDesktop from "@/components/svg/SidebarBackgroundDesktop";
import { useOrder } from "@/context/order-context";
import { steps } from "@/data";
import SidebarBackgroundMobile from "@/components/svg/SidebarBackgroundMobile";

export default function Sidebar() {
  const { order, evaluateNextStep } = useOrder();

  return (
    <div className="relative grid content-start items-start gap-8">
      <div className="absolute left-1/2 flex -translate-x-1/2 gap-4 p-8 lg:left-auto lg:grid lg:-translate-x-0 lg:content-start lg:items-start lg:gap-8">
        {steps.map((step, index) => {
          if (steps.length === index + 1) return;
          return (
            <div
              key={index + 1}
              className="flex cursor-pointer gap-3.5 text-white"
              onClick={() => evaluateNextStep(index + 1)}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 text-xs font-semibold transition ${
                  index + 1 === order.step
                    ? "bg-sky-200 text-app-marine-blue"
                    : "bg-transparent text-white"
                }`}
              >
                {index + 1}
              </div>
              <div className="hidden lg:grid">
                <small className="text-xs uppercase leading-normal">
                  Step {index + 1}
                </small>
                <h2 className="text-xs font-bold uppercase leading-normal tracking-widest">
                  {step.stepTitle}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block">
        <SidebarBackgroundDesktop />
      </div>

      <div className="h-44 w-full overflow-hidden lg:hidden">
        <SidebarBackgroundMobile />
      </div>
    </div>
  );
}
