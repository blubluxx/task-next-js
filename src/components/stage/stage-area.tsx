import InfoPanel from "../info_panel/info-panel";
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
        <Description />
      </div>
      <InfoPanel />
    </section>
  );
};

export default StageArea;
