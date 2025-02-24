import { IPanelItem } from "../info_panel/info-panel";
import HowItWorksItem from "./how-it-works-item";

const items: IPanelItem[] = [
  {
    iconSrc: "/create-profile-icon.webp",
    iconAlt: "create-profile",
    title: "1 стъпка",
    description: "СЪЗДАВАТЕ ПРОФИЛ",
  },
  {
    iconSrc: "/pick-icon.webp",
    iconAlt: "pick-the-right-offer",
    title: "2 стъпка",
    description: "ИЗБИРАТЕ ПОДХОДЯЩА ОФЕРТА",
  },
  {
    iconSrc: "/coordinate-icon.webp",
    iconAlt: "coordinate-details",
    title: "3 стъпка",
    description: "СЪГЛАСУВАТЕ ПОДРОБНОСТИТЕ",
  },
  {
    iconSrc: "/complete-icon.webp",
    iconAlt: "complete-order",
    title: "4 стъпка",
    description: "ИЗПЪЛНЯВАТЕ ПОРЪЧКА",
  },
];

const HowItWorksPanel = () => {
  return (
    <ul
      className="
    md:flex md:gap-10 md:p-1 md:flex-row 
    sm:grid sm:grid-cols-2 
    justify-between p-5"
    >
      {items.map((item) => (
        <HowItWorksItem
          key={item.title}
          iconSrc={item.iconSrc}
          iconAlt={item.iconAlt}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default HowItWorksPanel;
