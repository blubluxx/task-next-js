/**
 * Visuals2 component renders an image.
 *
 * @returns A JSX element containing a div with an image.
 */

const Visuals2 = () => {
  return (
    <div className="relative flex flex-row justify-center items-center h-fit">
      <img
        src="/green-heart.webp"
        alt="heart"
        className="absolute h-20 -top-10 left-[20vw]"
      />
      <img src="/easy-registration.webp" alt="heart" className="h-[70vh]" />
    </div>
  );
};

export default Visuals2;
