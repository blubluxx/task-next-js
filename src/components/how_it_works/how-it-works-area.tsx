import HowItWorksPanel from "./how-it-works-panel";

const HowItWorksArea = () => {
  return (
    <section id="how-it-works">
      <div className="flex flex-col bg-transparent md:p-8 p-3 mx-10">
        <div className="md:p-3 md:ml-4">
          <h1 className="md:text-3xl text-xl font-bold text-left text-gray-500">
            Как работи платформата:
          </h1>
        </div>
        <HowItWorksPanel />
      </div>
    </section>
  );
};

export default HowItWorksArea;
