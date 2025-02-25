import Visuals1 from "./visuals-1";
import Visuals2 from "./visuals-2";

const FinalCallVisual = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="md:block hidden">
        <Visuals1 />
      </div>
      <div className="block md:hidden">
        <Visuals2 />
      </div>
    </div>
  );
};

export default FinalCallVisual;
