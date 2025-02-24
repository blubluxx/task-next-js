"use client";

import RegisterButton from "../common/regiter-button";
import { scrollTo } from "../../utils/utils";

const FinalCallPanel = () => {
  return (
    <div className="flex flex-col text-gray-600 gap-7 max-w-md py-10">
      <h1 className="lg:text-4xl xs:text-3xl font-bold min-w-max">
        Лесна и бърза регистрация
      </h1>
      <p className="lg:text-2xl xs:text-lg">
        С ofertirai.me получаваш достъп до нови клиенти - свързваме те с хора,
        търсещи твоите умения!
        <br />
        Подаряваме ти достъп до всички предимства които предлага ofertirai.me в
        рамките на първият месец!
        <br />
        Сега е моментът регистрирайте се днес и започнете да изполвате
        платформата безплатно!
      </p>
      <RegisterButton
        onClick={() => scrollTo("register-area")}
        extraStyle="bg-[#2f325b] md:rounded-2xl lg:w-3/4 sm:w-1/2 sm:text-sm lg:text-lg xs:self-center md:self-start"
      />
    </div>
  );
};

export default FinalCallPanel;
