interface RegisterButtonProps {
  extraStyle?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ extraStyle }) => {
  return (
    <button
      className={`
        md:bg-[#2f325b] md:shadow-sm shadow-[0px_2px_2px_rgba(0,0,0,0.3)] md:p-4 p-3 md:w-2/3 w-[90%] 
        h-fit md:rounded-xl rounded-full md:text-neutral-100 text-neutral-600  
        ${extraStyle || ""}
      `}
    >
      РЕГИСТРИРАЙТЕ СЕ
    </button>
  );
};

export default RegisterButton;
