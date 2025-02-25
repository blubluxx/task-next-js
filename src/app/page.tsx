import FirstStepsArea from "@/components/first_steps/first-steps-area";
import HowItWorksArea from "@/components/how_it_works/how-it-works-area";
import BenefitsArea from "@/components/benefits/benefits-panel";
import RegisterArea from "@/components/register/register-area";
import StageArea from "@/components/stage/stage-area";
import FinalCallArea from "@/components/final_call/final-call-area";
import Footer from "@/layouts/footer/footer";

/**
 * The Home component serves as the main landing page of the application.
 * Sections:
 * - StageArea: Staging areea.
 * - FirstStepsArea: Provides initial guidance for new users.
 * - BenefitsArea: Highlights the benefits of using the platform.
 * - RegisterArea: Contains the registration form for new users.
 * - HowItWorksArea: Explains how the platform works.
 * - FinalCallArea: Provides a summary.
 * - Footer: Displays the footer of the platform.
 *
 * @returns {JSX.Element} The rendered Home component.
 */

export default function Home() {
  return (
    <>
      <main>
        <StageArea />
        <FirstStepsArea />
        <BenefitsArea />
        <RegisterArea />
        <HowItWorksArea />
        <FinalCallArea />
        <Footer />
      </main>
    </>
  );
}
