import InfoPanel from "../info_panel/info-panel";
import FirstStepsPanel from "./first-steps-panel";

const FirstStepsArea = () => {
  return (
    <section
      id="first-steps-area"
      className="flex items-center justify-center "
    >
      <div className="md:p-10 p-0 md:bg-transparent bg-gradient-to-r from-white to-[#ecf7ef] md:from-transparent md:to-transparent ">
        <InfoPanel />
        <FirstStepsPanel />
      </div>
    </section>
  );
};

export default FirstStepsArea;
