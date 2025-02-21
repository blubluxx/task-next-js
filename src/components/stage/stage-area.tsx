import Description from "./description";

const StageArea = () => {
  return (
    <section id="stage-area">
      <div className="relative">
        <div className="md:absolute relative">
          <img
            src="/bg-stage-area.webp"
            alt="Stage Area Img"
            className="w-screen"
          />
        </div>
        <div className="">
          <Description />
        </div>
      </div>
    </section>
  );
};

export default StageArea;
