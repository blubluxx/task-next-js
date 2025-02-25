import RegisterPanel from "./register-panel";

/**
 * A component that renders a section containing an image and a registration panel.
 *
 * @returns {JSX.Element} The JSX code for the register area section.
 */

const RegisterArea = () => {
  return (
    <section id="register-area">
      <div
        className="
        justify-center
        md:grid md:grid-cols-2
        sm:flex sm:flex-col 
        "
      >
        <div className="sm:flex-1">
          <img
            src="/register-area.webp"
            alt="register"
            className="object-cover w-full h-full"
          />
        </div>
        <RegisterPanel />
      </div>
    </section>
  );
};

export default RegisterArea;
