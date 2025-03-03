"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import RegisterButton from "../common/register-button";
import { registerUser } from "@/lib/auth";
import { useState } from "react";
import FormInput from "./form-input";
import { IFormInput } from "@/data/interfaces";
import { registerFormFields } from "@/data/components_data";

const errorMsg = "Това поле е задължително.";

/**
 * RegisterForm component handles the user registration process.
 * It uses the `useForm` hook from `react-hook-form` to manage form state and validation.
 * On form submission, it attempts to register the user and redirects to the login page upon success.
 *
 * @returns {JSX.Element} The rendered RegisterForm component.
 *
 * @remarks
 * This component uses the `useRouter` hook from `next/router` for navigation.
 * It also uses a custom `registerUser` function to handle the registration logic.
 */

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
        {registerFormFields.map(({ name, label, placeholder }) => (
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
