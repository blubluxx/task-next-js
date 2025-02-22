import FirstStepsInfo from "./first-steps-info";

const FirstStepsPanel = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-center items-center md:gap-32 flex-grow p-5">
      <div>
        <img src="/iPhone-img.webp" alt="iPhone" />
      </div>
      <FirstStepsInfo />
    </div>
  );
};

export default FirstStepsPanel;
