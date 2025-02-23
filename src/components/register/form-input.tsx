import { IFormFields } from "./register-form";

const FormInput = (props: IFormFields) => {
  const { name, label, placeholder, errorMsg, register, errors } = props;

  return (
    <div className="register-form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { required: errorMsg })}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default FormInput;
