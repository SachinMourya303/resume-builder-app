import { ArrowRightIcon } from "lucide-react";

export default function CallToAction() {
    return (
        <div className="flex flex-col max-w-5xl mt-40 mx-auto items-center justify-center text-center py-16 rounded-xl glass">
            <h2 className="text-2xl md:text-4xl font-medium mt-2">
                Ready to build?
            </h2>
            <p className="mt-4 text-sm/7 max-w-md">
                See how fast you can turn your ideas into reality. Get started for free, no credit card required.
            </p>
            <button className="btn glass flex items-center gap-2 mt-8">
                Try now
                <ArrowRightIcon className="size-4" />
            </button>
        </div>
    );
};