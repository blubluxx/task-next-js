import { links, ILink } from "../footer/footer-links";
import Link from "next/link";

const mobileLinks: ILink[] = links
  .filter((link) => link.title !== "Categories")
  .concat({ title: "Accounter", url: "#" });

const MobileFooterLinks = () => {
  return (
    <div className="text-sm flex flex-col gap-4">
      <h3 className="font-semibold uppercase">QUICK LINKS</h3>
      <div className="flex flex-col gap-1">
        {mobileLinks.map((link: ILink) => (
          <div key={link.title} className="text-sm">
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileFooterLinks;
