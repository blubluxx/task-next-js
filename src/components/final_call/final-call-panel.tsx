"use client";

import RegisterButton from "../common/register-button";
import { scrollTo } from "../../utils/utils";

/**
 * A component that renders a panel with a title, description, and a register button.
 *
 * @returns {JSX.Element} A JSX element containing the final call panel.
 *
 * @remarks
 * The `RegisterButton` component is used to trigger a scroll action to the registration area.
 */

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
        extraStyle="
        bg-[#2f325b] w-3/4 
        lg:text-lg
        md:rounded-2xl md:self-start
        sm:text-sm 
        xs:self-center 
      "
      />
    </div>
  );
};

export default FinalCallPanel;
