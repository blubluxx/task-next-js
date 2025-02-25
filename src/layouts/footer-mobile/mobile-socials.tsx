import Link from "next/link";

import { socialLinksMobile } from "@/data/components_data";
import { IconSocial } from "@/data/interfaces";

/**
 * MobileSocials component renders a list of social media icons.

 * @returns {JSX.Element} A div containing social media icons.
 */

const MobileSocials = () => {
  return (
    <div className="flex flex-row h-full w-full justify-start gap-4">
      {socialLinksMobile.map((link: IconSocial, index) => (
        <div key={index} className="h-full">
          <Link href={link.href}>
            <img
              src={link.imageSrc}
              alt={link.imageAlt}
              style={{ width: "25px", height: "25px" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileSocials;
