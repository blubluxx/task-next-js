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
    <div className="w-full md:flex-1">
      <ul
        className="
        flex flex-col justify-center mt-10 
        md:flex-row md:text-lg
        text-sm"
      >
        {links.map((link) => (
          <li key={link.title} className="px-8">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
