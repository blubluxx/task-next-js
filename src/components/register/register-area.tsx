import exp from "constants";
import RegisterPanel from "./register-panel";

const RegisterArea = () => {
  return (
    <section id="register-area">
      <div
        className="
        sm:flex sm:flex-col 
        md:grid md:grid-cols-2
        justify-center
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
