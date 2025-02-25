import Link from "next/link";

import { socialLinksDesktop } from "@/data/components_data";
import { ISocialLink } from "@/data/interfaces";

/**
 * A functional component that renders a list of social media links.
 * Each link is represented by an image.
 *
 * @returns {JSX.Element} A div containing the social media links.
 */

const Socials = () => {
  return (
    <div className="flex gap-4 items-start w-fit ml-6 mt-8">
      {socialLinksDesktop.map((link: ISocialLink) => (
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
