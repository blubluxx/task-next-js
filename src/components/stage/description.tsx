"use client";

import RegisterButton from "../common/register-button";
import { scrollTo } from "../../utils/utils";

/**
 * The `Description` component renders a section with a heading and descriptive text.
 * It includes a call-to-action button for users to register.
 *
 * @returns {JSX.Element} A JSX element containing the description section.
 */

const Description = () => {
  return (
    <div
      className="
      md:absolute md:top-[10vh] md:left-[10vw] md:max-w-[35vw]
      "
    >
      <div
        className="
        md:bg-white md:bg-opacity-60 md:gap-12 md:rounded-3xl
        bg-[#bdbbaf] flex flex-col gap-8 p-8 w-full
        justify-center items-center 
        text-neutral-600 font-bold text-opacity-90"
      >
        <h1 className="lg:text-5xl md:text-2xl sm:text-2xl text-center md:p-0 px-8">
          ГРАБНИ НОВИ КЛИЕНТИ ЗА ТВОИТЕ УСЛУГИ.
        </h1>
        <div className="md:text-left text-center lg:text-xl text-sm">
          <p>Предоставяте услуги в бюти индустрията?</p>
          <p>
            Регистрирайте се бързо и лесно в платформата и вземете БЕЗПЛАТЕН
            достъп към всички предимства в рамките на първият месец
          </p>
        </div>
        <RegisterButton
          onClick={() => scrollTo("register-area")}
          extraStyle="
          bg-yellow-400 text-sm
          md:rounded-xl md:text-white
          sm:max-w-[70vw] 
          xs:text-gray-500 
          "
        />
      </div>
    </div>
  );
};

export default Description;
