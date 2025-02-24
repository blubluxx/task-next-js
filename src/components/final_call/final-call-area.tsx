import FinalCallPanel from "./final-call-panel";
import FinalCallVisual from "./final-call-visual";

const FinalCallArea = () => {
  return (
    <section id="final-call">
      <div className="flex flex-row bg-gradient-to-tr from-[#dddbce] to-[#959389] justify-center items-center sm:p-5 md:p-24 w-full">
        <div className="flex md:flex-row xs:flex-col relative sm:gap-18 lg:gap-24">
          <FinalCallPanel />
          <FinalCallVisual />
        </div>
      </div>
    </section>
  );
};

export default FinalCallArea;
