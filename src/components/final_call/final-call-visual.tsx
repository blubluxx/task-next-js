const FinalCallVisual = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="relative flex justify-center items-center">
        <img
          src="/green-heart.webp"
          alt="heart"
          className="absolute bottom-[30vh] -right-[4vw] w-20 h-auto"
        />
        <img
          src="/thinking.webp"
          alt="easy-register"
          className="absolute bottom-[58vh] -right-[5vw] w-auto h-24"
        />
        <img
          src="/group.webp"
          alt="group"
          className="w-full h-auto max-w-xl object-contain"
        />
        <img
          src="/yellow-heart.webp"
          alt="heart"
          className="absolute -top-[7vh] right-[24vw] w-24 h-auto"
        />
      </div>
    </div>
  );
};

export default FinalCallVisual;
