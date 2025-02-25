import {
  IPanelItem,
  IFormField,
  ILink,
  ISocialLink,
  IconSocial,
} from "./interfaces";

const infoPanelItems: IPanelItem[] = [
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

const registerFormFields: IFormField[] = [
  { name: "firstName", label: "Име", placeholder: "Въведете Вашето име" },
  {
    name: "lastName",
    label: "Фамилия",
    placeholder: "Въведете Вашето фамилно име",
  },
  { name: "email", label: "Имейл", placeholder: "Въведете своя имейл" },
  {
    name: "phone",
    label: "Мобилен телефон",
    placeholder: "Въведете номера на мобилния си телефон",
  },
];

const footerLinksDesktop: ILink[] = [
  { title: "Home", url: "/" },
  { title: "About us", url: "#" },
  { title: "Categories", url: "#" },
  { title: "Create Order", url: "#" },
  { title: "Pricing", url: "#" },
];

const footerLinksMobile: ILink[] = footerLinksDesktop
  .filter((link) => link.title !== "Categories")
  .concat({ title: "Accounter", url: "#" });

const socialLinksDesktop: ISocialLink[] = [
  {
    title: "Facebook",
    imageSrc: "/social/facebook.svg",
    imageAlt: "Facebook",
    href: "https://www.facebook.com/share/2qa1uLD5iymN5yit/",
  },
  {
    title: "Twitter",
    imageSrc: "/social/twitter.svg",
    imageAlt: "Twitter",
    href: "https://x.com/Ofertirai_Me",
  },
  {
    title: "Instagram",
    imageSrc: "/social/instagram.svg",
    imageAlt: "Instagram",
    href: "https://instagram.com/ofertirai.me",
  },
  {
    title: "LinkedIn",
    imageSrc: "/social/linkedin.svg",
    imageAlt: "LinkedIn",
    href: "https://linkedin.com",
  },
];

const socialLinksMobile: IconSocial[] = [
  {
    imageSrc: "/social/facebook-tiny.svg",
    imageAlt: "Facebook icon by Icons8",
    href: "https://www.facebook.com/share/2qa1uLD5iymN5yit/",
  },
  {
    imageSrc: "/social/twitter-tiny.svg",
    imageAlt: "Twitter Bird icon by Icons8",
    href: "https://x.com/Ofertirai_Me",
  },
  {
    imageSrc: "/social/instagram-tiny.svg",
    imageAlt: "Instagram icon by Icons8",
    href: "https://instagram.com/ofertirai.me",
  },
];

export {
  infoPanelItems,
  registerFormFields,
  footerLinksDesktop,
  footerLinksMobile,
  socialLinksDesktop,
  socialLinksMobile,
};
