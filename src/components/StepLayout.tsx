import {steps} from "@/components/Sidebar";

interface StepLayoutProps {
    step: number;
    nextStep: () => void;
    previousStep: () => void;
}

export default function StepLayout({step, nextStep, previousStep}: StepLayoutProps) {

    return <div className="flex flex-col justify-between px-16 pt-8 pb-4">
        <div className="grid gap-8">
            <header className="grid gap-2">
                <h2 className="text-3xl font-bold text-blue-900">{steps[step - 1].headline}</h2>
                <p className="text-gray-400">{steps[step - 1].headline}</p>
            </header>

            {steps[step - 1].content}
        </div>

        <footer className="flex items-center justify-between">
            <button
                className={`text-gray-400 transition ${step === 1 ? 'opacity-0 invisible' : 'opacity-1 visible'}`}
                onClick={previousStep}>Go
                back
            </button>
            <button className="bg-blue-900 text-white px-5 py-2.5 rounded-md" onClick={nextStep}>Next Step</button>
        </footer>
    </div>
}