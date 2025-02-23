import InfoPanel from "../info_panel/info-panel";
import BenefitsPanel from "./benefits-panel";
import FirstStepsPanel from "./first-steps-panel";

const FirstStepsArea = () => {
  return (
    <section
      id="first-steps-area"
      className="flex items-center justify-center min-h-screen"
    >
      <div className="p-12 md:bg-transparent bg-gradient-to-r from-white to-[#ecf7ef] md:from-transparent md:to-transparent">
        <InfoPanel />
        <FirstStepsPanel />
        <BenefitsPanel />
      </div>
    </section>
  );
};

export default FirstStepsArea;
