import { IPanelItem } from "./info-panel";

const InfoPanelItem: React.FC<IPanelItem> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <li className="item-info-panel">
      <div className="icon-img">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div>
        <h1 className="mb-2">{title}</h1>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default InfoPanelItem;
