import HowItWorksPanel from "./how-it-works-panel";

const HowItWorksArea = () => {
  return (
    <section id="how-it-works">
      <div className="flex flex-col bg-transparent p-8 mx-10">
        <div className="p-3 ml-4">
          <h1 className="text-3xl font-bold text-left text-gray-500">
            Как работи платформата:
          </h1>
        </div>
        <HowItWorksPanel />
      </div>
    </section>
  );
};

export default HowItWorksArea;
