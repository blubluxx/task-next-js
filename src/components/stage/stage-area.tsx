import Description from "./description";

/**
 * StageArea component renders a section containing an image and a description.
 *
 * @returns {JSX.Element} The JSX code for the stage area section.
 */

const StageArea = () => {
  return (
    <section id="stage-area">
      <div className="relative w-full">
        <img
          src="/images/bg-stage-area.webp"
          alt="Stage Area Img"
          className="w-full"
        />
        <Description />
      </div>
    </section>
  );
};

export default StageArea;
