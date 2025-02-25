import Link from "next/link";
import Image from "next/image";

import FooterLinks from "./footer-links";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer id="footer">
      <div
        className="
        bg-[#545756] flex flex-col
        text-white p-20 w-full h-full
          md:flex-row
        "
      >
        <div className="flex flex-col gap-8">
          <div className="">
            <Image src="/logo.svg" alt="ofertirai-me-logo" />
          </div>
          <div className="w-full">
            <p className="text-sm max-w-xs">
              Easily solve your problems with our services, accessible from
              every page on our website.
            </p>
          </div>
          <div className="font-bold text-right">
            <h3 className="text-lg">Links</h3>
            <Link className="text-sm" href="#">
              Terms and conditions
            </Link>
          </div>
        </div>
        <FooterLinks />
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
