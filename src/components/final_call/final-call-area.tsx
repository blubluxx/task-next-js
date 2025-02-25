import FinalCallPanel from "./final-call-panel";
import FinalCallVisual from "./final-call-visual";

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
