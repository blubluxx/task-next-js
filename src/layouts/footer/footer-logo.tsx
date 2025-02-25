import Link from "next/link";

/**
 * FooterLogo component renders the logo and additional information in the footer section.
 *
 * @returns {JSX.Element} The JSX code for the footer logo and related information.
 *
 * The component consists of:
 * - An image displaying the logo.
 * - A paragraph with a brief description of the services.
 * - A section with a heading and a link to the terms and conditions, visible only on medium and larger screens.
 */

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <img src="/logo/logo.svg" alt="ofertirai-me-logo" />
      </div>
      <div>
        <p className="text-sm">
          Easily solve your problems with our services, <br />
          accessible from every page on our website.
        </p>
      </div>
      <div className="font-bold text-right md:block hidden">
        <h3 className="text-lg">Links</h3>
        <Link className="text-sm" href="#">
          Terms and conditions
        </Link>
      </div>
    </div>
  );
};

export default FooterLogo;
