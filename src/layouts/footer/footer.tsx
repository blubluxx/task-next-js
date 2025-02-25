import Link from "next/link";

import FooterLinks from "./footer-links";
import Socials from "./socials";
import FooterLogo from "./footer-logo";
import FooterMobile from "../footer-mobile/footer-mobile";

const Footer = () => {
  return (
    <footer id="footer">
      <div
        className="
        bg-[#545756] flex flex-col justify-between
        w-full h-full text-white gap-12        
        md:flex-row md:items-center md:p-16
        p-8
        "
      >
        <div className="md:flex h-full">
          <FooterLogo />
        </div>
        <div className="hidden md:flex">
          <FooterLinks />
        </div>
        <div className="hidden md:flex">
          <Socials />
        </div>

        <div className="flex md:hidden h-full w-full">
          <FooterMobile />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
