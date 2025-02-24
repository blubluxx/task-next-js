"use client";

import RegisterButton from "../common/regiter-button";
import { scrollTo } from "../../utils/utils";

const Description = () => {
  return (
    <div
      className="
      md:absolute md:top-[10vh] md:left-[10vw] md:min-w-[35vw] md:max-w-[34vw]
      "
    >
      <div
        className="
        md:bg-white md:bg-opacity-60 md:gap-12 md:rounded-3xl
        bg-[#bdbbaf] flex flex-col gap-8 p-8 w-full
        justify-center items-center 
        text-neutral-600 font-bold text-opacity-90 text-xl"
      >
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
          extraStyle="bg-yellow-400 sm:max-w-[70vw] md:rounded-xl xs:text-gray-500 md:text-white"
          onClick={() => scrollTo("register-area")}
        />
      </div>
    </div>
  );
};

export default Description;
