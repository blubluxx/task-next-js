import FirstStepsInfo from "./first-steps-info";

/**
 * FirstStepsPanel component renders a panel with an image and additional information.
 *
 * The panel is styled to be responsive, adjusting its layout based on the screen size.
 *
 * @returns {JSX.Element} The rendered FirstStepsPanel component.
 */

const FirstStepsPanel = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-center items-center md:gap-32 flex-grow p-5 h-full">
      <div>
        <img src="/images/iPhone-img.webp" alt="iPhone" className="h-full" />
      </div>
      <FirstStepsInfo />
    </div>
  );
};

export default FirstStepsPanel;
