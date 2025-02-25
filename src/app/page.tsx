import FirstStepsArea from "@/components/first_steps/first-steps-area";
import HowItWorksArea from "@/components/how_it_works/how-it-works-area";
import BenefitsArea from "@/components/benefits/benefits-panel";
import RegisterArea from "@/components/register/register-area";
import StageArea from "@/components/stage/stage-area";
import FinalCallArea from "@/components/final_call/final-call-area";
import Footer from "@/layouts/footer/footer";

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
