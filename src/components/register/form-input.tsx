import { IFormFields } from "./register-form";

const FormInput = (props: IFormFields) => {
  const { name, label, placeholder, errorMsg, register, errors } = props;

  return (
    <div className="flex flex-col gap-1 w-full md:w-[80%]">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="p-4 rounded border-gray-300 w-full text-md font-semibold"
        {...register(name, { required: errorMsg })}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default FormInput;
