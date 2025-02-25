import Description from "./description";

const StageArea = () => {
  return (
    <section id="stage-area">
      <div className="relative w-full">
        <img
          src="/bg-stage-area.webp"
          alt="Stage Area Img"
          className="w-full"
        />
        <Description />
      </div>
    </section>
  );
};

export default StageArea;
