import FinalCallPanel from "./final-call-panel";

const FinalCallArea = () => {
  return (
    <section id="final-call">
      <div className="flex flex-row bg-gradient-to-tr from-[#dddbce] to-[#959389] h-screen justify-center items-center relative">
        <div className="flex w-full max-w-7xl justify-center items-center relative">
          <FinalCallPanel />
          <div className="flex-1 flex justify-center items-center relative">
            <div className="absolute w-full h-full flex justify-center items-center">
              <img
                src="/green-heart.webp"
                alt="heart"
                className="absolute bottom-4 right-32 w-12 h-12 transform-none"
              />
              <img
                src="/thinking.webp"
                alt="easy-register"
                className="absolute bottom-48 right-32 w-1/3 transform-none"
              />
              <img
                src="/group.webp"
                alt="group"
                className="w-full h-auto max-w-sm object-contain"
                style={{ maxWidth: "400px" }}
              />
              <img
                src="/yellow-heart.webp"
                alt="heart"
                className="absolute bottom-32 left-48 w-16 h-16 transform-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallArea;
