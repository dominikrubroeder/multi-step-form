import SidebarBackground from "@/components/svg/SidebarBackground";
import { useOrder } from "@/context/order-context";
import { steps } from "@/data";

export default function Sidebar() {
  const { order, dispatch, evaluateNextStep } = useOrder();

  return (
    <div className="relative grid items-start content-start gap-8">
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 p-8 md:left-auto md:-translate-x-0 md:grid md:items-start md:content-start">
        {steps.map((step, index) => (
          <div
            key={index + 1}
            className={`flex gap-3.5 text-white cursor-pointer ${
              index + 1 === steps.length ? "opacity-0 invisible" : ""
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
            <div className="hidden md:grid">
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

      <div className="h-44 overflow-hidden md:h-auto md:overflow-visible">
        <SidebarBackground />
      </div>
    </div>
  );
}
