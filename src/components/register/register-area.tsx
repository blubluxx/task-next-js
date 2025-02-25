import Image from "next/image";

import RegisterPanel from "./register-panel";

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
          <Image
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
