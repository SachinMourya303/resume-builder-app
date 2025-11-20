
export default function HeroSection() {

    return (
        <section className="flex flex-col items-center">
            <div className="flex items-center gap-3 mt-32">
                <p>Smart, Fast, Always Active.</p>
            </div>
            <h1 className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl">
                Create a Job-Winning Resume in Minutes.
            </h1>
            <p className="text-center text-gray-100 text-base/7 max-w-md mt-6">
                AI-powered builder that helps you craft a professional resume effortlessly.
            </p>

            <div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6">
                <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                    Create Resume
                </button>
                <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                    View Templates
                </button>
            </div>
        </section >
    );
}