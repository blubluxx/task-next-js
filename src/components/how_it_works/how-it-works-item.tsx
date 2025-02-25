import { IPanelItem } from "../info_panel/info-panel";

/**
 * A component that represents an item in the "How It Works" section.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.iconSrc - The source URL of the icon image.
 * @param {string} props.iconAlt - The alt text for the icon image.
 * @param {string} props.title - The title of the item.
 * @param {string} props.description - The description of the item.
 *
 * @returns {JSX.Element} The rendered component.
 */

const HowItWorksItem: React.FC<IPanelItem> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <li className="how-it-works-item flex flex-col items-center p-2 md:text-lg md:w-2/3 xs:w-1/2">
      <div className="text-right w-full">
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
