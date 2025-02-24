import HowItWorksPanel from "./how-it-works-panel";

const HowItWorksArea = () => {
  return (
    <section id="how-it-works">
      <div className="flex flex-col bg-transparent md:p-8 p-2 md:mx-18">
        <div className="p-3 ml-6">
          <h1 className="font-bold text-left text-gray-500 md:text-4xl xs:text-2xl">
            Как работи платформата:
          </h1>
        </div>
        <HowItWorksPanel />
      </div>
    </section>
  );
};

export default HowItWorksArea;
