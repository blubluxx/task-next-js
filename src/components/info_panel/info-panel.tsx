import InfoPanelItem from "./info-panel-item";

interface IPanelItem {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const items: IPanelItem[] = [
  {
    iconSrc: "/umbrella-icon.webp",
    iconAlt: "easy-registration",
    title: "Лесна регистрация",
    description:
      "Само няколко стъпки и вече си на платформата, готов за нови възможности!",
  },
  {
    iconSrc: "/check-icon.webp",
    iconAlt: "reliable-platform",
    title: "Надеждна Платформата",
    description:
      "Ние се грижим за надеждността, за да можеш ти да се фокусираш върху работата си.",
  },
  {
    iconSrc: "/wallet-icon.webp",
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
