/**
 * Visuals1 component renders a set of images.
 *
 * @returns A JSX element containing a div with multiple images.
 */

const Visuals1 = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img
        src="/images/yellow-heart.webp"
        alt="heart"
        className="absolute bottom-[54vh] left-[3vw] size-20"
      />
      <img
        src="/images/green-heart.webp"
        alt="heart"
        className="absolute bottom-[30vh] -right-[4vw] size-20"
      />
      <img
        src="/images/thinking.webp"
        alt="easy-register"
        className="absolute bottom-[60vh] -right-[7vw] w-auto h-24"
      />
      <img
        src="/images/group.webp"
        alt="group"
        className="h-auto max-w-2xl min-w-xl"
      />
    </div>
  );
};

export default Visuals1;
