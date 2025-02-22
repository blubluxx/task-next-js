import Description from "./description";

const StageArea = () => {
  return (
    <section id="stage-area">
      <div className="relative">
        <div className="md:absolute relative">
          <img
            src="/bg-stage-area.webp"
            alt="Stage Area Img"
            className="md:w-screen w-fit min-h-full"
          />
        </div>
        <div className="relative md:p-12 p-2 py-7 md:bg-transparent bg-neutral-200">
          <Description />
        </div>
      </div>
    </section>
  );
};

export default StageArea;
