import Link from "next/link";
import FooterLinks from "./footer-links";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer id="footer" className="flex">
      <div className="bg-[#545756] flex flex-col">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center text-white p-20 w-full gap-8">
          <div className="flex flex-col gap-4 w-fit">
            <div className="w-[250px]">
              <img src="/logo.svg" alt="ofertirai-me-logo" />
            </div>
            <div>
              <p className="text-left text-wrap font-light text-xs">
                Easily solve your problems with our services, accessible from
                every page on our website.
              </p>
            </div>
            <div className="flex flex-col text-left justify-end items-end">
              <h3 className="font-bold text-lg">Links</h3>
              <Link className="text-sm" href="#">
                Terms and conditions
              </Link>
            </div>
          </div>
          <FooterLinks />
          <Socials />
        </div>
        {/* <div className="flex w-full h-10 border-t-8 border-white">.</div> */}
      </div>
    </footer>
  );
};

export default Footer;
