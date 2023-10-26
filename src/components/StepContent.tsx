"use client";
import { ReactNode, useEffect } from "react";
import { useAnimate } from "framer-motion";

interface StepContentProps {
  children: ReactNode;
}

export default function StepContent({ children }: StepContentProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (children) {
      animate(
        scope.current,
        { opacity: [0, 1], y: [16, 0] },
        { ease: "easeOut", duration: 0.3 },
      );
    }
  }, [children, animate, scope]);

  return <div ref={scope}>{children}</div>;
}
