import Link from "next/link";

interface ILink {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const links: ILink[] = [
  {
    title: "Facebook",
    imageSrc: "/facebook.svg",
    imageAlt: "Facebook",
    href: "https://www.facebook.com/share/2qa1uLD5iymN5yit/",
  },
  {
    title: "Twitter",
    imageSrc: "/twitter.svg",
    imageAlt: "Twitter",
    href: "https://x.com/Ofertirai_Me",
  },
  {
    title: "Instagram",
    imageSrc: "/instagram.svg",
    imageAlt: "Instagram",
    href: "https://instagram.com/ofertirai.me",
  },
  {
    title: "LinkedIn",
    imageSrc: "/linkedin.svg",
    imageAlt: "LinkedIn",
    href: "https://linkedin.com",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-4 items-start w-fit ml-6 mt-8">
      {links.map((link) => (
        <Link href={link.href} key={link.title}>
          <img
            src={link.imageSrc}
            alt={link.imageAlt}
            className="max-size-20"
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
