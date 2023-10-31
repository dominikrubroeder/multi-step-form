import SidebarBackgroundDesktop from "@/components/svg/SidebarBackgroundDesktop";
import { useOrder } from "@/context/order-context";
import { steps } from "@/data";
import SidebarBackgroundMobile from "@/components/svg/SidebarBackgroundMobile";

export default function Sidebar() {
  const { order, evaluateNextStep } = useOrder();

  return (
    <div className="relative grid items-start content-start gap-8">
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 p-8 lg:gap-8 lg:left-auto lg:-translate-x-0 lg:grid lg:items-start lg:content-start">
        {steps.map((step, index) => (
          <div
            key={index + 1}
            className={`flex gap-3.5 text-white cursor-pointer ${
              index + 1 === steps.length ? "opacity-0 invisible hidden" : ""
            }`}
            onClick={() => evaluateNextStep(index + 1)}
          >
            <div
              className={`flex items-center justify-center rounded-full w-8 h-8 border border-sky-200 text-xs font-semibold transition ${
                index + 1 === order.step
                  ? "text-blue-900 bg-sky-200"
                  : "text-white bg-transparent"
              }`}
            >
              {index + 1}
            </div>
            <div className="hidden lg:grid">
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

      <div className="hidden lg:block">
        <SidebarBackgroundDesktop />
      </div>

      <div className="h-44 w-full overflow-hidden lg:hidden">
        <SidebarBackgroundMobile />
      </div>
    </div>
  );
}
