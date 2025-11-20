import SectionTitle from "../components/section-title";
import { ExternalLinkIcon } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Choose a template",
        image: "/assets/templates.jpg",
    },
    {
        id: 2,
        title: "Enter your details",
        image: "/assets/form.jpg",
    },
    {
        id: 3,
        title: "Download your resume",
        image: "/assets/download.jpg",
    },
];

export default function WorkflowSteps() {
    return (
        <section className="mt-32 relative">
            <SectionTitle
                title="Build Your Resume In Three Simple Steps"
            />

            <div className="relative space-y-20 md:space-y-30 mt-20">
                <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        01
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        02
                    </p>
                    <div className="h-72 w-0.5 bg-gradient-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        03
                    </p>
                </div>
                {steps.map((step, index) => (
                    <div key={index} className={`flex items-center justify-center gap-6 md:gap-20 ${index % 2 !== 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
                        <img src={step.image} alt="step" className="h-70 w-full object-cover object-center max-w-sm rounded-2xl" />
                        <div key={index} className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
                            <h3 className="text-2xl font-medium text-white">
                                {step.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
