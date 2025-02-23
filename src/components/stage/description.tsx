"use client";

import RegisterButton from "../common/regiter-button";

const Description = () => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="md:absolute md:top-1/3 md:left-1/3 md:transform md:-translate-x-2/3 md:-translate-y-1/2 md:w-1/3 md:max-h-min">
      <div className="md:bg-white bg-[#bdbbaf] md:bg-opacity-60 flex flex-col  md:gap-12 gap-8 justify-center items-center text-neutral-600 md:rounded-3xl p-8 font-semibold text-opacity-90 text-wrap ">
        <h1 className="md:text-4xl text-3xl text-center font-bold md:p-0 px-8">
          ГРАБНИ НОВИ КЛИЕНТИ ЗА ТВОИТЕ УСЛУГИ.
        </h1>
        <div className="md:text-left text-center md:text-base text-lg">
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
