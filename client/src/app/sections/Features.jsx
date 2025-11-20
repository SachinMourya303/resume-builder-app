import SectionTitle from "../components/section-title";
import { BotIcon, BrainIcon, File } from "lucide-react";

export default function Features() {

    const featuresData = [
        {
            icon: BotIcon,
            title: "AI auto writing",
            description: "Generate strong resume descriptions instantly with AI.",
        },
        {
            icon: BrainIcon,
            title: "ATS friendly templates",
            description: "Clean professional layout for modern resumes.",
        },
        {
            icon: File,
            title: "One click export PDF",
            description: "Create and download resumes in one click.",
        }
    ];
    return (
        <section id="features" className="mt-32">
            <SectionTitle
                title="Amazing features"
            />
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <div key={index} className="hover:-translate-y-0.5 transition duration-300 p-6 rounded-xl space-y-4 glass max-w-80 w-full">
                        <feature.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 line-clamp-2 pb-2">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}