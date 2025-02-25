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

/**
 * A functional component that renders a list of social media links.
 * Each link is represented by an image.
 *
 * @returns {JSX.Element} A div containing the social media links.
 */

const Socials = () => {
  return (
    <div className="flex gap-4 items-start w-fit ml-6 mt-8">
      {links.map((link: ILink) => (
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
