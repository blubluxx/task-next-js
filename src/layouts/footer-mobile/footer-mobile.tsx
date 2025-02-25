import MobileFooterLinks from "./mobile-links";
import MobileSocials from "./mobile-socials";

const FooterMobile = () => {
  return (
    <div className="flex flex-col h-full py-10 gap-8">
      <MobileSocials />
      <MobileFooterLinks />
      <div className="text-sm flex flex-col gap-4">
        <h3 className="font-semibold uppercase">GET IN TOUCH</h3>
        <div>
          <p>
            Email:{" "}
            <a href="mailto:support@ofertirai.me">support@ofertirai.me</a>
          </p>
          <p>
            Phone: <a href="tel:+123456789">123-456-789</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
