import Visuals1 from "./visuals-1";
import Visuals2 from "./visuals-2";

/**
 * `FinalCallVisual` is a functional React component that renders different visual components
 * based on the screen size.
 *
 * - On medium and larger screens, it renders the `Visuals1` component.
 * - On smaller screens, it renders the `Visuals2` component.
 *
 * @returns {JSX.Element} A JSX element containing the visual components.
 */

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
