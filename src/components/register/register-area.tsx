import exp from "constants";
import RegisterPanel from "./register-panel";

const RegisterArea = () => {
  return (
    <section id="register-area">
      <div className="flex md:flex-row flex-col  justify-center">
        <div className="flex-1">
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
