import Image from "next/image";

const Visuals1 = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src="/yellow-heart.webp"
        alt="heart"
        className="absolute bottom-[54vh] left-[3vw] size-20"
      />
      <Image
        src="/green-heart.webp"
        alt="heart"
        className="absolute bottom-[30vh] -right-[4vw] size-20"
      />
      <Image
        src="/thinking.webp"
        alt="easy-register"
        className="absolute bottom-[60vh] -right-[7vw] w-auto h-24"
      />
      <Image
        src="/group.webp"
        alt="group"
        className="h-auto max-w-2xl min-w-xl"
      />
    </div>
  );
};

export default Visuals1;
