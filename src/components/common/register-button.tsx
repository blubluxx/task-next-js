import { RegisterButtonProps } from "@/data/interfaces";
import { JSX } from "react";

/**
 * RegisterButton component
 * @description Button for registration
 * @param {string} extraStyle - Additional styles for the button
 * @param {function} onClick - Function to be called when the button is clicked
 * @returns {JSX.Element} - Rendered RegisterButton component
 * @example
 * <RegisterButton extraStyle="text-lg" onClick={() => console.log("Button clicked")} />
 *
 */

const RegisterButton: React.FC<RegisterButtonProps> = ({
  extraStyle,
  onClick,
}): JSX.Element => {
  return (
    <button
      className={`
      ${extraStyle || ""}
        md:bg-[#2f325b] shadow-[0px_2px_2px_rgba(0,0,0,0.3)] 
        p-4 w-[90%] lg:text-xl rounded-full text-white
      `}
      onClick={onClick}
    >
      РЕГИСТРИРАЙТЕ СЕ
    </button>
  );
};

export default RegisterButton;
