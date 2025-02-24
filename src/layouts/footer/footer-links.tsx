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
      <ul className="flex flex-col md:flex-row p-8 font-light w-full items-center justify-between text-md">
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
