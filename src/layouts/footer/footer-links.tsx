import Link from "next/link";

interface ILink {
  title: string;
  url: string;
}

const links: ILink[] = [
  { title: "Home", url: "/" },
  { title: "About us", url: "#" },
  { title: "Categories", url: "#" },
  { title: "Create Order", url: "#" },
  { title: "Pricing", url: "#" },
];

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
        {links.map((link: ILink) => (
          <li key={link.title} className="">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
export type { ILink };
export { links };
