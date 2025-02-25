import Image from "next/image";

import { IPanelItem } from "./info-panel";

const InfoPanelItem: React.FC<IPanelItem> = ({
  iconSrc,
  iconAlt,
  title,
  description,
}) => {
  return (
    <li className="flex flex-row gap-2 md:p-4 p-2 text-wrap text-grey-500 flex-1 ">
      <div className="w-fit h-fit">
        <Image src={iconSrc} alt={iconAlt} className="md:w-28 xs:w-20" />
      </div>
      <div>
        <h1 className="mb-4">{title}</h1>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default InfoPanelItem;
