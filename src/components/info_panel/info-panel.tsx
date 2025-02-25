import InfoPanelItem from "./info-panel-item";

interface IPanelItem {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

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

const items: IPanelItem[] = [
  {
    iconSrc: "/icons/umbrella-icon.webp",
    iconAlt: "easy-registration",
    title: "Лесна регистрация",
    description:
      "Само няколко стъпки и вече си на платформата, готов за нови възможности!",
  },
  {
    iconSrc: "/icons/check-icon.webp",
    iconAlt: "reliable-platform",
    title: "Надеждна Платформата",
    description:
      "Ние се грижим за надеждността, за да можеш ти да се фокусираш върху работата си.",
  },
  {
    iconSrc: "/icons/wallet-icon.webp",
    iconAlt: "new-clients",
    title: "Нови Клиенти",
    description:
      "Ние инвестираме в реклами и популяризация, за да привлечем широка аудитория, които те търсят!",
  },
];

const InfoPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -translate-y-6 md:-translate-y-16 mx-5">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-6">
        {items.map((item: IPanelItem) => (
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
export type { IPanelItem };
