import Link from "next/link";

import { footerLinksDesktop } from "@/data/components_data";
import { ILink } from "@/data/interfaces";

/**
 * FooterLinks component renders a list of links in the footer section.
 *
 * @returns {JSX.Element} A div containing an unordered list of links. *
 *
 */

const FooterLinks = () => {
  return (
    <div className="w-full">
      <ul
        className="
        flex flex-row justify-center mt-10 gap-5
        text-sm md:text-lg lg:text-xl
        "
      >
        {footerLinksDesktop.map((link: ILink) => (
          <li key={link.title} className="">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
