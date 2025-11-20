import Navbar from "../components/navbar";
import HeroSection from "../sections/hero-section";
import Features from "../sections/features";
import WorkflowSteps from "../sections/workflow-steps";
import CallToAction from "../sections/Call-to-action";
import Authontication from "./Signup";
import Footer from "../components/footer";

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <main className='px-4'>
                <HeroSection />
                <Features />
                <WorkflowSteps />
                <CallToAction />
            </main>
            <Footer />
        </>
    );
}

export default Homepage