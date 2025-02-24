import Link from "next/link";
import FooterLinks from "./footer-links";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="bg-[#545756] flex flex-row justify-center items-center text-white p-20 w-full gap-8">
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
            <h3 className="font-bold text-lg text-white">Links</h3>
            <Link className="font-light text-sm" href="#">
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
