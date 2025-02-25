import { infoPanelItems } from "@/data/components_data";
import InfoPanelItem from "./info-panel-item";
import { IPanelItem } from "@/data/interfaces";

/**
 * This component displays panel items informing the user of the main benefits of using the platform..
 * Each item contains an icon, title, and description.
 *
 * @type {IPanelItem[]}
 * @property {string} iconSrc - The source path of the icon image.
 * @property {string} iconAlt - The alt text for the icon image.
 * @property {string} title - The title of the panel item.
 * @property {string} description - The description of the panel item.
 */

const InfoPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -translate-y-6 md:-translate-y-16 mx-5">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-6">
        {infoPanelItems.map((item: IPanelItem) => (
          <InfoPanelItem
            key={item.title}
            iconSrc={item.iconSrc}
            iconAlt={item.iconAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default InfoPanel;
