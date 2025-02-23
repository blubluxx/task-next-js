import { IPanelItem } from "../info_panel/info-panel";

const HowItWorksItem: React.FC<IPanelItem> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <li className="how-it-works-item flex flex-col p-2 items-center text-lg">
      <div className="text-right w-full ml-4">
        <h1 className="text-green-500">{title}</h1>
      </div>
      <div className="w-40 h-40">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div>
        <p className=" text-gray-500 font-semibold">{description}</p>
      </div>
    </li>
  );
};

export default HowItWorksItem;
