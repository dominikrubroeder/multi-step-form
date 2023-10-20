'use client'

import {useState} from "react";

import StepLayout from "@/components/StepLayout";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    const [step, setStep] = useState(1)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="bg-white p-4 grid grid-cols-[auto_1fr] gap-4 rounded-2xl">
                <Sidebar setStep={(to: number) => setStep(to)}/>
                <StepLayout step={step}
                            nextStep={() => setStep(prevState => prevState + 1)}
                            previousStep={() => setStep(prevState => prevState - 1)}/>
            </div>
        </main>
    )
}
