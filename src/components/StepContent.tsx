import {ReactNode} from "react";

interface StepContentProps {
    children: ReactNode
}

export default function StepContent({children}: StepContentProps) {
    return <div className="animate-fadeUp">{children}</div>
}