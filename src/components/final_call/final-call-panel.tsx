"use client";

import RegisterButton from "../common/regiter-button";
import { scrollTo } from "../../utils/utils";

const FinalCallPanel = () => {
  return (
    <div className="flex flex-col text-gray-600 gap-7 text-wrap min-w-md max-w-lg">
      <h1 className="text-4xl font-bold">Лесна и бърза регистрация</h1>
      <p className="text-2xl ">
        С ofertirai.me получаваш достъп до нови клиенти - свързваме те с хора,
        търсещи твоите умения!
        <br />
        Подаряваме ти достъп до всички предимства които предлага ofertirai.me в
        рамките на първият месец!
        <br />
        Сега е моментът регистрирайте се днес и започнете да изполвате
        платформата безплатно!
      </p>
      <RegisterButton onClick={() => scrollTo("register-area")} />
    </div>
  );
};

export default FinalCallPanel;
