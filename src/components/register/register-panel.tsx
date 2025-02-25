import RegisterForm from "./register-form";

/**
 * RegisterPanel component renders a registration panel with a title and a registration form.
 *
 * @returns {JSX.Element} The rendered registration panel component.
 */

const RegisterPanel = () => {
  return (
    <div
      className="
      sm:flex-1 sm:p-7
      md:p-16 
      p-2 bg-[#e3eeed]
        "
    >
      <div className="p-6">
        <h1 className="font-semibold text-center text-4xl md:text-left text-gray-600">
          РЕГИСТРИРАЙТЕ СЕ
        </h1>
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPanel;
