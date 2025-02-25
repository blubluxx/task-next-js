import Image from "next/image";

import { IPanelItem } from "../info_panel/info-panel";

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
        <Image src={iconSrc} alt={iconAlt} />
      </div>
      <div>
        <p className=" text-gray-500 font-semibold">{description}</p>
      </div>
    </li>
  );
};

export default HowItWorksItem;
