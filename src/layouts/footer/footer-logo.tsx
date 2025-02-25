import Link from "next/link";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <img src="/logo.svg" alt="ofertirai-me-logo" />
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
