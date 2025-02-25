import Link from "next/link";

import { footerLinksMobile } from "@/data/components_data";
import { ILink } from "@/data/interfaces";

/**
 * A functional component that renders a list of mobile footer links.
 *
 * @returns {JSX.Element} A JSX element containing the mobile footer links.
 */

const MobileFooterLinks = () => {
  return (
    <div className="text-sm flex flex-col gap-4">
      <h3 className="font-semibold uppercase">QUICK LINKS</h3>
      <div className="flex flex-col gap-1">
        {footerLinksMobile.map((link: ILink) => (
          <div key={link.title} className="text-sm">
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileFooterLinks;
