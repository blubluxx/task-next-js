import FinalCallPanel from "./final-call-panel";
import FinalCallVisual from "./final-call-visual";

/**
 * FinalCallArea component renders a section displaying a summary of
 * the benefits of using the platform.
 *
 * This section contains two components: FinalCallPanel and FinalCallVisual
 *
 * @returns {JSX.Element} The rendered FinalCallArea component.
 */

const FinalCallArea = () => {
  return (
    <section id="final-call">
      <div
        className="
        flex flex-row justify-center items-center w-full
        bg-gradient-to-tr from-[#dddbce] to-[#959389]
        sm:p-5 md:p-24 
      "
      >
        <div className="relative flex xs:flex-col items-center md:flex-row sm:gap-18 lg:gap-24">
          <FinalCallPanel />
          <FinalCallVisual />
        </div>
      </div>
    </section>
  );
};

export default FinalCallArea;
