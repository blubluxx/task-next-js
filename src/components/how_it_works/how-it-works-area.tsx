import HowItWorksPanel from "./how-it-works-panel";

/**
 * A component that renders a section
 * describing how the platform works. It includes a title and a `HowItWorksPanel` component.
 *
 * @returns {JSX.Element} A section element with a title and a panel explaining how the platform works.
 */

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
