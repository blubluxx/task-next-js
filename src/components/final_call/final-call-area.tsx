import FinalCallPanel from "./final-call-panel";
import FinalCallVisual from "./final-call-visual";

const FinalCallArea = () => {
  return (
    <section id="final-call">
      <div className="flex flex-row bg-gradient-to-tr from-[#dddbce] to-[#959389] justify-center items-center p-24 px-28">
        <div className="flex flex-row relative gap-24">
          <FinalCallPanel />
          <FinalCallVisual />
        </div>
      </div>
    </section>
  );
};

export default FinalCallArea;
