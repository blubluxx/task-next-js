import RegisterForm from "./register-form";

const RegisterPanel = () => {
  return (
    <div className="flex-1 md:p-16 p-2 bg-[#e3eeed]">
      <div className="p-6">
        <h1 className="font-semibold text-4xl md:text-left text-center text-gray-600">
          РЕГИСТРИРАЙТЕ СЕ
        </h1>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPanel;
