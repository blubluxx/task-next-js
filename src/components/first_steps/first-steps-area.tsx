import InfoPanel from "../info_panel/info-panel";
import FirstStepsPanel from "./first-steps-panel";

/**
 * FirstStepsArea component renders a section containing information about
 * the main benefits of using the platform.
 *
 * It includes an InfoPanel and a FirstStepsPanel.
 *
 * @returns {JSX.Element} The rendered section element.
 */

const FirstStepsArea = () => {
  return (
    <section id="first-steps-area">
      <div className="flex items-center justify-center">
        <div
          className="
          bg-gradient-to-r from-white to-[#ecf7ef] 
          md:from-transparent md:to-transparent 
          md:p-10 p-0 md:bg-transparent 
          "
        >
          <InfoPanel />
          <FirstStepsPanel />
        </div>
      </div>
    </section>
  );
};

export default FirstStepsArea;
