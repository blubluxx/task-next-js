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

const FooterLinks = () => {
  return (
    <div className="w-full md:w-auto">
      <ul
        className="
        flex w-full text-md
        md:flex-row justify-between md:p-8 
        flex-col font-thin text-sm"
      >
        {links.map((link) => (
          <li key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
