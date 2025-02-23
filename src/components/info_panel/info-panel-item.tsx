import { IPanelItem } from "./info-panel";

const InfoPanelItem: React.FC<IPanelItem> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <li className="flex flex-row gap-1 md:p-4 p-2 text-wrap text-grey-500 text-sm font-semibold w-fit flex-1 ">
      <div className="w-fit h-fit">
        <img src={iconSrc} alt={iconAlt} className="w-24" />
      </div>
      <div>
        <h1 className="mb-2">{title}</h1>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default InfoPanelItem;
