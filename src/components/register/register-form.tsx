"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import RegisterButton from "../common/register-button";
import { registerUser } from "@/lib/auth";
import { useState } from "react";
import FormInput from "./form-input";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface IFormField {
  name: keyof IFormInput;
  label: string;
  placeholder: string;
}

interface IFormFields extends IFormField {
  errorMsg: string;
  register: any;
  errors: any;
}

const formFields: IFormField[] = [
  { name: "firstName", label: "Име", placeholder: "Въведете Вашето име" },
  {
    name: "lastName",
    label: "Фамилия",
    placeholder: "Въведете Вашето фамилно име",
  },
  { name: "email", label: "Имейл", placeholder: "Въведете своя имейл" },
  {
    name: "phone",
    label: "Мобилен телефон",
    placeholder: "Въведете номера на мобилния си телефон",
  },
];

const errorMsg = "Това поле е задължително.";

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setError(null);
    try {
      const authId = await registerUser(data);
      router.push(`https://ofertirai.me/login?auth_id=${authId}`);
      reset();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 pb-5 md:pb-0">
        {formFields.map(({ name, label, placeholder }) => (
          <FormInput
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            errorMsg={errorMsg}
            register={register}
            errors={errors}
          />
        ))}

        <RegisterButton
          extraStyle="
          bg-[#2f325b] w-[90%] mt-4 self-center 
          sm:rounded-xl 
          md:self-start
        "
        />
        {error && <p className="text-red-500 p-2">{error}</p>}
      </div>
    </form>
  );
};

export default RegisterForm;
export type { IFormInput, IFormFields };
