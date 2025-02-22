interface InfoPanelItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const InfoPanelItem: React.FC<InfoPanelItemProps> = ({
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
        <p className="text-green-900 font-medium">{description}</p>
      </div>
    </li>
  );
};

export default InfoPanelItem;
