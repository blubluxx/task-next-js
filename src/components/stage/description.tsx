"use client";

import RegisterButton from "../common/regiter-button";
import { scrollTo } from "../../utils/utils";

const Description = () => {
  return (
    <div className="md:absolute md:top-[10vh] md:left-[10vw] md:min-w-[35vw] max-w-min">
      <div className="md:bg-white bg-[#bdbbaf] md:bg-opacity-60 flex flex-col  md:gap-12 gap-8 justify-center items-center text-neutral-600 md:rounded-3xl p-8 font-bold text-opacity-90 text-xl">
        <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-center md:p-0 px-8">
          ГРАБНИ НОВИ КЛИЕНТИ ЗА ТВОИТЕ УСЛУГИ.
        </h1>
        <div className="md:text-left text-center">
          <p>Предоставяте услуги в бюти индустрията?</p>
          <p>
            Регистрирайте се бързо и лесно в платформата и вземете БЕЗПЛАТЕН
            достъп към всички предимства в рамките на първият месец
          </p>
        </div>
        <RegisterButton
          extraStyle="bg-yellow-400"
          onClick={() => scrollTo("register-area")}
        />
      </div>
    </div>
  );
};

export default Description;
