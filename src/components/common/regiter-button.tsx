interface RegisterButtonProps {
  extraStyle?: string;
  onClick?: () => void;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({
  extraStyle,
  onClick,
}) => {
  return (
    <button
      className={`
      ${extraStyle || ""}
        md:bg-[#2f325b] shadow-[0px_2px_2px_rgba(0,0,0,0.3)] 
        p-4 w-[90%] text-xl rounded-full text-white
      `}
      onClick={onClick}
    >
      РЕГИСТРИРАЙТЕ СЕ
    </button>
  );
};

export default RegisterButton;
