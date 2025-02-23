import FirstStepsInfo from "./first-steps-info";

const FirstStepsPanel = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-center items-center md:gap-32 flex-grow p-5 h-full">
      <div>
        <img src="/iPhone-img.webp" alt="iPhone" className="h-full" />
      </div>
      <FirstStepsInfo />
    </div>
  );
};

export default FirstStepsPanel;
