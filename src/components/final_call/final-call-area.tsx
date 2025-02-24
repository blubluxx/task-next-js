import FinalCallPanel from "./final-call-panel";
import FinalCallVisual from "./final-call-visual";

const FinalCallArea = () => {
  return (
    <section id="final-call">
      <div className="flex flex-col justify-center items-center bg-transparent">
        <div className="flex flex-row bg-gradient-to-tr from-[#dddbce] to-[#959389] justify-center items-center p-24 px-28 md:w-[98vw]">
          <div className="flex flex-row relative gap-24">
            <FinalCallPanel />
            <FinalCallVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallArea;
